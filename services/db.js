const { Pool } = require('pg');
const config = require('../config');
const { text } = require('express');
const pool = new Pool(config.db);

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

async function queryFields(query, params) {
  const client = await pool.connect()
  if (params == 'sätze') {
    condition = "SELECT alias.column_name\
                      FROM (SELECT column_name, data_type\
                              FROM information_schema.columns\
                              WHERE table_schema = 'public'\
                              AND table_name   = $1) \
                            alias \
                      WHERE  alias.data_type = 'boolean'"
  } else {
    condition = "SELECT alias.column_name\
                      FROM (SELECT column_name, data_type\
                              FROM information_schema.columns\
                              WHERE table_schema = 'public'\
                              AND table_name   = $1) \
                            alias"
  }
  const q = {text: condition,
    values: [params],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function queryVerb(query, params) {
  
  const client = await pool.connect()
  const q = {
    text: "SELECT verb, bedeutung FROM verben WHERE to_tsvector('german', verb) @@ plainto_tsquery($1);",
    values: [query.query.w],
  }
  
  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function queryPersonalPronomen(query, params) {
  
  const client = await pool.connect()
  const q = {
    text: "SELECT * FROM personal_pronomen WHERE function_n != 'nominativ' ORDER BY RANDOM() LIMIT 1;",
    values: [],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function getJederAlle(query, params) {
  
  const client = await pool.connect()
  const q = {
    text: "SELECT * FROM jeder_und_alle ORDER BY RANDOM() LIMIT 1;",
    values: [],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function quizSätzeverbinden(query, params) {

  const client = await pool.connect()

  const months = ["und", "sondern", "aber", "denn", 
    "oder", "trotzdem", "deshalb", "weil", "da", "wenn",
    "obwohl", "ob", "dass", "als"];
  const random = Math.floor(Math.random() * months.length);
  const q = {
    text: "SELECT * FROM sätze WHERE to_tsvector('german_nostop', satz) @@ plainto_tsquery('german_nostop', 'dass') ORDER BY RANDOM() LIMIT 1;",
    values: [],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}


async function quizSatz(query, params) {

  const client = await pool.connect()
  const q = {
    text: "SELECT * FROM sätze ORDER BY RANDOM() LIMIT 1;",
    values: [],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function quizWort(query=true, params) {

  const client = await pool.connect()

  if (query == false) {
    nicht_wort = `WHERE nicht_wort = false`
    condition = `SELECT * FROM wörter ${nicht_wort} and artikel is not null ORDER BY RANDOM() LIMIT 1;`
  } else {
    condition = `SELECT * FROM wörter WHERE artikel IS NULL ORDER BY RANDOM() LIMIT 1;`
  }


  const q = {
    text: condition,
    values: [],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function addPoint(query, params) {

  const client = await pool.connect()
  // console.log(`UPDATE ${query.table} SET correct_point = correct_point + 1 WHERE id = ($1);`)
  const q = {
    text: `UPDATE ${query.table} SET correct_point = correct_point + 1 WHERE id = ($1);`,
    values: [query.id],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

async function minusPoint(query, params) {

  const client = await pool.connect()
  const q = {
    text: `UPDATE ${query.table} SET correct_point = correct_point - 1 WHERE id = ($1);`,
    values: [query.id],
  }

  const res = await client.query(q)
  await client.release()

  return res.rows;
}

/**
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/transactions
 */
async function post(query, params) {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    // const queryText = "\
    //   INSERT INTO sätze (satz, bedeutung, has_bestimmter_artikel) \
    //   VALUES \
    //   ('Die weißen Räume sind hell and schön.', 'The white rooms are bright and beautiful.', true); \
    // "
    let queryText = "INSERT INTO sätze (";
    for (let col in query) {
      queryText += col + ", ";
    }
    queryText = queryText.slice(0, -2); // delete last two characters.
    queryText += ") VALUES ('"
    for (let col in query) {
      if (query[col].includes("'")) {
        queryText += query[col].replace(/'/g, "''") + "', '";
      } else {
        queryText += query[col] + "', '";
      }
    }
    queryText = queryText.slice(0, -4); // delete last four characters.
    queryText += "'); "
    // console.log(queryText)

    const res = await client.query(queryText)
    await client.query('COMMIT')
    return res;
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return;
}


/**
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/transactions
 */
async function postWort(query, params) {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    let queryText =  `UPDATE wörter SET (bedeutung, artikel, singular_nominativ, plural_nominativ, nicht_wort)
                     = ('${query.bedeutung}', '${query.artikel}'
                     , '${query.singular_nominativ}', '${query.plural_nominativ}', '${query.nicht_wort}')
                    WHERE id = ${query.id};`;
    console.log(queryText)
    const res = await client.query(queryText)
    await client.query('COMMIT')
    return res;
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return;
}

async function postVerbenMitPräposition(query, params) {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    let queryText =  `INSERT INTO verben_mit_präposition (verben_mit_präposition, verb, präposition, akkdat, bedeutung)
                     VALUES ('${query.verb} ${query.präposition}', '${query.verb}'
                     , '${query.präposition}', '${query.akkdat}', '${query.bedeutung}');`;
    console.log(queryText)
    const res = await client.query(queryText)
    await client.query('COMMIT')
    return res;
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return;
}

async function postAdjektiv(query, params) {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    let queryText =  `INSERT INTO adjektiv (adjektiv, komparativ, superlativ, regelmäßig, bedeutung)
                     VALUES ('${query.adjektiv}', '${query.komparativ}', '${query.superlativ}', '${query.regelmäßig}', '${query.bedeutung}');`;
    console.log(queryText)
    const res = await client.query(queryText)
    await client.query('COMMIT')
    return res;
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

}

module.exports = {
  query,
  queryFields,
  queryVerb,
  quizWort,
  queryPersonalPronomen,
  getJederAlle,
  quizSatz,
  quizSätzeverbinden,
  addPoint,
  minusPoint,
  post,
  postWort,
  postAdjektiv,
  postVerbenMitPräposition
}
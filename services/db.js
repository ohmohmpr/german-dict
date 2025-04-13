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
      queryText += query[col] + "', '";
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


module.exports = {
  query,
  post
}
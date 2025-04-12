const db = require('./db');
const helper = require('../helper');
const config = require('../config');


module.exports = {
  postSatz
}
// async function postSatz(page = 1) {
//   // const offset = helper.getOffset(page, config.listPerPage);
//   const rows = await db.query(
//     "\
//      INSERT INTO sätze (satz, bedeutung, has_bestimmter_artikel) \
//      VALUES \
//      ('Die weißen Räume sind hell and schön.', 'The white rooms are bright and beautiful.', true); \
//     "
//     // [offset, config.listPerPage]
//   );
//   // const data = helper.emptyOrRows(rows);
//   // const meta = {page};

//   return {
//     // data,
//     // meta
//   }
// }
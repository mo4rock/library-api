const { getConnection } = require('../src/Mysql');

module.exports = async (req, res) => {
    const connection = await getConnection();
    
    const [books] = await connection.query(`
        SELECT title, author, year FROM library.book;
    `);

    res.json({ books });
};
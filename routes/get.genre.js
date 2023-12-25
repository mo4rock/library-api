const { getConnection } = require('../src/Mysql');

module.exports = async (req, res) => {
    const connection = await getConnection();
    
    const [genres] = await connection.query(`
        SELECT name FROM library.genre;
    `);

    const result = [];
    
    for (const genre of genres) {
        result.push(genre.name);
    }

    res.json({ genres: result });
};
const { getConnection } = require('../../src/Mysql');

module.exports = async (req, res) => {
    const connection = await getConnection();
    const genre = req.query.genre;

    const [books] = await connection.query(`
        SELECT 
            title, author, year, genre.name
        FROM
            library.book
                LEFT JOIN
            genre ON genre.id = book.genreId
        WHERE
            name = '${genre}';
    `);

    res.json({ books });
};
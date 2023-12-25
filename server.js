const express = require('express');

const PORT = 7777;

const app = express();
app.use(express.json());

(async () => {
    // 1. Витягнути усі категорії книг які є у бібліотеці
    app.get('/genre', require('./routes/get.genre.js'));
    // 2. Витягнути усі книги які є у бібліотеці
    app.get('/books', require('./routes/get.books.js'));
    // 3. Витягнути усі книги певної категорії
    app.get('/books/genre', require('./routes/books/get.genre.js'));
    // 4. Додати категорію книг у бібліотеку
    app.post('/add/genre', require('./routes/add/post.genre.js'));
    // 5. Додати книгу у певну категорію
    app.post('/add/book', require('./routes/add/post.book.js'));
    // 6. Видалити певну категорію разом з її книгами
    app.delete('/genre', require('./routes/delete.genre.js'));
    // 7. Видалити усі книги певної категорії
    app.delete('/books', require('./routes/delete.books.js'));
    
    app.listen(PORT, () => console.log('SERVER START ON PORT ' + PORT));
})();

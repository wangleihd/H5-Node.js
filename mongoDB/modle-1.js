var mongoose = require('mongoose');
var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';
mongoose.connect(url);

var Bookschema = new mongoose.Schema({
    name: String,
    isbn: Number
});

Bookschema.statics.findByISBN = function(isbn, cbfun){
    this.findOne({isbn: isbn}, function(err, doc){
        cbfun(err, doc);
    });
};

Bookschema.methods.print = function(){
    console.log('The book title:', this.name);
    console.log('The book ISBN:', this.isbn);
};

var Book = mongoose.model('Book', Bookschema);

var book = new Book({
    name: 'MEAN Web Development',
    isbn: 9787100
});

book.save(function(err){
    if(err){
        return console.log('Save book failed!', err);
    }

    Book.findByISBN(9787100, function(err, doc){
        console.log('findByISBN, err, doc:', err, doc);
    })
    book.print();

});

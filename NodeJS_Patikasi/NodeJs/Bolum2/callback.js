// const func1 = () => {
//     console.log("Func 1 tamamlandı");
//     func3();
// }

// const func2 = () => {
//     console.log("Func 2 tamamlandı");
//     // func3();
// }

// const func3 = () => {
//     console.log("Func 3 tamamlandı");
//     func2();
// }

// func1();


const books = [
    {name: 'Kitap 1', author: 'Author 1'},
    {name: 'Kitap 2', author: 'Author 2'},
    {name: 'Kitap 3', author: 'Author 3'},
    {name: 'Kitap 4', author: 'Author 4'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book);
    })
};

const addBook = (newBook, callBack) => {
    books.push(newBook);
    callBack();
}

addBook({name: 'Kitap 5', author: 'Author 5'}, listBooks);
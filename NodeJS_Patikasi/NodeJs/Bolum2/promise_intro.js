console.log('-*-*-*-*-*-*-*- Node JS/Patika.dev -*-*-*-*-*-*-*-');

/**
 * Promise -> Söz ver
 * Resolve, Reject alır
 * Bir cevaba ihtiyacım var. Bu cevap olumlu ise Resolve, olumsuz ise Reject ile dön
 */

// const myPromise = new Promise(function(resolveFunc, rejectFunc) {
//     // resolveFunc('Data fetched!');
//     rejectFunc('Connection refused!');
// });

// console.log(myPromise);

// myPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

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

const addBook = (newBook) => {
    const promise = new Promise((resolve, reject) => {
        try {
            books.push(newBook);
            resolve(books);
        } catch {
            reject('Bir hata oluştu');
        }
    });
    return promise;
}

addBook({name: 'Kitap 5', author: 'Author 5'})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });


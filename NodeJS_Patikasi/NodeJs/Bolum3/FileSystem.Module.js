const fs = require('fs');

/**
 * Dosya içeriğini okumak
 */
const read = () => {
    fs.readFile('./password.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log('Hata: ', error);
            return;
        }
        console.log(data);
    })
}

/**
 * Dosyaya Yazmak
 */

const add = () => {
    const data = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minima earum illum.';
    fs.writeFile('./password.txt', data, function (error, d) {
        if (error) {
            console.log('Hata: ', error);
            return;
        }
        console.log(d);
    });
}

/**
 * Dosyaya eklemek
 */
const append = () => {
    const data2 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur quae exercitationem blanditiis dicta, possimus beatae vel vitae fugiat, accusamus eum dolorum inventore consectetur! Corrupti.\n';
    fs.appendFile('./password.txt', data2, function (error, d) {
        if (error) {
            console.log('Hata: ', error);
            return;
        }
        console.log(d);
    });
}

// read();
append();
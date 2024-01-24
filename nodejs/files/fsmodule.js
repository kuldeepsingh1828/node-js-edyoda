//Recursively delete a directory and its contents using fs module
// unlink
//mkdir
//rmdir
//readdir

const fs = require('fs');

//read a directory

// fs.readdir('files', (err, files) => {
//     if (err) console.log(err);
//     else {
//         files.forEach(file => {
//             fs.unlink('files/' + file, (err) => {
//                 if (err) console.log(err);
//                 else {
//                     console.log('Deleted file: ' + file);
//                 }
//             });
//         });
//     }
// });

// check if file exists or not
fs.access('files/file1.txt', (err) => {
    if (err) console.log(err);
    else {
        fs.readFile('files/file.txt', 'utf-8', (err, data) => {
            if (err) console.log(err);
            else {
                console.log(data);
            }
        }
        );
    }
});
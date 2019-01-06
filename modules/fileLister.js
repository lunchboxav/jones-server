// import and use it in index like this
// const { fileLister } = require('./modules/fileLister')
// fileLister(testFolder, (err, result) => console.log(result))

const fs = require('fs');

let fileLister = (data, callback) => {
  fs.readdir(data, (err, files ) => {
    files.forEach(file => {
      callback(err, file)
    });
  })
}  

module.exports.fileLister = fileLister

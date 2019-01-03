// Someday we'll work on this again

const fs = require('fs')
const testFolder = '/../media'
const path = require('path')

let fileLister = function(callback) {
  let mediaFiles = []
  let mediaPath = path.join(__dirname , testFolder)
  fs.readdir(mediaPath, (err, files) => {
    files.forEach(file => {
      mediaFiles.push(file)
    })
  }) 
}

module.exports.fileLister = fileLister

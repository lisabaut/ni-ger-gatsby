const fs = require('fs')

fs.rename('public/htaccess', 'public/.htaccess', error => { if (error) console.log(error); console.log('File successfully renamed!') })

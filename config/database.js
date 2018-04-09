if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://mladenjanic:sedra1981@ds139459.mlab.com:39459/videodot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost:27017/videodot-dev'}
}
const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const genreController = {
    genreDetail: function(req, res){
        let id = req.params.id;

        db.Genre.findByPk(id, {
            include: [{ association: 'movies' }]
        })
        .then(data =>{
            return res.render('genre', { genre: data });
        })
        .catch(error =>{
            console.log(error);
        });
    },
}   

module.exports = genreController
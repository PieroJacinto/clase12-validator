const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const actorController = {
    actorDetail: function(req, res){
        let id = req.params.id;

        db.Actor.findByPk(id, {
            include: [
                { association: 'movies' },
                {association: "favMovie"}
            ]
        })
        .then(data => {
            if (data.favorite_movie_id) {
                console.log("data actores: ", JSON.stringify(data, null, 4));
                return res.render('actor', { actor: data });                
            } else {
                return res.render('actor', { actor: data });
            }
        })
        .catch(error => {
            console.log(error);
        });
    },
}   




module.exports = actorController
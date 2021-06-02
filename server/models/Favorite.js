const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({
    userFrom:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    },
    movieId:{
       type:String
    },
    movieTitle:{
        type:String
    },
    moviePost:{
        type:String
    },
    movieRunTime:{
        type:String
    }
}, {timestamps: true})





const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = { Favorite }
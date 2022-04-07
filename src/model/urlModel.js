const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({


    urlCode: {
        type:String,
        lowercase:true,
        trim:true 
        
    }, 
    longUrl: {
        type:String,
        required:true,
        trim:true,
      //  match:[/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/]
      match:[/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/]
        },

    shortUrl: {
        type:String,
        trim:true,
     }

},{timestamps:true})


module.exports = mongoose.model('createUrl', urlSchema)
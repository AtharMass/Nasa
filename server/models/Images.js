const mongoose = require('mongoose')
const Schema = mongoose.Schema


const imagesSchema = new Schema({ 
  title : {type: String },
  imgUrl : {type: String},
  description : {type: String },
  isLiked: {type: Boolean}
})
  
const Images = mongoose.model("Images", imagesSchema)
module.exports = Images


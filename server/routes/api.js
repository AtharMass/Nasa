const express = require('express')

const router = express.Router()
const Image = require('../models/Images')


router.get('/images', function (request, response) {
    let {id} = request.query
    let findBy = !id ? {} : {_id: id}

    Image
        .find(findBy,{__v: 0})
        .exec(function (err, images) {
            response.send(images)
        })
})

router.post('/image', function (request, response) {
    let data = request.body
    let result = {code: "" , message: "",image: "" }

    let newImage = new Image({
        title: data.title,
        imgUrl: data.imgUrl,
        description: data.description,
        isLiked: data.isLiked
    })

    if (data.title !== '' && data.imgUrl !== '' && data.description !== '') {
        const savePromise = newImage.save()
        savePromise.then(saved => {
            console.log(saved)
        }).catch(err => {
            console.log(err)
        })
        result.code = 200
        result.image = newImage
        result.message = "The data inserted successfuly"
        
    } else {
        result.code = 422
        result.message = "All fields are required"
    }
    
    response.send( result)
})

router.delete('/image', function (request, response) {
    let {id} = request.query
    let result = {code: "" , message: ""}

    Image.deleteOne({ _id: id })
        .exec((err, success) => {
            if (success === null) {
                result.code = 404
                result.message = "Sorry, we could not find the image"
            } else {
                if ( success.deletedCount === 1){
                    result.code = 200
                    result.message = "The image was successfully deleted"
                }else{
                    result.code = 304
                    result.message = "The image has already been deleted"
                }
            }
            response.send(result)
        })
})

module.exports = router
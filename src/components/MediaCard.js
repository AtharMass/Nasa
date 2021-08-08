import {useLocation, Link} from 'react-router-dom';
import React ,{useState, useEffect} from 'react'
import Media from './Media'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
import axios from 'axios'

function MediaCard(props) {
    const location = useLocation().pathname
    const [isLiked, setIsLiked] = useState(!props.media ? true :  props.media.isLiked ) 
    const [favouriteImage, setFavouriteImage] = useState({} ) 

    const updateIsLiked = isLiked => setIsLiked(isLiked)
    const updateFavouriteImage =  image => setFavouriteImage(image)

    

    const getImage = (id) => {
        return axios.get(`http://localhost:8080/images?id=${id}`)
    }

   
    const getImageById = () => {
        let response = {}
        !props.match ? response = getImage(-1) :  response = getImage(props.match.match.params.id)
        
        response.then(image => {
           updateFavouriteImage(image.data[0])
        })
    }
    
    useEffect(() => {
        getImageById()
    } , [])


    const handleButton = () => {
        let data = props.media

        if (location === '/favourites' ){
            if (isLiked){
                removeImageBy(props.media._id)
            } else{
                    addNewImage(data)
            }
           
        }else{
            if (location !== '/search' ){
                if (isLiked){
                    removeImageBy(favouriteImage._id)
                } else{
                        addNewImage(favouriteImage)
                }
            }else{

                addNewImage(data)
            }
        }

        updateIsLiked(!isLiked)

    }

    const insertImage = image => {
        return axios.post('http://localhost:8080/image', image); 
    }

    const addNewImage = (data) => {
        let image = { title: data.title, 
                    imgUrl: data.imgUrl , 
                    description: data.description,
                    isLiked: true
                }

        let response =  insertImage(image)

        response.then(images => {
        //     MySwal.fire({
        //       icon: 'success',
        //       title: response.data.message,
        //       showConfirmButton: false,
        //       timer: 2000
        // })
            console.log(images.data)
        })
    }

    const removeImageBy = id => {
        let response =  removeImage(id)

        response.then(images => {
                console.log(images.data)
        })
    }

    const removeImage = id => {
        console.log(`id: http://localhost:8080/image?id=${id}`)
        return axios.delete(`http://localhost:8080/image?id=${id}`); 
    }

    const home = () => {
        return <div className="container-fluid">
            <Card className="card-style-astronomy  pb-4">
                <Media className={props.className} media={props.astronomy.image} />
                <Card.Body>
                <Card.Title className="astronomy-title">{props.astronomy.title}</Card.Title>
                <Card.Text className="astronomy-description"> {props.astronomy.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    }

    const searchOrFavourites = data => {
        
        return  (
            <Card key={props.index} className="card-style-media image">
                { location === "/favourites" ?  <Link to={`/favourite/${data._id}`} ><Media className="img-media-nasa" media={data.imgUrl} /></Link> : <Media className="img-media-nasa" media={data.imgUrl}/>}
                <Card.Body>
                    <Card.Text className="media-title">{data.title}</Card.Text>
                    <Card.Text className="astronomy-description"> </Card.Text>
                </Card.Body>
                <Button className="like" id={props.index} variant="outline-info" onClick={handleButton}>{ isLiked ? <AiFillDislike/> : <AiFillLike/>  }</Button>
            </Card>  
      )
    }

    const displayFavourite = () => {
        
        return <div className="container-fluid">
            <Card className="card-style-astronomy  pb-4">
                <Media className={props.className} media={favouriteImage.imgUrl} />
                <Card.Body>
                    <Card.Title className="astronomy-title">{favouriteImage.title}</Card.Title>
                    <Card.Text className="astronomy-description"> {favouriteImage.description}</Card.Text>
                </Card.Body>
                <Button className="like" 
                        variant="outline-info" 
                        onClick={handleButton}>{ isLiked ? <AiFillDislike/> : <AiFillLike/>  }</Button>
                <Link to="/favourites">
                    <Button className="like" variant="outline-warning" >{ <BiArrowBack/> } </Button> 
                </Link>
                       
            </Card>
        </div>
    }
    
    return (
        location === '/home' ? home() 
        :  ( ( location === '/favourites' || location === '/search' ) ? searchOrFavourites(props.media) : displayFavourite())
    )
  }
  
  export default MediaCard;
  
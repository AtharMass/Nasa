import React , {useState, useEffect} from 'react';
import MediaCard from './MediaCard'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

function Favourites() {
  const [images, setImages] = useState([])
  const updateImages = images => {
    setImages(images)}

  const getImages = () => {
    return axios.get("http://localhost:8080/images")
  }

  useEffect( () => {
    const response = getImages()

    response.then(images => {
      updateImages(images.data)
    })

  },[])

  return (
      <div className="container-fluid">
         <Card className="card-style">
            <Card.Header as="h5">NASA Image and Video Library</Card.Header>
            <Card.Body className="body-card">
              <div className="images">
                {images.map( (item,index) => <MediaCard  key={index} className="img-media-nasa" media={item} index={index}/>)} 
              </div>
            </Card.Body>
        </Card>
      </div>
    )
  }
  
export default Favourites;
  
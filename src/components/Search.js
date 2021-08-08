import React, { useState } from 'react';
import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
import Card from 'react-bootstrap/Card'


// import withReactContent from 'sweetalert2-react-content'
import '../styles/search.css'
// import Swal from 'sweetalert2'
import axios from 'axios'

// const MySwal = withReactContent(Swal)

function Search() {
  const NASA_IMAGES_VIDEO_API = "https://images-api.nasa.gov/search?&q="
  const [media, setMedia] = useState([])
  
  const updateMedia = media => setMedia(media)

  const getNASAMedis = (input) => {
    return axios.get(`${NASA_IMAGES_VIDEO_API}${input}`)
  }

  function handleChange(input) {
    let response =  getNASAMedis(input)
    response.then( media => {
      updateMedia( media.data.collection.items);
    })
  }
 
  return (
      <div className="container-fluid">
        <Card className="card-style">
            <Card.Header as="h5">NASA Image and Video Library</Card.Header>
            <Card.Body className="body-card">
              <SearchBar media={media} onChange={handleChange}/>
                <div className="images">
                  {media.map( (item,index) => {
                    let media = {title: item.data[0].title, 
                                imgUrl: !item.links ? null : item.links[0].href, 
                                description: item.data[0].description,
                                isLiked: false}
                    return <MediaCard key={index} className="img-media-nasa" media={media} index={index}/>
                  })}
              </div>
            </Card.Body>
        </Card>
      </div>
       
    )
  }
  
  export default Search;
  
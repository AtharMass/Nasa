import React ,{useState, useEffect} from 'react'
import '../styles/media.css'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'

function Media(props) {
  const [isImage , setIsImage] = useState(false)

  // useEffect(() => {
  //   setIsImage(checkURL(props.media))
  //   console.log(isImage)
  // }, [])

  // function checkURL(url) {
  //   return (!url ? false : url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  // }



  return (
    props.media.match(/\.(jpeg|jpg|gif|png)$/) != null
      ? <Card.Img className={props.className} variant="top" src={props.media} alt="NASA-IM" />
      : <ReactPlayer url={props.media} />
    )
}
  
export default Media;
  
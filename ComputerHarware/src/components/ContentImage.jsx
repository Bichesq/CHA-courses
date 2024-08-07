import React from 'react'
import { Image } from 'react-bootstrap'
import image1 from '../assets/images/1.jpg'

const image = (imgName) => {
    return `/images/${imgName}.jpg`
}

const ContentImage = ({imageName}) => {
    const imagePath = image(imageName);
    return (
        <>
            <div id="slide1" className="carousel-item active" data-index={1}>
                <img src={imagePath} className="d-block w-100" alt={`image ${imageName}`} />
                {/* <Image src={imagePath} /> */}
            </div>  
        </>
    )
}

export default ContentImage

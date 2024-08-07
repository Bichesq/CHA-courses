import React, { useState } from 'react'
import Section from './Section'
import ContentImage from './ContentImage'
import {useSlideContext} from '../contexts/slidesContext'



const Content = () => {
    const {slide} = useSlideContext();
   
    return (
        <>
            <div className="row learn">
                <div className="col-8">
                    <div
                    id="carouselExampleIndicators"
                    className="carousel slide carousel-fade"
                    data-bs-interval="false"
                    data-bs-ride="false"
                    >
                        <div className="carousel-inner">                            
                            <ContentImage imageName={slide.imgName} />                        
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div
                        id="content"
                        className="overflow-auto"
                        style={{ height: "calc(100vh - 140px)" }}
                        >
                        <Section content={ slide.section } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;

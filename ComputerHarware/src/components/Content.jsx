import React, { useContext, useState } from 'react'
import Section from './Section'
import ContentImage from './ContentImage'
import { useOutletContext } from 'react-router-dom'



const Content = () => {
    const { slide } = useOutletContext();
   
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
                        <Section content={slide.section } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;

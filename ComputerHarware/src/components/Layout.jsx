import React, { useState } from 'react'
import Content from './Content'
import Controls from './Controls'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { slides, knowledgeCheckData } from '../data/data'
import { SlideContextProvider } from '../contexts/slidesContext'
import { useSlideContext } from '../contexts/slidesContext'
import LearningMaterial from '../slides-group/LearningMaterial'


let slideIndex = 0;
let questionIndex = 0;
let isLearn = false;

const Layout = () => {
    
    const handleNextSlide = () => {
        const { slide, nextSlide, question, nextQuestion } = useSlideContext();

        if (slideIndex <  (slides.length-1) && isLearn) {
            slideIndex += 1;
            nextSlide(slideIndex);
            console.log(slide)
        } else if (questionIndex < (knowledgeCheckData.length - 2) && !isLearn) {
            questionIndex += 1;
            nextQuestion(questionIndex)
            console.log(question)

        }
        
    }

    return (
        <>
                {/* <SlideContextProvider> */}
                    <Header />
                    <div className="full-screen">
                        <div className="row">
                            <div className="col-8">
                                <h1 id="title">Understanding Computer Hardware: A Beginner's Guide</h1>
                            </div>
                            <div className="col-4">
                                <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a id="learn" className="nav-link active">Learning Material</a>
                                </li>
                                <li className="nav-item">
                                    <a id="quiz" className="nav-link disabled">Knowledge Check</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <LearningMaterial />
                        {/* <Outlet /> */}
                        <Controls onNext={ handleNextSlide} />
                    </div>
                {/* </SlideContextProvider> */}
        </>
    )
}

export default Layout

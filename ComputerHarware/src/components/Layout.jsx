import React, { useEffect, useState } from 'react'
import Content from './Content'
import Controls from './Controls'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { slides, knowledgeCheckData } from '../data/data'
import { Navigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/logo.png'


let sIndex = 0;
let qIndex = 0;
let isLearn = true;
let learnStatus = 'active';


const Layout = () => {
    const [slide, setSlide] = useState(slides[0]);
    const [question, setQuestion] = useState(knowledgeCheckData[0]);
    const [progress, setProgress] = useState(0);
    const [isContent, setIsContent] = useState(isLearn);
    const [quizStatus, setquizStatus] = useState('disable');
    const [slideIndex, setSlideIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0)



    const navigate = useNavigate();
    console.log('qIndex: ' + qIndex)
    console.log('No of slides: ' + (knowledgeCheckData.length-2))
    // console.log(progress)
    const handleNextSlide = () => {
        if (sIndex <  (slides.length-1) && isLearn) {
            setSlideIndex(++sIndex ); 
            setSlide(slides[sIndex]);
            setProgress(Math.ceil(sIndex/(slides.length-1)*100))
            
        } else if (qIndex < (knowledgeCheckData.length - 2) && !isContent) {
            setQuestionIndex(++qIndex);
            setQuestion(knowledgeCheckData[qIndex]);
            setProgress(Math.ceil(qIndex/(knowledgeCheckData.length-2)*100))
        }        
    }

    const handlePrevSlide = () => {
        if (sIndex > 0 && isLearn) {
            setSlideIndex(--sIndex ); 
            setSlide(slides[sIndex]);
            setProgress(Math.ceil(sIndex/(slides.length-1)*100))
            
        } else if (qIndex > 0 && !isLearn) {
            setQuestionIndex(--qIndex);
            setQuestion(knowledgeCheckData[qIndex]);
            setProgress(Math.ceil(qIndex/(knowledgeCheckData.length-2)*100))
        }        
    }

    const handleClickQuiz = () => {
        navigate('/questions');
        setIsContent(!isLearn);
        isLearn = false;
        setProgress(0);
        setquizStatus('active');
        learnStatus = ''
    }

    const handleClickContent = () => {
        navigate('/learn');
        setIsContent(isLearn);
        isLearn = true;
        setProgress(0);
        learnStatus = 'active';
        setquizStatus('');
        

        
    }

    
    return (
        <>
            <div className="full-screen">
                <div className="row">
                    <div className="col-8 d-flex">
                        <a href='/learn'><Image href='/learn' src={logo} width="35" height="35" rounded className='me-3' /></a>         
                        <h1 id="title">Understanding Computer Hardware: A Beginner's Guide</h1>
                    </div>
                    <div className="col-4">
                        <ul className="nav nav-tabs">
                        <li className="nav-item" >
                            <a id="learn" className={`nav-link ${learnStatus}`} onClick={handleClickContent}>Learning Material</a>
                        </li>
                        <li className="nav-item" onClick={handleClickQuiz}>
                            <a id="quiz" className={`nav-link ${quizStatus}`}>Knowledge Check</a>
                        </li>
                        </ul>
                    </div>
                </div>
                
                <Outlet context={{slide, setSlide, question, setQuestion}} />
                <Controls onNext={ handleNextSlide} onPrev={handlePrevSlide} progress={progress} />
            </div>
                
        </>
    )
}

export default Layout

import React, { useEffect, useState } from 'react'
import Content from './Content'
import Controls from './Controls'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { slides, knowledgeCheckData } from '../data/data'
import { Navigate } from 'react-router-dom'


let sIndex = 0;
let qIndex = 0;
let isLearn = true;
let status = 'disabled'


const Layout = () => {
    const [slide, setSlide] = useState(slides[0]);
    const [question, setQuestion] = useState(knowledgeCheckData[0]);
    const [isContent, setIsContent] = useState(isLearn);
    const [slideStatus, setSlideStatus] = useState(status);
    const [slideIndex, setSlideIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0)
    const navigate = useNavigate();
    console.log(slideStatus)
    console.log(qIndex + ' and ' + (knowledgeCheckData.length -2))
    
    const handleNextSlide = () => {
        if (sIndex <  (slides.length-1) && isLearn) {
            setSlideIndex(() => sIndex++); 
            setSlide(slides[sIndex]);
        } else if (qIndex < (knowledgeCheckData.length - 2) && !isLearn) {
            setQuestionIndex(() => qIndex++);
            setQuestion(knowledgeCheckData[qIndex]);
        }        
    }

    const handleClickQuiz = () => {
        navigate('/questions');
        setIsContent(() => !isLearn)
    }

    useEffect(() => {
        if (qIndex = (knowledgeCheckData.length - 2)){
            setIsContent(() => !isLearn);
            // setSlideStatus((ss) => 'active');
        }
    }, [qIndex])

    return (
        <>
                
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
                                <li className="nav-item" onClick={handleClickQuiz}>
                                    <a id="quiz" className={`nav-link ${slideStatus}`}>Knowledge Check</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        
                <Outlet context={{slide, setSlide, question, setQuestion}} />
                        <Controls onNext={ handleNextSlide} />
                    </div>
                
        </>
    )
}

export default Layout

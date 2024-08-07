import React, { createContext, useState, useContext } from 'react';
import { slides, knowledgeCheckData } from '../data/data'

const SlideContext = createContext();

export const SlideContextProvider = ({children}) => {
    const [slide, setSlide] = useState(slides[0]);
    const [question, setQuestion] = useState(knowledgeCheckData[0]);

    const nextSlide = (index) => {
        setSlide(slides[index]);
    }

    const nextQuestion = (index) => {
        setSlide(knowledgeCheckData[index]);
    }

    const value = { slide, setSlide, question, setQuestion, nextSlide, nextQuestion };

    return <SlideContext.Provider value={value}>{ children }</SlideContext.Provider>
}

export const useSlideContext = () => { useContext(SlideContext) };
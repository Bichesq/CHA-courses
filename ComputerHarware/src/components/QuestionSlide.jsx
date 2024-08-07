import React from 'react'
import AnswerOption from './AnswerOption'

const QuestionSlide = ({ question, answers }) => {
    return (
        <div className="row h-90 quiz ">
            <div className="col-8">
                <div
                id="quizcontent"
                className="overflow-auto"
                style={{ height: "calc(100vh - 150px)" }}
                >
                <section id="q1" className="questions active" data-index={1}>
                    {question}
                    <input
                    type="radio"
                    name="q1a"
                    className="answer q1 incorrect"
                    id="q1-1"
                    />
                    <input
                    type="radio"
                    name="q1a"
                    className="answer q1 incorrect"
                    id="q1-2"
                    />
                    <input
                    type="radio"
                    name="q1a"
                    className="answer q1 correct"
                    id="q1-3"
                    />
                    <input
                    type="radio"
                    name="q1a"
                    className="answer q1 incorrect"
                    id="q1-4"
                    />
                    {answers.map(answer => <AnswerOption key={answer.ansId} res={answer.ans} />)}
                    
                    <div className="submit">
                    <button
                        type="button"
                        className="btn btn-primary btn-md quizbutton"
                        id="q1b"
                        // onClick=""
                    >
                        Submit
                    </button>
                    </div>
                </section>                
                </div>
            </div>
            <div className="col-4">
                <div className="overflow-auto" style={{ height: "calc(100vh - 140px)" }}>
                <section id="quizhint" />
                </div>
            </div>
            </div>

    )
}

export default QuestionSlide

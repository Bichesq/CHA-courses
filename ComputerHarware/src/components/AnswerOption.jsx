import React from 'react';

const AnswerOption = ({res}) => {
    return (
        <div>
            <label htmlFor="q1-1" className="box q1-1">
                    <div className="course">
                        {" "}
                        <span className="circle" />{" "}
                        <span className="subject">
                        {" "}
                        {res}
                        </span>{" "}
                    </div>
                </label>
                
        </div>
    )
}

export default AnswerOption;

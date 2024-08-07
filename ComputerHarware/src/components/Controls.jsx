import React from 'react'

const Controls = ({onNext}) => {

    

    return (
        <>
           <div className="row controls">
                <div className="col-7">
                    <button id="play" type="button" className="btn btn-danger btn-md me-1">
                        <i className="fa-solid fa-play" />
                    </button>
                    <button id="stop" type="button" className="btn btn-dark btn-md me-1">
                        <i className="fa-solid fa-stop" />
                    </button>
                    <button
                        id="prev"
                        type="button"
                        className="btn btn-primary btn-md disabled me-1"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev" 
                        >
                        <i className="fa-solid fa-arrow-left" />
                    </button>
                    <button
                        id="next"
                        type="button"
                        className="btn btn-primary btn-md"
                        data-bs-target="#carouselExampleIndicators"
                        // data-bs-slide="next"
                        onClick={onNext}
                        >
                        <i className="fa-solid fa-arrow-right" />
                    </button>
                    <select id="voices" className="form-select-lg select" />
                </div>
                <div className="col-2 controls align-right">
                    <input id="auto" className="check-input" type="checkbox" defaultValue="" />
                    <label
                        className="form-check-label"
                        htmlFor="check-input"
                        style={{ marginRight: 15 }}
                        >
                        Play On Change
                    </label>
                </div>
                <div className="col-3 progress">
                    <div
                        id="progress"
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "5%" }}
                        >
                        0%
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Controls

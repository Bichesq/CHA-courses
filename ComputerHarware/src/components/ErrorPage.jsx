import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import error from '../assets/images/jepygq-x5.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='d-flex justify-content-center bg-body-tertiary errormsg'>
            <Image src={error} />
            <div className='backhome'>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage

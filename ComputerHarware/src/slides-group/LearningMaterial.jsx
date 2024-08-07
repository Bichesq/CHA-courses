import React from 'react'
import Content from '../components/Content'
import { useOutletContext } from 'react-router-dom'

const LearningMaterial = () => {
    const context = useOutletContext();

    return (
        <>
            <Content />
            
        </>
    )
}

export default LearningMaterial

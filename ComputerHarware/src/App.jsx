import { useState } from 'react'
import Layout from './components/Layout'
import { SlideContextProvider } from './contexts/slidesContext'


function App() {
  

  return (
    <>
      <SlideContextProvider><Layout/></SlideContextProvider>
    </>
  )
}

export default App

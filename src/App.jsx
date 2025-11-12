
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Nabvar from './assets/components/navbar/Nabvar'
import Words from './assets/components/Words/Words'
import Favourits from './assets/components/Favourits/Favourits'

function App() {
 const[words,setWords]=useState([])
 const[favWords,setFavWords]=useState([])
  useEffect(()=>{
     fetch('words.json')
    .then(res=>res.json())
    .then(data=>setWords(data))
  },[])

  const handleFvrtWord =useCallback((word)=>{
    const newFavWords =[...favWords,word]
    setFavWords(newFavWords)
  },[favWords])
  
  const handleDltFromFvrtWord=(deletedWord)=>{
    const newFavWords = favWords.filter(favWord=>favWord.word!==deletedWord)
    setFavWords(newFavWords)
  }

  return (
    <>
    
      <Nabvar></Nabvar>
      <div className='w-11/12 mx-auto mt-5 flex justify-between'>
        <div className="words-container w-[70%]  ">
          <Words handleFvrtWord={handleFvrtWord} words={words}></Words>
          </div>
        <div className="fvrts-container w-[30%] border  ">
          <Favourits handleDltFromFvrtWord={handleDltFromFvrtWord} favWords={favWords}></Favourits>
          </div>
      
      
      </div>
      
    </>
  )
}

export default App

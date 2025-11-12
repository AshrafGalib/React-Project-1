import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Favourits = ({favWords,handleDltFromFvrtWord}) => {
    console.log(favWords)
    return (
        <>
        <div className='text-center'>
            <h1 className='btn btn-ghost text-xl'>Favourites Words - {favWords.length}</h1>
        </div>
        <div>
         {
            favWords.map(favWord=><div className='g-0 flex justify-between px-6 py-2'>
                <h3>{favWord.word}</h3><button onClick={()=>handleDltFromFvrtWord(favWord.word)}><MdDeleteForever /></button>
                 </div>)
         }
         
        </div>
        </>
        
    );
};

export default Favourits;
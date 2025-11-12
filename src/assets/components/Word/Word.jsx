import React from 'react';
import { FaHeart } from "react-icons/fa";
const Word = ({word,handleFvrtWord}) => {
 // console.log(word)
   const{englishMeaning,banglaMeaning,synonyms,antonyms,partOfSpeech,exampleSentence,usageHint}=word
    return (
        <div>
            <div className="card card-border bg-primary w-96">
  <div className="card-body">
    <h2 className="card-title">{word.word}</h2>
     <h3>Meaning in English : {englishMeaning}</h3>
     <h3>Meaning in Bangla : {banglaMeaning}</h3>
     <h3> Synonyms : {synonyms.map(synonym => synonym).join(', ')}</h3>
     <h3> Antonyms : {antonyms.map(antonym => antonym).join(', ')}</h3>
     <h3>Part Of Speech : {partOfSpeech}</h3>
     <h3>Example Sentence : {exampleSentence}</h3>
     <h3>Usage Hint : {usageHint}</h3>
    <div className="card-actions justify-end">
     <button onClick={()=>handleFvrtWord(word)}> <FaHeart  /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Word;

import Word from '../Word/Word';
const Words = ({words,handleFvrtWord}) => {
    //console.log(words)
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                words.map((word,index)=><Word key={index} handleFvrtWord={handleFvrtWord} word={word}></Word>)
            }
        </div>
    );
};

export default Words;
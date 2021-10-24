import './App.css';
import * as React from 'react'

const moveLetter = (letter,key,encrypt=true) => {
  let startCode = letter.charCodeAt(0);
  if(letter === ' ') return ' '
  if (startCode >= 97 && startCode <= 122) {
    if(encrypt){
      let result = (startCode +  Number(key))%97
      if(result>26) result= result%26
      return String.fromCharCode(result+97);
    }else{
      let result = (startCode  -Number(key))%97
      if(result>26) {result= result+26}
      else{
        result= result%26+97
      }
      return String.fromCharCode(result);
    }

  } else if (startCode >= 65 && startCode <= 90) {
    if(encrypt){
      let result = (startCode +  Number(key))%65
      if(result>26) result= result%26
      return String.fromCharCode(result+65);
    }else{
      let result = (startCode  -Number(key))%65
      if(result>26) {result= result+26}
      else{
        result= result%26+65
      }
      return String.fromCharCode(result);
    }
  } else return letter;
};

const caesar13 = (inputText,key,encrypt=true) => {
  if (typeof inputText !== "string" || !inputText) {
    throw new Error("not a string or empty string");
  }
  const arrayFromText = [...inputText];
  const newArray = [];
  arrayFromText.forEach(singleCharacter => {
    let newLetter = moveLetter(singleCharacter,key,encrypt);
    newArray.push(newLetter);
  });
  return newArray.join("");
};

function App() {
  const [inputValue,setInputValue] = React.useState('')
  const [keyInputValue,setKeyInputValue] = React.useState('')
  const [decrypted,setDecrypted] = React.useState('')
  const hanldeChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const hanldeChangeKeyInput = (e) => {
    setKeyInputValue(e.target.value)
  }

  const handleEncrypt = () => {
    if(inputValue && keyInputValue){
      setDecrypted(caesar13(inputValue,keyInputValue,true))
    }
  }

  const handleDecrypt = () => {
    if(inputValue && keyInputValue){
      setDecrypted(caesar13(inputValue,keyInputValue,false))
    }
  }
  return (
    <div className="App">
      <input onChange={hanldeChangeInput}/>
      key
      <input onChange={hanldeChangeKeyInput}/>
      <button onClick={handleEncrypt}>encrypt</button>
      <button onClick={handleDecrypt}>decrypt</button>
      {decrypted && <p>{decrypted}</p>}
    </div>
  );
}

export default App;

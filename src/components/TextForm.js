import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted into Uppercase.","success");
  };

  const lowerC=()=>{
    let lowerText=text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text has been converted into Lowercase.","success");
  };

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces have been deleted.","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clear=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared.","success");
  }
  const del=()=>{
    let newText=text.substring(0,text.length-1);
    setText(newText);
    props.showAlert("A character has been deleted.","success");
  }

  let [text, setText] = useState('');
  //text="new text";/* Wrong way to change a state */
  //setText('new text'); //Correct way to change a state

 let count=()=>{
  let c=0;
  let li=text.split(' ');
  li.forEach((i)=>{
    if(i!==" " && i!==""){
      c+=1
    } 
  });
  return c;
 }
 let sentence=()=>{
  let k=0;
  let li=text.split(' ');
  li.forEach((i)=>{
    if(i==='.'){
      k+=1
    } 
  });
  return k;
 }

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control text-${props.mode==='light'?'dark':'light'}`}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor : props.mode==='light'?'white':'#36454F'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={lowerC}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={del}>
        Delete
      </button>
      <button className="btn btn-primary mx-1" onClick={clear}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'} my-4`}>
        <h2>Your Text Summary</h2>
        <p><b>{count()}</b> words and <b>{text.length}</b> characters and <b>{sentence()}</b> sentences</p>
        <p>{0.008*text.split(/[ ]/).length} Minutes To Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}

import React,{useState} from 'react'

export default function TextForm(props) {
   
    const [text, setText] = useState("");  //use state ke andar jo likhenge vo dikhega page per
   
    const [undoHistory, setUndoHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]);
    
    const handleUPClick=()=>{
       // console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase!","success")
       // document.title ="TextUtils -Upper-Case"
     }
     const handleLoClick=()=>{
      // console.log("Uppercase was clicked"+text)
       let newText=text.toLowerCase();
       setText(newText)
       props.showAlert("Converted To Lowercase!","success")
       //document.title ="TextUtils -Lower-case"
    }
     const handleClear=()=>{
      let clear="";
      setText(clear);
      props.showAlert("Text Cleared!","success")
    }
    const handleUndo=()=>{
      if (undoHistory.length > 0) {
        const previousText = undoHistory.pop();
        setUndoHistory([...undoHistory]);
        setRedoHistory((prevHistory) => [...prevHistory, text]);
        setText(previousText);
        
      }
    }
    const handleRedo=()=>{
      if (redoHistory.length > 0) {
        const nextText = redoHistory.pop();
        setRedoHistory([...redoHistory]);
        setUndoHistory((prevHistory) => [...prevHistory, text]);
        setText(nextText);
        
      }
    }
    const handleCopyText=()=>{
      
       let text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert("Copy To clipboard!","success")
   }
    const handleRemoveExtraSpaces=()=>{
      const updatedText = text.replace(/\s+/g, ' ');
      setText(updatedText);
      props.showAlert("Extra Spaces Removed!","success")
    }


    
       const handleOnChange=(event)=>{
       // console.log("On Change")
        const newText = event.target.value;
        setText(newText);
        setText(event.target.value);
        setUndoHistory((prevHistory) => [...prevHistory, text]);
        setRedoHistory([]);
        
    }
  return (
    <>
    {/*  lecture 7 */}
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1>   {/*  jo heading TextForm me denge vo sidhe yha aa jayegi */}

       <div className="mb-3" >
         <textarea placeholder='Enter your text here....' className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
    </div>

    <button className="btn btn-primary mx-1 my-1 " onClick={handleUPClick}   > Convert To UpperCase</button>
    
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} > Convert To LowerCase</button>
    
    <button className="btn btn-primary mx-1 my-1" onClick={handleClear} > Clear Text</button>

    <button className="btn btn-primary mx-1 my-1" onClick={handleUndo} > Undo</button>

    <button className="btn btn-primary mx-1 my-1" onClick={handleRedo} > Redo</button>

    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText} > Copy Text</button>

    <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces} > Remove extra Spaces</button>
    
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h3> Your Text Summary </h3>
      <p> {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length}  characters</p>
      <p> {0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes To Read </p>
      <h3> Preview</h3>
      <p> {text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}


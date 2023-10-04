import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
        document.title = "Copied !"
        setTimeout(() => {
            document.title = "Text Editor"
        }, 2000);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearclick = () => {
        setText("");
        props.showAlert("Text Cleared", "success");

    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>

                <h1 className='text-center mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control fw-bold" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'black'}}
                        id="mybox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>

                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleUpclick}>Conver to uppercase</button>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleLoclick}>Conver to Lowercase</button>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleClearclick}>Clear text</button>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words And {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes read</p>
                <h2>preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox to preview"}</p>
            </div>

        </>
    )
}

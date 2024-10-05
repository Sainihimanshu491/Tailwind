import React, {useState} from 'react'

export function TextForm(props) {
    const [text,setText] = useState("Enter Your Text Here");
    const handleclick = () =>{
        //console.log("Button is Clicked");
        let up = text.toUpperCase()
        setText(up)
        props.showAlert("Converted To UpperCase","success")
    }
    const handleclicklow = () =>{
        //console.log("Button is Clicked");
        let lo = text.toLowerCase()
        setText(lo)
        props.showAlert("Converted To LowerCase","success")
    }
    const handleclear = () =>{
       setText(" ")
        props.showAlert("Cleared Text","success")

    }
    const handleclip= () =>{
       let text = document.getElementById("box")
       text.select()
       navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success")

    }
      const  handlechange = (evt) =>{
     setText(evt.target.value)
    }
  return (
    <>
    <div style={{marginTop:'60px'}}>
    <div className='container' style={{color:props.mode === "dark"?"white":"black"}} >
    <h2 className='my-6'>Enter Your Text Here- Below</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handlechange} id="box" rows="8" style={{backgroundColor:props.mode === "dark"? "#212529":"white", color:props.mode === "dark"?"white":"black"}}></textarea>
</div>
<button  disabled = {text.length===0} className='btn btn-primary' style={{color:props.mode === "dark"?"white":"black"}} onClick={handleclick}>Convert To UpperCase</button>
 <button disabled = {text.length===0} className='btn btn-primary mx-2'style={{color:props.mode === "dark"?"white":"black"}} onClick={handleclicklow}>Convert To LowerCase</button>
 <button disabled = {text.length===0} className='btn btn-primary mx-2'style={{color:props.mode === "dark"?"white":"black"}} onClick={handleclear}>Clear Text</button>
 <button disabled = {text.length===0} className='btn btn-primary mx-2'style={{color:props.mode === "dark"?"white":"black"}} onClick={handleclip}>Copy To ClipBoard</button>
 </div>
 <div className='container my-3' style={{color:props.mode === "dark"?"white":"black"}}>
  <h3>Your Text Summary</h3>
  <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Words {text.length} Characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read The Complete Text Written Above</p>
  <h3>Preview Your Text </h3>
  <p>{text}</p>
 </div>
 </div>
   </> 
  )
}

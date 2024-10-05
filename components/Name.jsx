import React,{useState} from 'react'
export  function Name(props) {
    const [firstName,chfirstName] = useState('')
    const [lastName,chlastName] = useState('')
    const changefName = (evt) =>{
         chfirstName(evt.target.value)
    }
    const changelName = (evt) =>{
         chlastName(evt.target.value)
    }
    let fullName = firstName +  '  '  + lastName;
  return (
    <>
    <div style={{color:props.mode === "dark"?"white":"black"}}  >
    <h>Book and Issued Our Train Ticket:</h><br/>
    <label>First Name: </label>
    <input className='firt my-2 mx-3' value={firstName}  onChange={changefName} /><br/>
    <label>Last Name: </label>
    <input className='last my-3 mx-3' value={lastName} onChange={changelName}/><br/>
    <p>Your Ticket Will Be Issued To: {fullName}</p>
    </div>
    </>
  )
}

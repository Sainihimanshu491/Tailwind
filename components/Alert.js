import React from 'react'

export function Alert(props) {
    const capitilize = (word)=>{
       let letter = word.toLowerCase()
       return letter.charAt(0).toUpperCase() + letter.slice(1)
    }
  return (
    <div style={{height:'5px'}} >
   {props.alert && <div  className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
   <strong> {capitilize(props.alert.type)}</strong> : {props.alert.msg}
</div>}
</div>
  )
}

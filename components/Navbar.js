import React from 'react'
import { Link } from 'react-router-dom';
export  function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.det}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.con} <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.suc}</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
  <div className='d-flex'>
    <div style={{height:'25px',width:'25px'}} onClick={()=>{props.toggle('primary')}} className='bg-primary rounded mx-2'></div>
    <div style={{height:'25px',width:'25px'}} onClick={()=>{props.toggle('warning')}} className='bg-warning rounded mx-2'></div>
    <div style={{height:'25px',width:'25px'}} onClick={()=>{props.toggle('success')}} className='bg-success rounded mx-2'></div>
    <div style={{height:'25px',width:'25px'}} onClick={()=>{props.toggle('danger')}} className='bg-danger rounded mx-2'></div>
  </div>
  <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggle('null')}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
</nav>
  )
}
Navbar.defaultProps = {
  det:'Home',
  con:'Set About Here'
}
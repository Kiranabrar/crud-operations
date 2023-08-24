import React from 'react'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light w-100 bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand">CRUD-OPERATIONS</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
    
        <li className="nav-item">
          <a className="nav-link" href="/">Create</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/read">Read</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/update">Update</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/read">Delete</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
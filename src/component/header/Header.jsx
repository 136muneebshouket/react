import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function Header() {
    return (<>
        <div><nav className="navbar bg-light">
            <div className="container-fluid">
                <h3>HACATHON</h3>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 col-6" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                    <ul className="list-group list-group-horizontal">
                        <li className="btn btn-outline-success"> <Link to="/" className='text-dark'>Home</Link> </li> &nbsp;&nbsp;
                        <li className="btn btn-outline-success"> <Link to="/shop" className='text-dark'>shop</Link> </li>&nbsp;&nbsp;

                        <li className="btn btn-outline-success"> <Link to="/signup" className='text-dark'>Signup</Link> </li>
                    </ul>

                </ul>
            </div>
        </nav></div>
    </>
    )
}

// className="nav-item list-group-item"


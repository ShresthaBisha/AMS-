import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
    return (
        <nav className="navbar navbar-dark py-0 bg-primary navbar-expand-lg py-md-0">
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item py-0">
                        <NavLink className="nav-link" to="/student/list">
                            View Students
                        </NavLink>
                    </li>
                    <li className="nav-item py-0">
                        <NavLink className="nav-link" to="/student/create">
                            Create Students
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu

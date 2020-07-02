import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { get } from 'lodash'
import { getAccessToken, getPermissions } from '../../utils'
import { useDispatch } from 'react-redux'

const MainMenu = () => {
    const dispatch = useDispatch()

    const _logout = () => {
        localStorage.clear()
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <NavLink className="py-2" to='/' aria-label="Product">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="d-block mx-auto"
                        role="img"
                        viewBox="0 0 24 24"
                        focusable="false"
                    >
                        <title>Product</title>
                        <circle cx="12" cy="12" r="10"/>
                        <path
                            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                    </svg>
                </NavLink>

                {
                    Object.values(getPermissions()).map(permission => {
                        return (
                            <NavLink
                                className="py-2 d-none d-md-inline-block"
                                to={get(permission, 'url')}>
                                {get(permission, 'name')}
                            </NavLink>
                        )
                    })
                }

                <NavLink
                    className="py-2 d-none d-md-inline-block"
                    to='/login'
                    onClick={_logout}>
                    Logout
                </NavLink>
            </div>
        </nav>
    )
}

export default MainMenu

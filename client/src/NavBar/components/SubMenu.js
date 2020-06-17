import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { get } from 'lodash'
import { getArr, getPermissions } from '../../utils'

const permissions = getPermissions()

const SubMenu = props => {
    const history = useHistory()
    const [menu, setMenu] = useState([])

    const getModuleId = () => history.location.pathname.split('/')[1]

    let moduleId

    useEffect(() => {
        moduleId = getModuleId()
        setMenu(getArr(permissions, [moduleId, 'menu']))
    }, [])

    history.listen(location => {
        const newModuleId = getModuleId()

        if (newModuleId !== moduleId) {
            moduleId = newModuleId
            setMenu(getArr(permissions, [moduleId, 'menu']))
        }
    })

    return (
        <nav className="navbar navbar-dark py-0 bg-primary navbar-expand-lg py-md-0 sticky-top">
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        menu.map(item => {
                            return (
                                <li className="nav-item py-0">
                                    <NavLink className="nav-link" to={get(item, 'url')}>
                                        {get(item, 'name')}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default SubMenu

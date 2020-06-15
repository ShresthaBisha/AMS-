import React from 'react'
import '../static/css/Footer.css'

const Footer = () => {

    return (
        <footer className="footer fixed-bottom">
            <div className="container mt-2">
                <div className="row">
                    <div className="col-6">
                        <p>© 2020 EverestWalk (PVT) LTD</p>
                    </div>
                    <div className="col-6 text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Privacy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Terms</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

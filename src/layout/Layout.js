import { Outlet, Link } from "react-router-dom"
import './Layout.css'

const Layout = () => {

    return (
        <div>
            <nav className="navbar">
                <div className="navdiv">
                    <img src='/images/logo.png' className="logo" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/area">Area</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/ip_address">Ip Address</Link></li>
                        <li><a href="#">Products</a></li>
                    </ul>
                </div>
            </nav>

            <main className="main_content">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer-left">
                    <h3>Beauty By Damia</h3>
                    <p className="footer-company-name">Copyright © 2024 <strong>Beauty By Damia</strong> All rights reserved</p>
                </div>

                <div className="footer-center">
                    <p>PARIS</p>
                    <p>+33 9 47 60 62 85</p>
                    <p><a href="mailto:Beautybydamia.service@gmail.com" className="link">Beautybydamia.service@gmail.com</a></p>
                </div>
                <div className="footer-right">
                    <span>About Us</span>
                    <p><strong>Beauty By Damia</strong> is a website made by Damia for this homework</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout


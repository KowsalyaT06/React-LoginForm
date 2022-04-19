import React from "react";
import './Hoc.css';
const Hoc = Pagecomponent => {
    return function MainComponent() {


        return (
            <>
                <div className="Nav">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" href="#">Abouts</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" href="#">Contacts</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Pagecomponent />
               
                <footer>BYEEE</footer>
            </>
        )
    }
}
export default Hoc;
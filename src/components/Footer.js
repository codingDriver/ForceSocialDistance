import React from "react";
import {Link} from 'react-router-dom';

const Footer = props => {
    return (
        <footer>
            {props.children}
            <div className="disclaimer-container">
                <div className="width-container disclaimer">
                    <div className="copyrights">
                        copyrights&copy; fosod {new Date().getFullYear()}
                    </div>
                    <nav>
                        <Link to="/impressum">
                            Impressum
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

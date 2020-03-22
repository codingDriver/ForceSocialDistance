import React from 'react';
import Footer from "../components/Footer";

const Impressum = () => (
    <div className="App">
        <div className="impressum-wrapper width-container">
            <h2>Impressum</h2>
            <div className="impressum-content">
                <h3>Beschreibung</h3>
                <p>Diese Seite wurde im Rahmen eines Hackatons #WIRVSVIRUS erstellt https://wirvsvirushackathon.org/</p>

                <h3>Team</h3>
                <p>https://devpost.com/software/01_012_fosod</p>

                <h3>Idee</h3>
                <p>SignerLaboratory http://signerlab.com/</p>

            </div>

        </div>
        <Footer>
            <div className="justify-center">
                <a href="https://www.bundesregierung.de/breg-de/themen/coronavirus/wir-vs-virus-1731968"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src="../assets/Logo_Projekt_02.png" alt="wirvsvirus logo"/>
                </a>
            </div>
        </Footer>
    </div>
);

export default Impressum;

import React from 'react';
import Hero from "../components/Hero";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import Button from "../components/Cta";
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

// TODO osi hier
let participants = 1;

const getCurrentParticipants = async () =>{
    return API.get("fosodapi", "/api", {
        headers: {
            fosodHeader: "seeecrettoken"
        }
    }).catch(error => {
        participants = 99;
        console.log('Counter:'+ 99);
        console.log(error.response)
    });
};

getCurrentParticipants().then(r => {
    participants = r;
});

const Main = () => (
    <div className="App">
        <header className="App-header deepblue-bg">
            <Hero headline="Force Social Distancing"
                  text="Wenn du deine soziale Kontakte von jetzt (100%) einschränkst, dann wirst du sehen, wie schnell sich die
                Anzahl der potentiellen Übertragungen reduziert.
                Mit dem Slider kannst du sehen, wie schnell sich die Anzahl der Übertragungen reduziert, wenn du dich
                beim Social Distancing beteiligst."
                  cta={null}
            />
        </header>
        <Chart/>
        <Footer>
            <div className="">
                <section className="engagement-section ultra-light-green-bg">
                    <p className="">
                        {participants} Menschen haben sich für Social Distancing
                        entschieden, machst du auch mit? dann click drauf
                    </p>
                    <Button link="#" label="ich mache mit" extraClass="btn-dark"/>
                </section>
                <section>
                    <a href="https://www.bundesregierung.de/breg-de/themen/coronavirus/wir-vs-virus-1731968"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        <img src="../assets/Logo_Projekt_02.png" alt="wirvsvirus logo"/>
                    </a>
                </section>
            </div>
        </Footer>
    </div>
);

export default Main;

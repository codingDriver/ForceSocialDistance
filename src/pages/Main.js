import React, {useEffect, useState} from 'react';
import Hero from "../components/Hero";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import Button from "../components/Cta";
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


const Main = () => {

    const [participants, setParticipans] = useState(0);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = getCurrentParticipants();
            result.then(r => {
                setParticipans(r);
            });
        };
        fetchData();
    }, []);

    const getCurrentParticipants = async () => {
        return API.get("fosodapi", "/api", {
            headers: {
                fosodHeader: "seeecrettoken"
            }
        }).catch(error => {
            console.log(error.response)
        });
    };

    const _onClickHanler = async () => {
        const postData = _addParticipant();
        postData.then(r => {
            setParticipans(participants + 1);
        })
    };

    const _addParticipant = async () => {
        return API.post("fosodapi", "/api", {
            headers: {
                fosodHeader: "seeecrettoken"
            }
        }).catch(error => {
            console.log(error.response)
        });
    };

    return (
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
                        <Button link="#" label="ich mache mit" onClickHandler={_onClickHanler} extraClass="btn-dark"/>
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
    )
};

export default Main;

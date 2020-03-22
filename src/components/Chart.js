import SocialDistanceSlider from "./SocialDistanceSlider";
import SocialDistanceChart from "./SocialDistanceChart";
import React from "react";

const Chart = props => {
    const [value, setValue] = React.useState(80);

    return (
        <section id="chart-section" className="width-container">
            <h2 className="blue-text">Simuliere wie sich die Ausbreitung verringert, wenn du mithilfst.</h2>
            <div className="chart-section">
                <SocialDistanceChart porcentage={value}/>
                <SocialDistanceSlider value={value} setValue={setValue}/>
            </div>
        </section>
    );
};

export default Chart;

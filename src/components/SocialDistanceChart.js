import React from 'react';
import {FlexibleXYPlot, LineSeries, XAxis, YAxis} from "react-vis";
import 'react-vis/dist/style.css';
import MarkSeries from "react-vis/es/plot/series/mark-series";
import LabelSeries from "react-vis/es/plot/series/label-series";

const SocialDistanceChart = props => {
    const {porcentage} = props;

    function calculation(porcentage) {
        let localDdata = [];
        for (var i = 0; i <= 30; i++) {
            const y = Math.round(Math.pow(2.7, (0.21 * (i - 1) * (porcentage * 0.01))));
            localDdata.push({x: i, y: y});
        }
        return localDdata;
    }

    const data = calculation(porcentage);
    const maxData = calculation(100);

    let savedPersons = maxData[30].y - data[30].y;
    let yPersons = data[30].y;
    if(porcentage === 0){
        savedPersons = maxData[30].y;
        yPersons = 0;
    }

    const maxPersons = maxData[30].y;

    return (
        <div className="chart-container">
            <div className="chart-lines">
                <FlexibleXYPlot margin={50} height={400}>
                    <XAxis title="Tage"/>
                    <YAxis title="infizierte Personen" orientation="right" />
                    <MarkSeries data={[{x: 30, y: data[30].y}]} color={"#3f51b5"}/>
                    <LineSeries
                        opacity={1}
                        curve={'curveMonotoneX'}
                        data={data}
                        strokeWidth={3}
                        color={"#3f51b5"}
                    />
                    <LineSeries
                        opacity={1}
                        curve={'curveMonotoneX'}
                        strokeStyle={"dashed"}
                        strokeWidth={3}
                        data={maxData}
                        color={"red"}
                    />
                    <LabelSeries
                        animation
                        allowOffsetToBeReversed
                        data={[{x: 30, y: data[30].y, label: yPersons + ""} ]} />
                </FlexibleXYPlot>
            </div>
            <div className="chart-result">
                <p>Du könntest <b>{yPersons}</b> Menschen in 30 Tagen angesteckt haben.<br/>
                    Ohne eine Reduzierung deiner sozialen Kontakte wären es <b>{maxPersons}</b>.<br/>
                    Du hast also <b>{savedPersons}</b> gerettet.</p>
            </div>
        </div>
    );
};

export default SocialDistanceChart;

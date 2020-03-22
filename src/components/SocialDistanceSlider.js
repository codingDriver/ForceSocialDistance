import React from 'react'
import Slider from '@material-ui/core/Slider';

const SocialDistanceSlider = (props) => {
    const {value, setValue} = props;

    const handleChange = (event, newValue) => {
        setValue(Number(newValue));
    };

    const labels = [0, 20, 40, 60, 80, 100];
    const marks = labels.map(val => {
        return {value: val, label: `${val}%`}
    });

    return (
        <div className="chart-slider">
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={100}
                step={20}
                marks={marks}
                valueLabelFormat={v=> 100 - v}
            />
        </div>
    );

};


export default SocialDistanceSlider;

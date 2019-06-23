import React from 'react';
import CountUp from 'react-countup';
import Pill from '../pills/pills';
import green from '../../images/nice.png';
import yellow from '../../images/regular.png';
import red from '../../images/alert.png';
import orange from '../../images/warning.png';
import none from '../../images/none.png';

const AirStation = (props) => {
    const STATION_IMAGES = {
        green: green,
        yellow: yellow,
        orange: orange,
        red: red,
        none: none,
    }

    const scoreAcceptable = props.score <= 20 ? true : false;
    const scoreColor = (score) => {
        let color;
        switch (true) {
            case score <= 15:
                color = 'green';
                break;
            case score > 15 && score <= 30:
                color = 'yellow';
                break;
            case score > 30 && score <= 50:
                color = 'orange';
                break;
            case score > 50:
                color = 'red';
                break;
            default:
                color = 'none';
        }
        return color;
    };

    return (
        <div className="relative station">
            <div className="relative max-w rounded-lg overflow-hidden bg-white shadow-lg z-0">
                <div className="absolute overflow-hidden  mx-auto score top-6 object-none object-left text-white z-10">
                    <span className="block text-md mt-8 font-sans">Estación de monitoreo</span>
                    <h1 className="relative text-2xl font-bold block break-words font-sans">{props.title}</h1>
                    <span className="block text-6xl p-0 leading-none font-sans"><CountUp delay={1} end={props.score} /><span className="inline-block text-lg ">AQI</span></span>
                </div>
                <img className="w-full min-h-14 z-0" src={STATION_IMAGES[scoreColor(props.score)]} alt={props.title}></img>
            </div>
            <div className="relative ml-4 mr-4 -mt-8 rounded-lg overflow-hidden bg-white shadow-lg z-20">
                <div className="px-6 py-4">
                    <p className="text-gray-700 mr-2 block text-m leading-tight mb-2">¡Corre la voz!:  </p>
                    <Pill label="cumple" color={scoreColor(props.score)} acceptable={true} link="https://ctt.ac/rxafh" display={scoreAcceptable ? true : false} />
                    <Pill label="respiraTranquilo" color={scoreColor(props.score)} acceptable={true} link="https://ctt.ac/rxafh" display={scoreAcceptable ? true : false} />
                    <Pill label="noCumple" color={scoreColor(props.score)} acceptable={false} link="https://ctt.ac/dJpES" display={scoreAcceptable ? false : true} />
                    <Pill label="medeHollin" color={scoreColor(props.score)} acceptable={false} link="https://ctt.ac/dJpES" display={scoreAcceptable ? false : true} />
                </div>
            </div>
        </div>
    )
}

export default AirStation;
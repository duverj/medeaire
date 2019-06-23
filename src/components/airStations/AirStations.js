import React, { useState, useEffect } from 'react';
import Glide from '@glidejs/glide';
import AirStation from '../airStation/AirStation';

const AirStations = () => {
    const mountSlider = () => {
        new Glide('.glide', {
            type: 'carousel',
            peek: {
                before: 30,
                after: 30,
                animationTimingFunc: 'ease',
                gap: 30,
              }
        }).mount();
    }

    const [hasError, setErrors] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [stations, setStations] = useState({});

    async function fetchData() {
        const res = await fetch("http://159.203.164.117:4000/air");
        res
            .json()
            .then(res => setStations(res.message))
            .catch(err => setErrors(err));

    }

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            fetchData();
        }
        if (stations.length > 0) {
            mountSlider();
        }
    }, [loaded, stations]);

    return (
        <div className="mt-5 mb-5 relative clearfix">
            
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {stations.length > 0 ? stations.map(item => (
                            <li className="glide__slide float-left" key={item.station}>
                                <AirStation title={item.name} score={item.score} station={item.station} />
                            </li>
                        )) : (<p className="text-center font-sans text-teal-400 text-2xl mt-20">Loading...</p>)}
                        {hasError ? (<p className="text-center font-sans text-red-400 text-2xl mt-20">Hubo un error obteniendo los datos. Regresa pronto.</p>) : ''}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AirStations;
import React from 'react';

const Pill = (props) => {
    const COLORS = {
        green: 'bg-green-200',
        yellow: 'bg-yellow-200',
        orange: 'bg-orange-200',
        red: 'bg-red-200',
        none: 'bg-gray-200',
    }
    const hastaghsClasses = 'inline-block clearfix rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2';

    return (
        <>
        {props.display ? (
            <a href={props.link} target="_blank" rel="noopener noreferrer" title="Comparte!" className={`${COLORS[props.color]} ${hastaghsClasses}`}>
                #{props.label}
            </a>
        ) : ''}
        </>
    );
};

export default Pill;
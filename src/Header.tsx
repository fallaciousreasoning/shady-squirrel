import * as React from 'react';

interface Props {
    title: string;
    quote: string;
    iconUrl: string;
}

export default props => {
    return <div className="quote">
        <h1>{props.title}</h1>
        <div className="spacer"/>
        <p>{props.quote}</p>
        <img src={props.iconUrl}/>
    </div>;
}
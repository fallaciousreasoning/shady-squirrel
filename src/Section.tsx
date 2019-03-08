import * as React from 'react';

interface Props {
    children?: React.ReactNode;
    title: string | React.ReactNode;
}

export default (props: Props) => {
    return <div className="section">
        {typeof props.title === 'string' ? <h2 className="section-title">{props.title}</h2> : props.title}
        {props.children}
    </div>;
}
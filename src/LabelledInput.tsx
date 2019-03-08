import * as React from 'react';

interface Props {
    name?: string;

    onBlur?: () => void;
    onEnterPressed?: () => void;

    onChange?: (text: string) => void;
    value: string;
}

export default (props: Props) => {
    return <div>
        {props.name && <label htmlFor={props.name}>{props.name}</label>}
        <input
            name={props.name}
            value={props.value}
            onChange={props.onChange && ((e) => props.onChange(e.target.value))}
            onBlur={props.onBlur}
            onKeyPress={props.onEnterPressed && ((e) => e.keyCode === 13 && props.onEnterPressed())} />
    </div>;
}
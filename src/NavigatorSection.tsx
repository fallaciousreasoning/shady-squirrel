import * as React from 'react';
import LabelledInput from "./LabelledInput";
import { useState } from "react";
import Section from './Section';

export default (props) => {
    const [location, setLocation] = useState('example.com');
    const navigate = () => {
        let to = location;
        if (!to.startsWith('http')) {
            to = "http://" + to;
        }

        window.location.href = to;
    }

    return <Section title="Custom Tab Bar Navigation">
        <div className="section-form">
            <LabelledInput value={location} onChange={setLocation} onEnterPressed={navigate} />
            <button onClick={navigate}>Navigate</button>
        </div>
    </Section>;
}
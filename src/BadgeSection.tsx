import * as React from 'react';
import Section from './Section';
import LabelledInput from './LabelledInput';
import { useState } from 'react';

const ExperimentalBadge: { set: (value?: number) => void, clear: () => void } = (window as any).ExperimentalBadge || {};

export default (props) => {
    if (!('ExperimentalBadge' in window)) {
        return null;
    }

    const [badgeValue, setBadgeValue] = useState();
    const updateBadge = () => {
        if (!ExperimentalBadge.set) return;

        if (badgeValue === "") ExperimentalBadge.set();
        ExperimentalBadge.set(badgeValue);
    }

    return <Section title="Badging">
        <div className="section-form">
            <input value={badgeValue} onChange={e => setBadgeValue(e.target.value)} />
            <button onClick={updateBadge}>Set</button>
            <br />
            <button onClick={ExperimentalBadge.clear}>Clear</button>
        </div>
    </Section>
}
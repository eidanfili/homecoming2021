import React from 'react';
import Line from './line';
import '../style/main.scss';

const Activity = props => {
    const {title, time, line} = props;
    return (
        <div className="activity">
            <div className="activity_cont">
                <div className="activity_title">{title}</div>
                <div className="activity_time">{time}</div>
            </div>
            {line ? <Line/> : "" }
        </div>
    );
}

export default Activity;

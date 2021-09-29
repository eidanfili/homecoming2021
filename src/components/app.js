import React, { Component } from 'react';

import Activity from './activity';
import '../style/main.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activities: [
        {title:"Pictures ",_id:0,time:"6:30 PM", line: 1},
        {title:"Dinner ",_id:1,time:"7:15 PM", line: 1},
        {title:"Dance ",_id:2,time:"8:00 PM", line: 1},
        {title:"Castle of Chaos ",_id:3,time:"11:00 PM", line: 1},
        {title:"Sam's House ",_id:4,time:"1:00 AM", line: 0}
      ]
    }
  };

  render() {
    return (
      <div className='app'>
        <h1>Hillcrest 2021 Homecoming</h1>
        <div className='container'>
        {this.state.activities.map(activity => {return (<Activity key={activity._id}title={activity.title} time={activity.time} line={activity.line}/>)})}
        </div>
      </div>
    );
  }
}
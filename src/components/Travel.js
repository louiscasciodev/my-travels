import React from 'react';
import '../App.css';

class Travel extends React.Component{
render(){
return (      
    <div className="Travel">
        <ul>
            <li>{this.props.destination}</li>
            <li>{this.props.country}</li>
            <li>{this.props.photo}</li>
            <li>{this.props.distance}</li>
        </ul>
    </div>
  )
}};

export default Travel;
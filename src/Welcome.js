import React from 'react';
// import React, { Component } from 'react';

// class Welcome extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hola {this.props.name}</h1>
//             </div>
//         );
//     }
// }

const Welcome = (props) => <h1>Hola {props.name}</h1>;

export default Welcome;
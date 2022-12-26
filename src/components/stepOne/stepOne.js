import React, { Component } from 'react';
class stepOne extends Component {
    state = {  } 
    render() { 
        return (
            <div className="shadow p-5 bg-white rounded text-center" style={{height: 300}}>
                <h1>Today's workout plan</h1>
                <p>We're gonna do 3 fundmental exercise</p>
            </div>
        );
    }
}

// const stepOne = props => {
//     console.log(props.data[0]);
//     return (
//         <div>
//         {props.data.map(( step =>
//             <div class="shadow p-3 bg-white rounded text-center">
//                 <h1>{step?.heading}</h1>
//                 <p>{step?.paragraph}</p>
//             </div>
//         ))}
//         </div>
//     )
// }
 
export default stepOne;
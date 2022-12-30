import React, { Component,useState} from 'react';
import logo from '../img/logo.svg';
import styles from '../../css/home.css'
import StepOne from '../stepOne/stepOne';
import StepTwo from '../stepTwo/stepTwo';
import StepThree from '../stepThree/stepThree';
import StepFour from '../stepFour/stepFour';
import StepFive from './../stepFive/stepFive';
// class home extends Component {
const home = props => {
    var current = props.current;
    // state = {  
    //     data :[
    //         {
    //             content: <StepOne/>,
    //             current: 1,
    //         },
    //         {
    //             content: <stepTwo/>,
    //             current: 2,
    //         },
    //     ]
    // }    
    //   console.log(props.current);

        return (
            
            <>
            
            {/* <img src={logo} /> */}
                
            <div className='container'>
                <div className='justify-content-center d-flex'>
                    <div className='align-items-center'>
                        <div className='row mt-5'>
                            
                            <div className='col'>
                                {current !==1  ? <button type='button' className='button button-border button-restart button-restart-color' 
                                onClick={()=>props.onClickRestart()}
                                >Restart</button> 
                                : 
                                <button type='button' className='button button-restart button-disable' 
                                onClick={()=>props.onClickRestart()}
                                >Restart</button>}
                            </div>
                            <div className='col'>
                                {current > 1 ? <button type='button' className='button button-border button-next-prev button-prev' style={{}}
                                onClick={()=>props.onClickPrev(current)}
                                >Prev</button>
                                :
                                <button type='button' className='button button-prev button-disable' style={{}}
                                onClick={()=>props.onClickPrev(current)}
                                >Prev</button>

                            }
                            </div >
                            <div className='col'>
                                {current == 5 ? <button type='button' className='button button-next button-disable' 
                                onClick={()=>props.onClickNext(current)}
                                >Next</button> : <button type='button' className='button button-border button-next-prev button-next' 
                                onClick={()=>props.onClickNext(current)}
                                >Next</button> }
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    {current==1 ? <StepOne/> : current==2? <StepTwo/> : current==3? <StepThree/> :
                    current==4? <StepFour/> : current==5? <StepFive/> : <StepFive/> }             
                </div>
            </div>
            
            
            </>

        );
    }

 
export default home;
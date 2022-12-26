import React, { Component,setState } from 'react';
import Header from './header/header';
import Home from './home/home';

class mainComponent extends Component {
    state = {
        current: 1
    };
    onHandleRestart = () =>  {
        // console.log('hi');
        this.setState({
            current: 1
        })

    }
    onHandleNext = (currents) =>  {
        {currents < 6 ?
            this.setState({
                current: currents + 1
            })

            :

            this.setState({
                current: currents
            })
        }
    }
    onHandlePrev = (currents) =>  {
        {currents > 0 ?
            this.setState({
                current: currents - 1
            })

            :

            this.setState({
                current: currents
            })
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Home current={this.state.current}  onClickRestart={this.onHandleRestart} onClickPrev={this.onHandlePrev} onClickNext={this.onHandleNext} />
            </React.Fragment>
        );
    }
}

export default mainComponent;


import React, { Component } from 'react'

class StopWatch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lapse: 0,
            running: false
        }
    }

    handleRunClick = () => {
        this.setState(state => {
            if (state.running) {
                clearInterval(this.timer)
            } else {
                const startTime =
                    Date.now() - this.state.lapse
                this.timer = setInterval(() => {
                    this.setState({
                        lapse: Date.now() - startTime,
                    }, ()=>{
                        console.log(this.state.lapse);
                    })
                })
            }
            return { running: !state.running }
        })
    }
    handleClearClick = () => {
        clearInterval(this.timer)
        this.setState({ lapse: 0, running: false })
    }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }

    render() {

        const { lapse, running } = this.state

        const buttonStyles = {
            border: '1px solid #ccc',
            background: '#fff',
            fontSize: '2em',
            padding: 15,
            margin: 5,
            width: 200,
        }

        return (
            <div style={{ textAlign: 'center' }}>
                <label
                    style={{
                        fontSize: '5em',
                        display: 'block',
                    }}
                >
                    {lapse}ms
          </label>
                <button
                    onClick={this.handleRunClick}
                    style={buttonStyles}
                >
                    {running ? 'Stop' : 'Start'}
                </button>
                <button
                    onClick={this.handleClearClick}
                    style={buttonStyles}
                >
                    Clear
          </button>
            </div>
        )
    }
}

export default StopWatch

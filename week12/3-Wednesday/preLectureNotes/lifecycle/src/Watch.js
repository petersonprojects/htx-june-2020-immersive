import React, { Component } from 'react'
import StopWatch from './StopWatch';

class Watch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showStopWatch: true
        }
    }

    render() {
        const { showStopWatch } = this.state
        return (
            <div>
                <label>
                    Show Stop Watch{' '}
                    <input
                        type="checkbox"
                        checked={showStopWatch}
                        onChange={() =>
                            this.setState(s => ({
                                showStopWatch: !s.showStopWatch,
                            }))}
                    />
                </label>
                <hr />
                {showStopWatch ? <StopWatch /> : null}
            </div>
        )
    }
}

export default Watch

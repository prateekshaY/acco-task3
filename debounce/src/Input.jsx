import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <input type="text" value={this.props.value} aria-label="list-input" onChange={this.props.handleChange} />
        )
    }
}

export default Input;
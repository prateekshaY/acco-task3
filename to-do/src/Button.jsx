import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className='addbtn' onClick={(event)=> this.props.addItem(event)}>Add</button>
        )
    }
}

export default Button;
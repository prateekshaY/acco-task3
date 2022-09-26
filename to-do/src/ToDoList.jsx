import React from "react";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='list-wrapper'>
            <ol aria-label="to-do-list">
            {
              this.props.list.map((curElem, key) => (
                  <li className='list-block' key={key}>{curElem}</li>
                )
              )
            }
            </ol>
          
    
          </div>
        )
    }
}

export default ToDoList;
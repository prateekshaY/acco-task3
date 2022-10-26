import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state={hasError:false}
    }

    static getDerivedStateFromError(error){
        return {hasError:true};
    }

     componentDidCatch(error, errorInfo){
        console.log(error);
        console.log(errorInfo)
    }

     refreshPage=()=>{
        window.location.reload();

    }

    render() {
            if(this.state.hasError){
                return (

                    <>
                <h1>Something went wrong...</h1>
                <button onClick={this.refreshPage}>Reset</button>
                </>
                );
            }
            return this.props.children
    }
}

export default ErrorBoundary;
import { useEffect, useRef } from "react"

const useSkipFirstRender = (fnToExecute, dependencies) => {

    const myRef = useRef();

    useEffect(() => {
        if(myRef.current) {
            fnToExecute();
        } else {
            myRef.current = true;
        }
    }, [...dependencies]);

};

export default useSkipFirstRender;
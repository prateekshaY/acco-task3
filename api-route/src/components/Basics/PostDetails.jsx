import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
        async function getDetails() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(res.data);
            setDetails(res.data);
        } 
        getDetails();
    }, [])

   const renderDetails = () => 
        Object.keys(details).map(item => {
            return <div className="detail-text"><p key={`${item}`}>
                {`${item}: ${details[`${item}`]}`}
            </p>
            </div>
        })

    

    return(
        renderDetails()
    );
}

export default PostDetails;
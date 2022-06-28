import React from 'react'
import axios from 'axios'
  
function AlgoPage() {
    //const [algoState, setAlgoState] = React.useState({});
    const sendPost = () => {
        axios.post('/api/algo')
            .then(res => alert(res.message))
            .catch(err => alert("Error: "+err.message))
    }

    return (
        <a onClick={sendPost}>
            Hacer POST
        </a>
    )
}

export default AlgoPage
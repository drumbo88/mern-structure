import React from 'react'
import axios from 'axios'
  
function AlgoPage() {
    //const [algoState, setAlgoState] = React.useState({});
    const sendPost = (e) => {
        axios.post('/algo')
            .then(res => alert(res.data.message))
            .catch(err => alert(err.response.data.message ?? err.message))
    }

    return (
        <button onClick={sendPost}>
            Hacer POST
        </button>
    )
}

export default AlgoPage
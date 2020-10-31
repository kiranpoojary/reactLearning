import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchButton() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButton])
    return (
        <div>
            <input type="test" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch</button>
            <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}

        </div>
    )
}

export default DataFetchButton

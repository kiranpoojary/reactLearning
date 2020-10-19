import React from 'react'

function likeCliked() {

    function likeHandler() {
        console.log("Liked");
    }

    return (
        <div>
            <button onClick={likeHandler}>Fun Like Click</button>  {/* dont make likeHandler()*/}
        </div>
    )
}

export default likeCliked

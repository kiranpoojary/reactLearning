import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text}-{count}

        </div>
    )
}


//memo make only re-render changed component
export default React.memo(Count)

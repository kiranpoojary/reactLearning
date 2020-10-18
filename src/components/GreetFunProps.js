import React from 'react'


const GreetFunProps = (props) => {
    console.log(props);
    return (
        //return only send one html content so <div> used to combine h1 and childrens
        <div>
            <h1>"func props" : How are you {props.name} has Children {props.hasChildrn}</h1>
            {props.children}
        </div>
    )
}


export default GreetFunProps
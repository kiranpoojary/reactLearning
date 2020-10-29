import React from 'react';
import './App.css';
// import ClassCounter from './hooks/useState/ClassCounter'
// import HookCounter from './hooks/useState/HookCounter'

// import HooKCounterTwo from './hooks/useState/HookCounterTwo'

// import StateObject from './hooks/useState/StateWithObject'

//import StateArray from './hooks/useState/StateWithArray'

//import CouterWithClass from './hooks/useEffect/CounterWithClass'
import CounterInEffect from './hooks/useEffect/CounterWithuseEffect'


function App() {
    return (
        <div className="App">
            <header className="App-header">

                {/* <ClassCounter />
                <HookCounter /> */}

                {/* <HooKCounterTwo /> */}

                {/* <StateObject /> */}

                {/* <StateArray /> */}

                {/* <CouterWithClass /> */}
                <CounterInEffect />
            </header>
        </div >
    );
}

export default App;

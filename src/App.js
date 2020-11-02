import React, { useReducer } from 'react';
import './App.css';
// import ClassCounter from './hooks/useState/ClassCounter'
// import HookCounter from './hooks/useState/HookCounter'

// import HooKCounterTwo from './hooks/useState/HookCounterTwo'

// import StateObject from './hooks/useState/StateWithObject'

//import StateArray from './hooks/useState/StateWithArray'

//import CouterWithClass from './hooks/useEffect/CounterWithClass'
//import CounterInEffect from './hooks/useEffect/CounterWithuseEffect'

// import CounterEffetClass from './hooks/conditionalEffect/CounterEffectWithClass'
// import HookCounterEffect from './hooks/conditionalEffect/HookCounterEffect'

// import ClassMousePosition from './hooks/runEffectOnlyOnce/ClassMousePosition'
// import HookMousePosition from './hooks/runEffectOnlyOnce/HookMousePosition'

//import WithCleanUp from './hooks/runEffectOnlyOnce/UseEffectWithCleanup'

// import IntervalCouterClass from './hooks/incorrect_dependencies/IntervalClass'
// import IntervalHook from './hooks/incorrect_dependencies/IntervalHook'

// import FetchData from './hooks/fetchDataEffect/DataFetch'
//import FetchOne from './hooks/fetchDataEffect/OneDataFetch'
//import FetchOnButton from './hooks/fetchDataEffect/DataFetchButton'

//import HookContextC from './hooks/context/ComponentC'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// import SimpleCounter from './hooks/reducer/CounterOne'
// import ComplexCounter from './hooks/reducer/ComplexCounter'
//import MultipleCounter from './hooks/reducer/MultipleReducerCounter'


// import ComponentA from './hooks/reducerAndContext/ComponentA'
// import ComponentB from './hooks/reducerAndContext/ComponentB'
// import ComponentC from './hooks/reducerAndContext/ComponentC'
// export const CountContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//         //See  uncomment bellow function App()

//     }
// }

//import DataFetcherState from './hooks/fetchDatauseReducer/DataFetcheruseState'
//import DataFetcherReducer from './hooks/fetchDatauseReducer/FetchDatauseReduceer'

// import ParentComponent from './hooks/useCallback/ParentComponent'
// import ParentComponentCallBack from './hooks/useCallback/withCallback/ParentComponent'

//import UseMemo from './hooks/useMemo/Counter'

//import UseRefHook from './hooks/useRef/FocusInput'
// import ClassTimer from './hooks/useRef/ClassTimer'
// import HookTimer from './hooks/useRef/HookTimer';

//import DocTitle from './hooks/customHooks/DocTitleOne'
//import DocTitleCustom from './hooks/customHooks/DocTitleTwo'
//import UseCount from './hooks/customHooks/CounterOne'
//import UseCountCustom from './hooks/customHooks/CounterTwo'
import FormSubmit from './hooks/customHooks/UserForm'


function App() {
    //const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="App">
            <header className="App-header">

                {/* <ClassCounter />
                <HookCounter /> */}

                {/* <HooKCounterTwo /> */}

                {/* <StateObject /> */}

                {/* <StateArray /> */}

                {/* <CouterWithClass />
                <CounterInEffect /> */}

                {/* <CounterEffetClass />
                <HookCounterEffect /> */}

                {/* <ClassMousePosition />
                <HookMousePosition /> */}

                {/* <WithCleanUp /> */}

                {/* <IntervalCouterClass />
                <IntervalHook /> */}

                {/* <FetchData />
                <FetchOne /> 
                <FetchOnButton />*/}

                {/* <UserContext.Provider value={'Kiran'} >
                    <ChannelContext.Provider value={'Poojary'}>
                        <HookContextC />
                    </ChannelContext.Provider>
                </UserContext.Provider> */}

                {/* <SimpleCounter /> 
                <ComplexCounter />
                <MultipleCounter />*/}
                {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                    COUNT-{count}
                    <ComponentA />
                    <ComponentB />
                    <ComponentC />
                </CountContext.Provider> */}

                {/* <DataFetcherState />
                <DataFetcherReducer /> */}

                {/* <ParentComponent />
                <ParentComponentCallBack /> */}

                {/* <UseMemo /> */}

                {/* <UseRefHook /> 
                <ClassTimer />
                <HookTimer />*/}

                {/* <DocTitle />
                <DocTitleCustom /> 
                <UseCount />
                <UseCountCustom />*/}
                <FormSubmit />

            </header>
        </div >
    );
}

export default App;

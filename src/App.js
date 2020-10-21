import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GreetFun } from "./components/GreetFun"   //curly brace for named export export const Greet... {Greet} should be same here
import GreetClass from "./components/GreetClass"
import GreetJSX from './components/GreetJSX'
import GreetProps from './components/GreetFunProps'
import GreetClassProp from './components/GreetClassProps'
import StateClass from './components/StateClass'
import ClassStateCounter from './components/ClassStateCounter'
import ClassStateCounterFive from './components/ClassStateCounterFive'
import DestructureInFun from './components/DestructPropsState_Fun'
import DestructureInClass from './components/DestructPropsState_Class'
import EventHandlingFun from './components/EventHandlingFun'
import EventHandlingClass from './components/EventHandlingClass'
import BindEvent1 from './components/BindEvent1'
import BindEvent2 from './components/BindEvent2'
import BindEvent3 from './components/BindEvent3'
import BindEvent4 from './components/BindEvent4'
import Parent from './components/ParentComponent'
import Condition1 from './components/ConditionalRender1'
import List1 from './components/RenderList1'
import List2 from './components/RenderList2_1'
import List3 from './components/RenderList3'
import ListIndexKey from './components/RenderListIndexKey'
import SimpleStyle from './styledcomponents/SimpleStyle'
import ConditionalStyle from './styledcomponents/ConditionalStyle'
import Inline from './styledcomponents/InlineStyle'
import './styledcomponents/CustomStylesheet.css'
import Styles from './styledcomponents/module.style.css'
import StyledCompo from './styledcomponents/ComponentImportStyle'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <GreetFun />
        <GreetClass />
        <GreetJSX />
        <GreetProps name="Kiran" hasChildrn="Yes">
          <p>This is only for Kiran(Children)</p>
        </GreetProps>

        <GreetProps name="Appiee" hasChildrn="Yes" >
          <input type="button" value="click" />
        </GreetProps>

        <GreetProps name="Julie" hasChildrn="No" />

        <GreetClassProp name="Am Greet" >
          <p>Iam classProp Child</p>
        </GreetClassProp>
        <StateClass />
        <ClassStateCounter />
        <ClassStateCounterFive />
        <DestructureInFun name="Julie" hasChildrn="No" />
        <DestructureInClass name="Julie" hasChildrn="No" />

        <EventHandlingFun />
        <EventHandlingClass />
        <BindEvent1 />
        <BindEvent2 />
        <BindEvent3 />
        <BindEvent4 />


        <Parent />

        <Condition1 />

        <List1 />
        <List2 />
        <List3 />
        <ListIndexKey />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        ****** Styles *******
        <SimpleStyle />
        <ConditionalStyle primary={true} />
        <Inline />

        <h2 className='error'>Errors</h2>
        <h2 className="success">Success</h2>
        <StyledCompo />



      </header>

    </div>
  );
}

export default App;

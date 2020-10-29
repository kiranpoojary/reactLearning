import React from 'react';
import './App.css';
//import logo from './logo.svg';
// import { GreetFun } from "./components/GreetFun"   //curly brace for named export export const Greet... {Greet} should be same here
// import GreetClass from "./components/GreetClass"
// import GreetJSX from './components/GreetJSX'
// import GreetProps from './components/GreetFunProps'
// import GreetClassProp from './components/GreetClassProps'
// import StateClass from './components/StateClass'
// import ClassStateCounter from './components/ClassStateCounter'
// import ClassStateCounterFive from './components/ClassStateCounterFive'
// import DestructureInFun from './components/DestructPropsState_Fun'
// import DestructureInClass from './components/DestructPropsState_Class'
// import EventHandlingFun from './components/EventHandlingFun'
// import EventHandlingClass from './components/EventHandlingClass'
// import BindEvent1 from './components/BindEvent1'
// import BindEvent2 from './components/BindEvent2'
// import BindEvent3 from './components/BindEvent3'
// import BindEvent4 from './components/BindEvent4'
// import Parent from './components/ParentComponent'
// import Condition1 from './components/ConditionalRender1'
// import List1 from './components/RenderList1'
// import List2 from './components/RenderList2_1'
// import List3 from './components/RenderList3'
// import ListIndexKey from './components/RenderListIndexKey'
// import SimpleStyle from './styledcomponents/SimpleStyle'
// import ConditionalStyle from './styledcomponents/ConditionalStyle'
// import Inline from './styledcomponents/InlineStyle'
// import './styledcomponents/CustomStylesheet.css'
// import './styledcomponents/module.style.css'
// // import Styles from './styledcomponents/module.style.css'
// import StyledCompo from './styledcomponents/ComponentImportStyle'
// import ClassForm from './forms/SubmitFormClass'
// import CompMounting from './lifecycle/Mounting'
// import ParentMount from './lifecycle/MountingParent'
// import Updating from './lifecycle/Updating'
// import Fragment from './advanced/Fragment/FragmentDemo'
// import Table from './advanced/Fragment/Table'
// import PureCompo from './advanced/pureComponent/PureComponentDemo'
// import RefsDemo from './advanced/refs/RefsDemo'
// import CBRef from './advanced/refs/CallbackRef'
// import RefParent from './advanced/refs/RefClassParent'
// import RefForward from './advanced/refs/ForwardRefParent'
// import Portal from './advanced/portal/PortalDemo'
// import ErrorBoundry from './advanced/errorHandling/ErrorBoundry'
// import Hero from './advanced/errorHandling/Hero'
//import Click from './advanced/higerordercomponent/ClickCount'
//import Hover from './advanced/higerordercomponent/HoverCount'

// import HOCClick from './advanced/higerordercomponent/HOC/ClickCount'
// import HOCHover from './advanced/higerordercomponent/HOC/HoverCount'
// import HOCPropParam from './advanced/higerordercomponent/HOC/HOCPropsParameter'

// import RenderPropsCount from './advanced/renderProp/ClickCounter'
// import RenderPropHover from './advanced/renderProp/HoverCounter'
// import User from './advanced/renderProp/User'
// import SharedPropsCounter from './advanced/renderProp/SharedProps/Counter'
// import SharedClick from './advanced/renderProp/SharedProps/ClickCounter'
// import SharedHover from './advanced/renderProp/SharedProps/HoverCounter'

// import ComponentC from './advanced/context/ComponentC'
// import { UserProvider } from './advanced/context/UserContext'


//import PostList from './advanced/http/PostList'
import PostForm from './advanced/http/PostForm'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <GreetFun />
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

        <ClassForm />

        <CompMounting />
        <ParentMount />
         <Updating />


        <Fragment />
        <Table />
        <PureCompo />

        <RefsDemo />      
        <CBRef />
        <RefParent />
    
        <RefForward />
        <Portal />
         
        <ErrorBoundry>
          <Hero heroName="Kiran" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName="Appiee" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName="Joker" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName="Kiran" />
          <Hero heroName="Appiee" />
          <Hero heroName="Joker" />
        </ErrorBoundry>
       
        <Click />
        <Hover />

        <HOCClick />
        <HOCHover />
        <HOCPropParam name="Kiran" />

        
        <RenderPropsCount />
        <RenderPropHover />
        <User name={(isLoged) => isLoged ? "Kiran" : "Guest"} />
         
        <SharedPropsCounter render={(count, incrementCount) => (
          <SharedClick count={count} incrementCount={incrementCount} />
        )}
        />


        <SharedPropsCounter render={(count, incrementCount) => (
          <SharedHover count={count} incrementCount={incrementCount} />
        )}
        />


        <UserProvider value="Kiran">
          <ComponentC />
        </UserProvider>

        

        <PostList />
        */}
        <PostForm />

      </header>
    </div >
  );
}

export default App;

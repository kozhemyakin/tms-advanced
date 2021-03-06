import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Cats from './Cats';
import ItalicText from './ItalicText'
import Task from './Task'
import Counter from './Counter'
import MyComponent from './Counter_class_comp'
import SayHi from './SayHi'
import Login from './Login'
import TimePicker from './TimePicker'
import PageContainer from './Pagination/PageContainer'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import UserList from './UserList/UserList'

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <Checkbox /> */}
    <Cats />
    {/* <ItalicText /> */}
    {/* <Counter />
    <MyComponent /> */}
    {/* <Checkbox /> */}
    {/* <Cats /> */}
    {/* <ItalicText /> */}
    {/* <Task number={1} text={'first'} done={true} />
    <Task number={2} text={'second'} done={false} />
    <Task number={3} text={'third'} done={false} />
    <Task number={4} text={'fourth'} done={false} />
    <Task number={5} text={'fifth'} done={false} /> */}
    {/* <SayHi /> */}
    {/* <Login />
    <TimePicker /> */}
    <PageContainer />  
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <UserList />

  </React.StrictMode>,
  document.getElementById('root')
);

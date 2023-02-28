import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Anchor, Row, Col } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./component/Home.js"
import AddBook from "./component/AddBook.js"
import UpdateBook from "./component/UpdateBook.js"
import DeleteBook from "./component/DeleteBook.js"
import Login from "./component/login.js"
import { useNavigate } from "react-router-dom";

import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes
} from "react-router-dom";
const { Search } = Input;

function App() {
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear()
    navigate("/")
    window.location.reload()
    alert("logout")
  }
  let data =[{
    key: 'Home',
    href: '/',
    title: 'Home',
  }]
  const onSearch = (value) => console.log(value);
  const head = ["Home","AddBook","DeleteBook","UpdateBook"]

  axios.get('http://localhost:4000/api/books').then(res=>{
    // console.log(res.data)
  })
  console.log(typeof(localStorage.getItem("Role")))
  if(localStorage.getItem("Role")=="Admin"){
    data = [
      {
        key: 'Home',
        href: '/',
        title: 'Home',
      },
      {
        key: 'AddBook',
        href: 'AddBook',
        title: 'AddBook',
      },
      {
        key: 'DeleteBook',
        href: 'DeleteBook',
        title: 'DeleteBook',
      },
      {
        key: 'UpdateBook',
        href: 'UpdateBook',
        title: 'UpdateBook',
      },



    ]
  }
  else{
    data =[
      {
        key: 'Home',
        href: '/',
        title: 'Home',
      },
      {
        key: 'Login',
        href: 'Login',
        title: 'Login',
      },

    ]
  }
  return (
    
        <div>
     
        <div style={{ padding: '20px' }}>
          <Anchor
            direction="horizontal"
            items={data}
          />
         </div>
        {localStorage.getItem("Role")=="Admin" && 
        <button onClick={()=> logout()}>logout</button>
        }
    
    

   
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/AddBook" element={<AddBook/>} />
        <Route exact path="/UpdateBook" element={<UpdateBook/>} />
        <Route exact path="/DeleteBook" element={<DeleteBook/>} />
        <Route exact path="/Login" element={<Login/>} />
      </Routes>

    </div>
    
   


    
  );
}

export default App;
{/* <h1>test</h1> */}
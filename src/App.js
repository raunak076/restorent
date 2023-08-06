// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';
import { useState } from 'react';
// import Home from './components/Home';
// import Myhome from './components/Myhome';
import Mycart from './components/Mycart-menu'
import { BrowserRouter,Route,Link, Routes } from 'react-router-dom';
import Register from './Register';
import HomeNav from './components/homeNav';
import Menu from './components/MenuApi'


function App() {
  // const [users,setUser]=useState("")

  // const addUser=(name,pass)=>{
  //   console.log("ading")
  //   let sno;
  //   if(users.length===0){
  //     sno=0
  //   }
  //   else{
  //     sno=users.length
  //   }
  //     const tdata={
  //       sno: sno ,
  //       isLog: true,
  //       username: name,
  //       password: pass
  //     }
  //     setUser([...users,tdata])
      
  // }
  // const show=()=>{
  //   console.log(users)
  // }
  const [menudata,setMenu]=useState(Menu)

  return (
    <>
    <BrowserRouter>
    <HomeNav menudata={menudata} setMenu={setMenu}/>
    <Routes>
    {/* <Route exact path='/' element={<Myhome />} />  */}
      <Route exact path='/' element={<Mycart menudata={menudata}/>} />
      <Route exact path='/register' element={ <Register /> } /> 
   
  
   </Routes>
   </BrowserRouter>
   </>
    
  );
}

export default App;

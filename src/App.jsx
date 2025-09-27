// import { useState } from "react";
// import ExpenseForm from "./component/ExpenseForm";
// import ExpenseList from "./component/ExpenseList";
// import ExpenseTracker from "./component/ExpenseTracker";
// import Stopwatch from "./stopwatch";
// export const ExpenseContext=createContext();
// import Layout from "./Routes/Layout";
// import  Home  from "./Routes/home";
// import  About  from "./Routes/about";
// import Contact from "./Routes/contact";
import { Contact, Home, About } from './routes/router'
import Layout from "./pages/layout"

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Suspense } from "react";
function App(){

  return(
    <>
      <BrowserRouter>
        <Layout />
        <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
          </Routes>
          </Suspense>
      {/* <Stopwatch></Stopwatch> */}</BrowserRouter>
      
      </>
  )
}
export default App;
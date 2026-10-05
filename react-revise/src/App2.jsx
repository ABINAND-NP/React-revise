
import React from 'react'
import Home from "./pages/Home"
import BlogList from './pages/BlogList'
import AddBlog from './pages/AddBlog'
import Favorites from './pages/Favorites'
import BlogDetail from './pages/BlogDetail'
import {Routes,Route} from "react-router-dom"
import NavigationMenu from "./Components/NavigationMenu"


const App2  = () => {
  return (
    <div>

        {/* link allathe programaticaly engane page mataam [eg :button click ]*/}
        {/* *)Dynamic Route [path + id]
        *)how to read route parameters
        */}

        <NavigationMenu />        

        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/blogList" element = {<BlogList />} />
            <Route path = "/addBlog" element = {<AddBlog />} />
            <Route path='/favorites' element ={<Favorites />} />
            <Route path='/blog/:id' element = {<BlogDetail />} />
        </Routes>
        
      
    </div>
  )
}

export default  App2

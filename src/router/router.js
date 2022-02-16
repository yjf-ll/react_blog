import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Main from "../view/main";
import Home from "../view/home/home";
import Notes from "../view/notes/notes";
import Project from "../view/project/project";
import About from "../view/about/about";
import Unknown from "../view/common/unknown/unknown";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="notes" element={<Notes/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<Unknown/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
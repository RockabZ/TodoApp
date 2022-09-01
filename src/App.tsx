import Layout from './components/Layout/Layout'
import {Route, Routes } from 'react-router-dom';
import Allprojects from './pages/AllProjects';
import AddProject from './pages/AddProject';
import DoneProjects from './pages/DoneProjects';
import Favorites from './pages/Favorites'

function App() {

  return (
    <Layout>
        <Routes>
          <Route path='/' element={<Allprojects/>}/>
          <Route path='/add-project' element={<AddProject/>}/>
          <Route path='/done-projects' element={<DoneProjects/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    </Layout>
  )
}

export default App

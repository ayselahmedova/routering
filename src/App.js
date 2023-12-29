// App.js
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import AboutPage from '../src/components/AboutPage';
import ProjectsPage from '../src/components/ProjectsPage';
import ContactPage from '../src/components/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Haqqında</Link>
            </li>
            <li>
              <Link to="/projects">İş Nümunələri</Link>
            </li>
            <li>
              <Link to="/contact">Əlaqə Məlumatları</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <main>
          <Routes>
              <Route path="/" element={<AboutPage/>}></Route>
              <Route path="/projects" element={<ProjectsPage/>}></Route>
              <Route path="/contact" element={<ContactPage/>}></Route>
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  );
};

export default App;

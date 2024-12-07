import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Layout from './components/Layout';
import AboutInfo from './AboutInfo';
import NotFoundPage from './NotFoundPage';
import './App.css';

function App() {
  let [register, setRegister] = useState(false);

  return (
    <div className="App">
      <div style={{textAlign: "center"}}>
        <h3>Авторизирован: {register ? "TRUE" : "FALSE"}</h3>
        <button onClick={() => setRegister({register: true})}>Авторизация</button>
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={
            register ?
            <About /> :
            <h2>Получить доступ к этой странице<br />могут только зарегистрированные пользователи</h2>            
            } />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles-us" element={<Navigate to="/articles" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

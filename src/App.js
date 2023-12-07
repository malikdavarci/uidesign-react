import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

// Pages
import StartPage from './pages/StartPage';
import Day278 from './pages/Day278';


function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/day278' element={<Day278 />} />     
    </Routes>
  );
}

export default App;

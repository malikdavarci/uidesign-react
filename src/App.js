import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

// Pages
import StartPage from './pages/StartPage';
import Day278 from './pages/Day278';
import Day1570 from './pages/Day1570';


function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/day278' element={<Day278 />} />
      <Route path='/day1570' element={<Day1570 />} />     
    </Routes>
  );
}

export default App;

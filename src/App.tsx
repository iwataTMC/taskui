import { Route, Routes } from 'react-router-dom';
import './App.css';
import BoardPage from './BoardPage';
import MainPage from './MainPage';


export default function App() {
  return (
    <Routes>
      <Route path="ReactTypeScriptDemo/" element={<MainPage />} />
      <Route path="/:id" element={<BoardPage  />} />
    </Routes>
  );
}

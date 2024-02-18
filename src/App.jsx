import {Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import HeaderCars from './components/HeaderCars/HeaderCars';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const CarsPage = lazy(() => import('./pages/CarsPage/CarsPage'));


function App() {
  return(
    <>
    <HeaderCars />
      <h1>Hello Rent-a-car-app</h1>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cars-page" element={<CarsPage />}></Route>
          <Route path="/favorites" element={<FavoritePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>    
    </>
  );
};

export default App;

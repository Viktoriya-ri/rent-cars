import {Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import HeaderCars from './components/HeaderCars/Header';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));


function App() {
  return(
    <>
    <HeaderCars />
      <h1>Hello Rent-a-car-app</h1>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cars-page" element={<CatalogPage />}></Route>
          <Route path="/favorites" element={<FavoritePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>    
    </>
  );
};

export default App;

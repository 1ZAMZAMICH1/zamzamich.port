import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

// Ленивая загрузка всех страниц
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));

function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback={<div className={styles.loader}>ЗАГРУЗКА...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
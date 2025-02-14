import './page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './javascript/Header.jsx';

import BackMenu from './javascript/BackMenu.jsx';
import CatalogFilter from './javascript/CatalogFilter.jsx';
import RelatedArticles from './javascript/RelatedArticles.jsx';
import Pagination from './javascript/Pagination.jsx';
import Footer from './javascript/Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <BackMenu />
              <CatalogFilter />
              <RelatedArticles />
              <Pagination />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);

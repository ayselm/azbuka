import './page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './javascript/Header.jsx';

import HelloAbc from './javascript/HelloAbc.jsx';
import Categories from './javascript/Categories.jsx';
import RelatedArticles from './javascript/RelatedArticles.jsx';
import Footer from './javascript/Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <HelloAbc />
              <Categories />
              <RelatedArticles />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);

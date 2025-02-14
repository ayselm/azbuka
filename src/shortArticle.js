import './page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './javascript/Header.jsx';
import Breadcrumbs from './javascript/Breadcrumbs.jsx';
import Article from './javascript/Article.jsx';
import RelatedArticles from './javascript/RelatedArticles.jsx';
import Footer from './javascript/Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
                <Breadcrumbs />
                <Article />
                <RelatedArticles />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);

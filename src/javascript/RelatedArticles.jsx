// javascript/Article.jsx
import React from 'react';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';

const Article = () => {
    return (
        <div className="RelatedArticles">
            <div className="TopBlock">
                <h1>Статьи</h1>
                <a href="/catalog.html">Показать больше</a>
            </div>

            <div className="AriclesBlock">
                <a>
                    <div>
                        <img src={img3}/>
                        <h3>Люстра</h3>

                        <div className="Descr">Векторные изображения состоят из кривых линий, которые образуют геометрические объекты. Такая графика создается программой при помощи математических формул...</div>
                    </div>
                    <div className="Nav">
                        <span className="tag">Джун</span>
                        <span className="time">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
 <span>15 мин</span></span>

                    </div>
                </a>


                <a>
                    <div>
                        <img src={img4}/>
                        <h3>Типографика</h3>
                        <div className="Descr">Искусство оформления печатного текста, базирующееся на определённых, присущих конкретному языку правилах посредством набора и вёрстки...</div>
                    </div>
                    <div className="Nav">
                        <span className="tag">Джун</span>
                        <span className="time">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
 <span>15 мин</span></span>

                    </div>
                </a>

                <a href="/shortArticle.html">
                    <div>
                        <img src={img5}/>
                        <h3>Беха</h3>
                        <div className="Descr">Behance — это многомиллионная коллекция работ от дизайнеров, разработчиков и творческих людей со всего Мира. Самые лучшие автор....</div>
                    </div>
                    <div className="Nav">
                        <span className="tag">Джун</span>
                        <span className="time">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
 <span>15 мин</span></span>

                    </div>
                </a>
            </div>


        </div>
    );
};

export default Article;

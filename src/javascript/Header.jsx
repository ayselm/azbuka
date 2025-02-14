// javascript/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.51263" y="1.5127" width="34.7899" height="34.7899" rx="2.72269" fill="#24262B"/>
                    <circle cx="23.7728" cy="18.7926" r="7.43051" transform="rotate(22.4444 23.7728 18.7926)"
                            fill="white" stroke="white" stroke-width="1.17324"/>
                    <circle cx="14.0001" cy="19.0858" r="7.43051" transform="rotate(22.4444 14.0001 19.0858)"
                            fill="#24262B" stroke="white" stroke-width="1.17324"/>
                    <path d="M18.4155 13.7933C16.8988 15.4039 14.2976 19.9813 18.9393 24.7328" stroke="white"
                          stroke-width="1.17324" stroke-dasharray="1.96 1.96"/>
                </svg>
            </a>
            <div className="rightBlock">
                <nav className="menu">
                    <ul>
                        <li><a href="/catalog.html">Статьи</a></li>
                        <li>Глоссарий</li>
                        <li>Тесты</li>
                    </ul>
                </nav>
                <div className="search">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.4517 3.41467C17.8169 6.77992 17.4539 12.4552 13.3679 15.3253C10.7675 17.1505 7.13521 17.1505 4.53479 15.3253C0.446196 12.4578 0.085819 6.77992 3.45107 3.41467C6.48965 0.376098 11.4157 0.376098 14.4517 3.41467"
                            stroke="#323232" stroke-width="1.51261" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.3223 19.2843L14.4481 14.4102" stroke="#323232" stroke-width="1.51261"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Найдите термин..."/>
                </div>
            </div>
        </header>
    );
};

export default Header;

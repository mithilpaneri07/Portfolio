import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(()=>{
    try{
      const saved = localStorage.getItem('theme');
      if(saved === 'light'){
        document.documentElement.classList.add('light');
        setIsLight(true);
      }
    }catch{}
  },[]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isLight;
    setIsLight(next);
    if(next) root.classList.add('light'); else root.classList.remove('light');
    try{ localStorage.setItem('theme', next ? 'light' : 'dark'); }catch{}
  }

  return (
    <div className='nav'>
      <div className='logo' style={{ fontWeight: "700", color: "var(--accent)", fontSize: "40px" }}>
        <span style={{ color: "var(--text)" }}>eli</span>ott
      </div>
      <div className='links'>
        <a href='#services' className='headerlink'>Services</a>
        <a href='#' className='headerlink'>Work</a>
        <a href='#' className='headerlink'>About</a>
        <a href='#' className='headerlink'>Reviews</a>
        <a href='#' className='headerlink'>Blog</a>
        <a href='#' className='headerlink'>Contact</a>
      </div>
      <div className='btn-container'>
        <button className='hire-me'>Hire me &rarr;</button>
        <button
          aria-pressed={isLight}
          className={`theme-toggle ${isLight ? 'on' : ''}`}
          onClick={toggleTheme}
          title="Toggle light / dark mode"
        >
          <span className='sr-only'>Toggle theme</span>
          <svg className='icon sun' viewBox='0 0 24 24' width='18' height='18' aria-hidden='true'>
            <circle cx='12' cy='12' r='4' fill='currentColor'/>
          </svg>
          <svg className='icon moon' viewBox='0 0 24 24' width='18' height='18' aria-hidden='true'>
            <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' fill='currentColor'/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/authenticated-footer.scss';

const AuthenticatedFooter = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const date = new Date();
    const theme = useSelector((state) => state.ui.theme); // Access theme from Redux
  
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomPosition = document.documentElement.scrollHeight;
      if (scrollPosition === bottomPosition) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <footer className={`footer ${isAtBottom ? 'scrolled' : ''} ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="container">
            <p className={`text-center ${isAtBottom ? '' : 'text-secondary'} `}>
              Designed by <span className={`${isAtBottom && theme === 'dark' ? 'text-warning' : 'text-primary'}`}>Bernard Iorver</span> &copy; {date.getFullYear()} All Rights Reserved
            </p>
        </div>
      </footer>
    );
}

export default AuthenticatedFooter
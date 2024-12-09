import React, { useState, useEffect } from 'react';
import '../../styles/unauthenticated-footer.scss';


const UnauthenticatedFooter = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
  const date = new Date();

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
    <footer className={`footer ${isAtBottom ? 'scrolled' : ''}`}>
      <div className="container">
        <p className={`text-center ${isAtBottom ? 'text-dark' : 'text-secondary'} `}>
            Designed by <span className='text-primary'>Bernard Iorver</span> &copy; {date.getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default UnauthenticatedFooter
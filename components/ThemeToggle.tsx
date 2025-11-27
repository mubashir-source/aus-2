'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState('theme1');

  const themes = [
    { id: 'theme1', name: 'Purple', colors: ['#3F1E57', '#7339A0'] },
    { id: 'theme2', name: 'Red', colors: ['#1E1E1E', '#D10008'] },
    { id: 'theme3', name: 'Blue', colors: ['#002035', '#009BFF'] }
  ];

  useEffect(() => {
    // Set initial theme on mount
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Force a repaint to ensure CSS variables are applied
    document.documentElement.style.setProperty('--force-repaint', Math.random().toString());
  }, []);

  useEffect(() => {
    // Update theme when currentTheme changes
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Force a repaint to ensure CSS variables are applied
    document.documentElement.style.setProperty('--force-repaint', Math.random().toString());
  }, [currentTheme]);

  const toggleTheme = () => {
    const currentIndex = themes.findIndex(theme => theme.id === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex].id;
    
    console.log('Switching from', currentTheme, 'to', newTheme);
    
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Log the computed CSS variables for debugging
    const computedStyle = getComputedStyle(document.documentElement);
    console.log('Primary Dark:', computedStyle.getPropertyValue('--primary-dark'));
    console.log('Primary Blue:', computedStyle.getPropertyValue('--primary-blue'));
  };

  const getCurrentThemeData = () => {
    return themes.find(theme => theme.id === currentTheme) || themes[0];
  };

  const currentThemeData = getCurrentThemeData();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: 'var(--primary-dark)',
        color: 'white',
      }}
      aria-label={`Toggle color theme - Current: ${currentThemeData.name}`}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full border-2 border-white"
          style={{
            backgroundColor: currentThemeData.colors[0],
          }}
        />
        <div
          className="w-4 h-4 rounded-full border-2 border-white"
          style={{
            backgroundColor: currentThemeData.colors[1],
          }}
        />
        <span className="text-xs ml-1">{currentThemeData.name}</span>
      </div>
    </button>
  );
};

export default ThemeToggle;

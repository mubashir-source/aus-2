'use client';

import { useState, useEffect, useRef } from 'react';

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState('theme1');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: 'theme1', name: 'Purple', colors: ['#3F1E57', '#7339A0'] },
    { id: 'theme2', name: 'Red', colors: ['#1E1E1E', '#D10008'] },
    { id: 'theme3', name: 'Blue', colors: ['#002035', '#009BFF'] },
    { id: 'theme4', name: 'Orange', colors: ['#2A2E32', '#F57921'] },
    { id: 'theme5', name: 'Green', colors: ['#1E1E1E', '#1B8A5A'] },
    { id: 'theme6', name: 'Brown', colors: ['#4B2E39', '#8B5E3C'] }
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

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectTheme = (themeId: string) => {
    console.log('Switching to', themeId);
    
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    setIsOpen(false);
    
    // Log the computed CSS variables for debugging
    const computedStyle = getComputedStyle(document.documentElement);
    console.log('Primary Dark:', computedStyle.getPropertyValue('--primary-dark'));
    console.log('Primary Blue:', computedStyle.getPropertyValue('--primary-blue'));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCurrentThemeData = () => {
    return themes.find(theme => theme.id === currentTheme) || themes[0];
  };

  const currentThemeData = getCurrentThemeData();

  return (
    <div ref={dropdownRef} className="fixed top-4 right-4 z-50">
      {/* Main Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
        style={{
          backgroundColor: 'var(--primary-dark)',
          color: 'white',
        }}
        aria-label={`Theme selector - Current: ${currentThemeData.name}`}
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
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[200px]">
          <div className="p-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 px-2">Choose Theme</h3>
            <div className="space-y-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-md transition-all duration-200 hover:bg-gray-50 ${
                    currentTheme === theme.id ? 'bg-blue-50 border border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-gray-300"
                      style={{
                        backgroundColor: theme.colors[0],
                      }}
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 border-gray-300"
                      style={{
                        backgroundColor: theme.colors[1],
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{theme.name}</span>
                  {currentTheme === theme.id && (
                    <svg className="w-4 h-4 text-blue-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;

import React, { useRef, useEffect } from 'react';
import { Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-colors text-dark-200 hover:text-white"
        title="Theme settings"
      >
        {theme === 'system' ? <Monitor size={20} /> : <Moon size={20} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg glass-effect shadow-lg py-1 z-50">
          <div className="px-4 py-2 text-sm text-dark-200 border-b border-dark-800">
            Theme
          </div>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/5 ${
              theme === 'dark' ? 'text-white' : 'text-dark-200'
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/5 ${
              theme === 'system' ? 'text-white' : 'text-dark-200'
            }`}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
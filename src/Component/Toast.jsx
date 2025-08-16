import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message, show, onHide, type = 'success' }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000); // Hide after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-green-900 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 min-w-[280px]">
        <Check className="w-5 h-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

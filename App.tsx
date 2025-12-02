import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Download, MonitorPlay } from 'lucide-react';
import { LOCATIONS } from './constants';
import { TitleSlide, SalarySlide, BenefitsSlide, LocationsSlide, VacancySlide, ClosingSlide } from './components/Slides';
import { generatePresentation } from './utils/pptGenerator';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Define slide order
  const locationNames = LOCATIONS.map(l => l.name);
  const totalStaticSlides = 4; // Title, Salary, Benefits, Locations Overview
  const totalSlides = totalStaticSlides + locationNames.length + 1; // +1 for Closing

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = () => {
    if (currentSlide === 0) return <TitleSlide active={true} />;
    if (currentSlide === 1) return <SalarySlide active={true} />;
    if (currentSlide === 2) return <BenefitsSlide active={true} />;
    if (currentSlide === 3) return <LocationsSlide active={true} />;
    
    // Vacancy Slides (Dynamic)
    const locationIndex = currentSlide - 4;
    if (locationIndex < locationNames.length) {
      return <VacancySlide active={true} location={locationNames[locationIndex]} />;
    }

    return <ClosingSlide active={true} />;
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col md:items-center md:justify-center overflow-hidden font-sans">
      
      {/* Slide Container - Mobile: Full Height, Desktop: Aspect Ratio 16:9 */}
      <div className="relative w-full h-full md:h-auto md:max-w-[1600px] md:aspect-video bg-white shadow-2xl overflow-hidden md:rounded-lg">
        {renderSlide()}

        {/* Navigation Overlay - Adjusted for Mobile touch targets */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-2 md:px-4 z-20">
            <button 
              onClick={prevSlide} 
              className={`pointer-events-auto p-2 md:p-3 rounded-full bg-black/10 hover:bg-black/40 text-white backdrop-blur-sm transition-all ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>
            <button 
              onClick={nextSlide} 
              className={`pointer-events-auto p-2 md:p-3 rounded-full bg-black/10 hover:bg-black/40 text-white backdrop-blur-sm transition-all ${currentSlide === totalSlides - 1 ? 'opacity-0' : 'opacity-100'}`}
              aria-label="Siguiente"
            >
              <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>
        </div>

        {/* Subtle Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-imss-gold transition-all duration-300 ease-out z-20" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
        
        {/* Subtle Download Button (Floating Top Right) */}
        <button 
          onClick={generatePresentation}
          className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/20 hover:bg-black/60 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm transition-all text-xs md:text-sm border border-white/10 group"
          title="Descargar presentación editable"
        >
          <Download size={16} className="group-hover:scale-110 transition-transform"/>
          <span className="hidden md:inline font-medium">PPTX</span>
        </button>
      </div>

    </div>
  );
};

export default App;
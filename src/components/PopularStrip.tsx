import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const popularItems = [
    "Unknown Number: The High School Catfish",
    "K-Pop Demon Hunters", 
    "Wednesday",
    "Bon Appétit, Your Majesty",
    "Fall for Me",
    "My Life With the Walter Boys",
    "Stranger Things",
    "The Crown",
    "Bridgerton",
    "Money Heist"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <span className="text-sm font-medium text-muted-foreground mr-4 whitespace-nowrap">
            POPULAR:
          </span>
          
          {/* Scroll Buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll('left')}
            className="p-1 mr-2 hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Scrollable Content */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 pb-2">
              {popularItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap relative group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll('right')}
            className="p-1 ml-2 hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularStrip;
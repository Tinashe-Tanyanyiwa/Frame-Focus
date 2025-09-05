import React from "react";
import { motion } from "framer-motion";
import { Play, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  author?: string;
  date?: string;
  category?: string;
  showPlayButton?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  author,
  date,
  category = "NEW ON FRAME FOCUS",
  showPlayButton = false
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl">
          {/* Category Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              {category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.h2>
          )}

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {showPlayButton && (
              <Button 
                size="lg"
                className="bg-gradient-red hover:bg-gradient-red/90 text-white border-0 px-8 py-3 text-lg font-semibold shadow-glow hover:shadow-glow transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Now
              </Button>
            )}
            
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-3 text-lg"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add to Watchlist
            </Button>
          </motion.div>

          {/* Metadata */}
          {(author || date) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {author && (
                <span>By <span className="text-foreground font-medium">{author}</span></span>
              )}
              {date && (
                <span>{date}</span>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
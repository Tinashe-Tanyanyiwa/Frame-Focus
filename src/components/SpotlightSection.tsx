import React from "react";
import { motion } from "framer-motion";
import { Play, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpotlightItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  category: string;
  featured?: boolean;
}

interface SpotlightSectionProps {
  items: SpotlightItem[];
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({ items }) => {
  const featuredItem = items.find(item => item.featured) || items[0];
  const otherItems = items.filter(item => item.id !== featuredItem.id).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Spotlight
          </h2>
          <div className="w-32 h-1 bg-gradient-red rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={featuredItem.imageSrc}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    className="bg-primary/20 backdrop-blur-sm rounded-full p-8 border border-primary/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-12 w-12 text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    {featuredItem.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {featuredItem.title}
                </h3>
                <p className="text-lg md:text-xl mb-4 opacity-90 hidden md:block">
                  {featuredItem.subtitle}
                </p>
                <p className="text-base opacity-80 mb-6 line-clamp-3 hidden md:block">
                  {featuredItem.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {otherItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex">
                  <div className="w-32 h-24 flex-shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-xs font-semibold text-primary mb-1">
                      {item.category}
                    </div>
                    <h4 className="font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
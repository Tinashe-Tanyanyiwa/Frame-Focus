import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContentItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime?: string;
  rating?: number;
  imageSrc: string;
  description: string;
}

interface ContentGridProps {
  title: string;
  items: ContentItem[];
  showRating?: boolean;
}

const ContentGrid: React.FC<ContentGridProps> = ({ title, items, showRating = true }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-red rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="bg-card border-border/50 overflow-hidden group hover:shadow-card-cinema transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Rating */}
                  {showRating && item.rating && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-white font-medium">{item.rating}</span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      
                      {item.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{item.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContentGrid;
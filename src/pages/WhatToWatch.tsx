import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Compass, Star, Clock, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContentGrid from "@/components/ContentGrid";
import contentGrid from "@/assets/content-grid.jpg";

const WhatToWatch = () => {
  const recommendations = [
    {
      id: "rec-1",
      title: "Perfect for Mystery Lovers",
      category: "Curated Collection",
      date: "Updated Daily",
      readTime: "20+ titles",
      rating: 4.8,
      imageSrc: contentGrid,
      description: "Dive into mind-bending mysteries and psychological thrillers that will keep you guessing until the very end."
    },
    {
      id: "rec-2", 
      title: "Weekend Binge Recommendations",
      category: "Editor's Pick",
      date: "Sep 2, 2025",
      readTime: "12 hours",
      rating: 4.9,
      imageSrc: contentGrid,
      description: "The perfect lineup for your weekend marathon viewing - carefully curated for maximum entertainment."
    },
    {
      id: "rec-3",
      title: "International Spotlight", 
      category: "Global Content",
      date: "Aug 30, 2025",
      readTime: "15+ titles",
      rating: 4.7,
      imageSrc: contentGrid,
      description: "Discover incredible stories from around the world that showcase diverse cultures and perspectives."
    },
    {
      id: "rec-4",
      title: "New This Month",
      category: "Fresh Releases",
      date: "September 2025",
      readTime: "25+ new titles",
      rating: 4.6,
      imageSrc: contentGrid,
      description: "Get first access to the latest releases and be among the first to discover groundbreaking content."
    },
    {
      id: "rec-5",
      title: "Award Season Contenders",
      category: "Critical Acclaim",
      date: "Aug 25, 2025",
      readTime: "18 titles",
      rating: 4.9,
      imageSrc: contentGrid,
      description: "Watch the films and series generating Oscar and Emmy buzz before the awards season begins."
    },
    {
      id: "rec-6",
      title: "Hidden Gems Collection",
      category: "Underrated Favorites", 
      date: "Aug 20, 2025",
      readTime: "30+ titles",
      rating: 4.5,
      imageSrc: contentGrid,
      description: "Uncover lesser-known masterpieces that deserve your attention - handpicked by our content experts."
    }
  ];

  const categories = [
    { name: "Action & Adventure", count: "180+ titles", color: "bg-red-500/10 text-red-400" },
    { name: "Comedy", count: "120+ titles", color: "bg-yellow-500/10 text-yellow-400" },
    { name: "Drama", count: "200+ titles", color: "bg-blue-500/10 text-blue-400" },
    { name: "Horror", count: "85+ titles", color: "bg-purple-500/10 text-purple-400" },
    { name: "Sci-Fi", count: "95+ titles", color: "bg-green-500/10 text-green-400" },
    { name: "Documentary", count: "140+ titles", color: "bg-orange-500/10 text-orange-400" },
    { name: "Romance", count: "110+ titles", color: "bg-pink-500/10 text-pink-400" },
    { name: "Thriller", count: "130+ titles", color: "bg-gray-500/10 text-gray-400" }
  ];

  const personalizedPicks = [
    {
      title: "Because you watched Wednesday",
      items: ["The Addams Family Chronicles", "Gothic Academy", "Supernatural High", "Dark Magic School"]
    },
    {
      title: "Trending in your area",
      items: ["Local Heroes", "City Stories", "Urban Legends", "Metropolitan Mystery"]
    },
    {
      title: "New releases for you",
      items: ["Future Vision", "Tomorrow's World", "Next Generation", "Digital Dreams"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Compass className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  What to Watch
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover your next favorite with personalized recommendations, curated collections, 
                and expert picks tailored just for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center text-muted-foreground mr-4">
                <Filter className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Quick Filters:</span>
              </div>
              {["New Releases", "Trending Now", "Award Winners", "Hidden Gems", "International", "Documentaries"].map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10 hover:border-primary/50 hover:text-primary"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized Recommendations */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Personalized for You
              </h2>
              <div className="w-24 h-1 bg-gradient-red rounded-full"></div>
            </motion.div>

            <div className="space-y-12">
              {personalizedPicks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">{section.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                      >
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Star className="h-8 w-8 text-primary/60" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Find exactly what you're in the mood for
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Compass className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Collections */}
        <ContentGrid 
          title="Curated Collections"
          items={recommendations}
          showRating={true}
        />

        {/* Coming Soon */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Coming Soon
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Set Reminders for Upcoming Releases
                </h3>
                <p className="text-muted-foreground mb-6">
                  Never miss a premiere! Get notified when your most anticipated shows and movies arrive.
                </p>
                <Button variant="cinema" size="lg">
                  Browse Coming Soon
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-muted/20 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              Recommendations updated based on your viewing history and preferences
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhatToWatch;
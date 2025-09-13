import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Tv, Star, Calendar, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ContentGrid from "@/components/ContentGrid";
import SpotlightSection from "@/components/SpotlightSection";
import contentGrid from "@/assets/content-grid.jpg";
import heroThriller from "@/assets/hero-thriller.jpg";
import lethalogica from "@/assets/lethalogica.jpg"

const Shows = () => {
  const featuredShows = [
    {
      id: "show-1",
      title: "Wednesday Season 2",
      category: "Horror Comedy",
      date: "Sep 15, 2025",
      readTime: "10 episodes",
      rating: 4.9,
      imageSrc: contentGrid,
      description: "Wednesday Addams returns to Nevermore Academy with more supernatural mysteries, dark humor, and unexpected revelations about her family's past."
    },
    {
      id: "show-2",
      title: "The Black Rabbit Mysteries", 
      category: "Psychological Thriller",
      date: "Sep 1, 2025",
      readTime: "8 episodes",
      rating: 4.8,
      imageSrc: contentGrid,
      description: "A mind-bending thriller series that follows detectives uncovering a conspiracy that goes deeper than anyone imagined."
    },
    {
      id: "show-3",
      title: "Beauty in Black",
      category: "Drama Series",
      date: "Aug 28, 2025",
      readTime: "6 episodes",
      rating: 4.7,
      imageSrc: contentGrid,
      description: "A powerful exploration of identity, beauty standards, and self-acceptance in contemporary society through interconnected stories."
    },
    {
      id: "show-4",
      title: "Digital Conspiracy",
      category: "Tech Thriller",
      date: "Aug 25, 2025", 
      readTime: "10 episodes",
      rating: 4.6,
      imageSrc: contentGrid,
      description: "Silicon Valley secrets unravel when a whistleblower exposes the dark side of the tech industry's biggest companies."
    },
    {
      id: "show-5",
      title: "Ocean's Deep",
      category: "Nature Documentary",
      date: "Aug 20, 2025",
      readTime: "6 episodes",
      rating: 4.9,
      imageSrc: contentGrid,
      description: "Dive into Earth's most mysterious depths and discover the incredible creatures that call the deep ocean home."
    },
    {
      id: "show-6",
      title: "The Innovators",
      category: "Biography Series", 
      date: "Aug 18, 2025",
      readTime: "8 episodes",
      rating: 4.8,
      imageSrc: contentGrid,
      description: "Follow the journeys of entrepreneurs and inventors who changed the world with their groundbreaking innovations."
    }
  ];

  const spotlightShows = [
    {
      id: "spot-show-1",
      title: "Short-Films",
      subtitle: "The best shows streaming now on Film World",
      description: "From gripping dramas to laugh-out-loud comedies, discover the short films that are defining this generation of storytelling.",
      imageSrc: lethalogica,
      category: "BINGE-WORTHY",
      featured: true
    },
    {
      id: "spot-show-2",
      title: "New Episodes Weekly",
      subtitle: "Fresh content every week",
      description: "Stay up to date with ongoing series and never miss an episode.",
      imageSrc: contentGrid,
      category: "WEEKLY DROPS"
    },
    {
      id: "spot-show-3",
      title: "Limited Series",
      subtitle: "Complete stories in one season",
      description: "Perfect self-contained narratives you can finish in a weekend.",
      imageSrc: contentGrid,
      category: "MINISERIES"
    },
    {
      id: "spot-show-4",
      title: "International Hits",
      subtitle: "Global stories, universal appeal",
      description: "Acclaimed series from around the world that transcend language barriers.",
      imageSrc: contentGrid,
      category: "GLOBAL"
    }
  ];

  const genres = [
    { name: "Drama", count: "145 shows", trending: "+15%" },
    { name: "Comedy", count: "89 shows", trending: "+8%" },
    { name: "Thriller", count: "76 shows", trending: "+22%" },
    { name: "Sci-Fi", count: "54 shows", trending: "+18%" },
    { name: "Documentary", count: "92 shows", trending: "+12%" },
    { name: "Horror", count: "38 shows", trending: "+25%" },
    { name: "Romance", count: "67 shows", trending: "+10%" },
    { name: "Action", count: "71 shows", trending: "+14%" }
  ];

  const currentlyWatching = [
    { title: "Wednesday S2", progress: 65, episode: "Episode 6 of 10" },
    { title: "Black Rabbit", progress: 100, episode: "Season Complete" },
    { title: "Beauty in Black", progress: 30, episode: "Episode 2 of 6" },
    { title: "Digital Conspiracy", progress: 80, episode: "Episode 8 of 10" }
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
                <Tv className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Short Films
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in captivating stories, unforgettable characters, and binge-worthy series 
                that will keep you coming back for more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Continue Watching */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Continue Watching
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentlyWatching.map((show, index) => (
                <motion.div
                  key={show.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden hover:shadow-card-cinema transition-all duration-300 group cursor-pointer">
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                        <div 
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${show.progress}%` }}
                        />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {show.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {show.episode}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Genre */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse by Genre
              </h2>
              <p className="text-lg text-muted-foreground">
                Find your perfect show across all genres
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {genre.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {genre.trending}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {genre.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <SpotlightSection items={spotlightShows} />

        {/* Featured Shows Grid */}
        <ContentGrid 
          title="Featured Shows"
          items={featuredShows}
          showRating={true}
        />

        {/* Show Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Tv, label: "Total Shows", value: "580+" },
                { icon: Star, label: "Avg Rating", value: "4.7" },
                { icon: Calendar, label: "New This Week", value: "12" },
                { icon: Users, label: "Total Views", value: "1.2B" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Coming This Fall
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Exciting New Series Premiering Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get ready for our biggest lineup yet with original series, international hits, 
                  and exclusive premieres coming to Film World.
                </p>
                <Button variant="cinema" size="lg">
                  See Full Schedule
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-muted/20 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              New episodes added weekly • Stream unlimited with Film World subscription
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shows;
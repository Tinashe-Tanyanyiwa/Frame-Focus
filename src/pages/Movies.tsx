import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Film, Star, Calendar, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContentGrid from "@/components/ContentGrid";
import SpotlightSection from "@/components/SpotlightSection";
import contentGrid from "@/assets/content-grid.jpg";
import heroThriller from "@/assets/hero-thriller.jpg";
import walkOfFame from "@/assets/walkOfFame.png";

const Movies = () => {
  const featuredMovies = [
    {
      id: "movie-1",
      title: "Walk of Fame",
      category: "Comedy",
      date: "Mar 24, 2017",
      readTime: "1h 33m",
      rating: 3.1,
      imageSrc: walkOfFame,
      description: "A motley crew of aspiring performers come under the guidance of an eccentric and volatile acting coach."
    },
    {
      id: "movie-2",
      title: "The Digital Heist", 
      category: "Cyber Thriller",
      date: "Sep 3, 2025",
      readTime: "1h 47m",
      rating: 4.7,
      imageSrc: contentGrid,
      description: "A group of hackers attempt the impossible - stealing from the most secure digital vault in the world while staying ahead of authorities."
    },
    {
      id: "movie-3",
      title: "Midnight in Paris",
      category: "Romantic Comedy",
      date: "Aug 29, 2025",
      readTime: "1h 32m",
      rating: 4.6,
      imageSrc: contentGrid,
      description: "Two strangers meet at a 24-hour cafe in Paris and embark on an unexpected journey through the city of lights that changes their lives forever."
    },
    {
      id: "movie-4",
      title: "The Last Frontier",
      category: "Space Drama",
      date: "Aug 22, 2025", 
      readTime: "2h 05m",
      rating: 4.9,
      imageSrc: contentGrid,
      description: "Humanity's final mission to find a new home among the stars becomes a test of courage, sacrifice, and the unbreakable bonds of family."
    },
    {
      id: "movie-5",
      title: "Underground Kings",
      category: "Crime Drama",
      date: "Aug 15, 2025",
      readTime: "2h 12m",
      rating: 4.5,
      imageSrc: contentGrid,
      description: "The rise and fall of an underground empire, told through the eyes of those who built it and those who brought it down."
    },
    {
      id: "movie-6",
      title: "Ocean's Call",
      category: "Adventure Documentary", 
      date: "Aug 8, 2025",
      readTime: "1h 38m",
      rating: 4.8,
      imageSrc: contentGrid,
      description: "Follow marine biologists as they discover new species in the deepest parts of our oceans and fight to protect these fragile ecosystems."
    }
  ];

  const spotlightMovies = [
    {
      id: "spot-movie-1",
      title: "Blockbuster Movies Now Streaming",
      subtitle: "The biggest films of the year, now on Film World",
      description: "From action-packed adventures to heartwarming dramas, watch the movies that defined cinema this year from the comfort of your home.",
      imageSrc: heroThriller,
      category: "BLOCKBUSTERS",
      featured: true
    },
    {
      id: "spot-movie-2",
      title: "Award Winners",
      subtitle: "Critically acclaimed cinema",
      description: "Experience the films that swept awards season.",
      imageSrc: contentGrid,
      category: "AWARDS"
    },
    {
      id: "spot-movie-3",
      title: "Independent Films",
      subtitle: "Unique voices, powerful stories",
      description: "Discover bold storytelling from independent filmmakers.",
      imageSrc: contentGrid,
      category: "INDIE"
    },
    {
      id: "spot-movie-4",
      title: "International Cinema",
      subtitle: "Stories from around the world",
      description: "Acclaimed films from global directors and cultures.",
      imageSrc: contentGrid,
      category: "WORLD CINEMA"
    }
  ];

  const movieGenres = [
    { name: "Action", count: "89 movies", boxOffice: "$2.1B", trending: "+12%" },
    { name: "Drama", count: "156 movies", boxOffice: "$1.8B", trending: "+8%" },
    { name: "Comedy", count: "92 movies", boxOffice: "$980M", trending: "+15%" },
    { name: "Thriller", count: "67 movies", boxOffice: "$1.2B", trending: "+22%" },
    { name: "Sci-Fi", count: "45 movies", boxOffice: "$1.5B", trending: "+18%" },
    { name: "Romance", count: "78 movies", boxOffice: "$650M", trending: "+10%" },
    { name: "Horror", count: "34 movies", boxOffice: "$890M", trending: "+25%" },
    { name: "Documentary", count: "123 movies", boxOffice: "$340M", trending: "+20%" }
  ];

  const recentlyWatched = [
    { title: "Crimson Hearts", rating: 4.8, watched: "2 days ago" },
    { title: "Digital Heist", rating: 4.7, watched: "5 days ago" },
    { title: "Midnight Paris", rating: 4.6, watched: "1 week ago" },
    { title: "Last Frontier", rating: 4.9, watched: "2 weeks ago" }
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
                <Film className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Movies
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the magic of cinema with our vast collection of blockbusters, indie gems, 
                international films, and award-winning masterpieces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recently Watched */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recently Watched
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyWatched.map((movie, index) => (
                <motion.div
                  key={movie.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Film className="h-12 w-12 text-primary/60" />
                    </div>
                    <div className="absolute top-2 right-2 flex items-center bg-black/70 px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs text-white">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {movie.watched}
                    </p>
                  </div>
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
                Discover movies across every genre and mood
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {movieGenres.map((genre, index) => (
                <motion.div
                  key={genre.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {genre.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {genre.trending}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {genre.count}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {genre.boxOffice} total earnings
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <SpotlightSection items={spotlightMovies} />

        {/* Featured Movies Grid */}
        <ContentGrid 
          title="Featured Movies"
          items={featuredMovies}
          showRating={true}
        />

        {/* Movie Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Film, label: "Total Movies", value: "1,200+" },
                { icon: Star, label: "Avg Rating", value: "4.6" },
                { icon: Award, label: "Award Winners", value: "180" },
                { icon: Clock, label: "Total Runtime", value: "2,400h" }
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

        {/* Coming to Theaters */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Coming Soon to Film World
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  New Movie Releases Every Week
                </h3>
                <p className="text-muted-foreground mb-6">
                  From theatrical releases to Film World originals, discover new movies 
                  added to our library every Friday.
                </p>
                <Button variant="cinema" size="lg">
                  See Release Calendar
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-muted/20 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              New movies added weekly • Stream in 4K with Film World Premium
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
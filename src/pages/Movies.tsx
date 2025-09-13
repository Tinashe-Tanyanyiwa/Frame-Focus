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
import thrashBoogie from "@/assets/thrashBoogie.png";
import frankAndFearless from "@/assets/frankAndFearless.png";
import hillWalkers from "@/assets/hillWalkers.png";
import Ingenium from "@/assets/Ingenium.png";
import tabooFamilySecrets from "@/assets/tabooFamilySecrets.png";
import beastNoMore from "@/assets/beastNoMore.png";
import realmOfShadows from "@/assets/realmOfShadows.png";
import badBloodTheMovie from "@/assets/badBloodTheMovie.png";
import blueCall from "@/assets/blueCall.png";
import aMiracleInSpanishHarlem from "@/assets/aMiracleInSpanishHarlem.jpg";
import anitaB from "@/assets/anitaB.jpg";
import thankYouForJudging from "@/assets/thankYouForJudging.jpg"
import slingBlade from "@/assets/slingBlade.jpg"
import  gangsterExchange from "@/assets/gangsterExchange.jpg"

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
      description:
        "A motley crew of aspiring performers come under the guidance of an eccentric and volatile acting coach.",
    },
    {
      id: "movie-2",
      title: "A Miracle in Spanish Harlem",
      category: "Drama",
      date: "Dec 6, 2013",
      readTime: "1h 34m",
      rating: 8.1,
      imageSrc: aMiracleInSpanishHarlem,
      description:
        "A Miracle in Spanish Harlem is a humorous and magical story of love, sin, faith and redemption, which begins with a hoax, and ends with a surprising true miracle.",
    },
    {
      id: "movie-3",
      title: "Anita B",
      category: "Movie",
      date: "Jan 16, 2014",
      readTime: "1h 28m",
      rating: 5.6,
      imageSrc: anitaB,
      description:
        "Immediately after WWII, Anita, a young survivor of Auschwitz, looks at the world with worried eyes. She quickly finds herself involved in an intense and passionate affair that almost shatters her, but eventually gives her the strength to rebel and start a new life.",
    },
    {
      id: "movie-4",
      title: "Thank You for Judging ",
      category: "Movie",
      date: "Oct 22, 2011",
      readTime: "1h 31m",
      rating: 4.7,
      imageSrc: thankYouForJudging,
      description:
        "Filmmakers Sean Fornara and Michael Urie travel back to their hometowns in Texas to chronicle the mother of all Speech and Debate Tournaments - TFA State.",
    },
    {
      id: "movie-5",
      title: "Sling Blade",
      category: "Drama",
      date: "1996 ",
      readTime: "2h 15m",
      rating: 8.0,
      imageSrc: slingBlade,
      description:
        "A powerful drama about a man with a troubled past who forms an unlikely friendship in a small town.",
    },
    {
      id: "movie-6",
      title: "Gangster Exchange",
      category: "Action/Thriller",
      date: "2010",
      readTime: "1h 32m",
      rating: 8.8,
      imageSrc: gangsterExchange,
      description:
        "Hiro and Marco are caught in a mob war in New York when they are asked to smuggle a 50-pound toilet made of pure heroin. Will they succeed in their attempts?",
    },
  ];

  const spotlightMovies = [
    {
      id: "spot-movie-1",
      title: "Blockbuster Movies Now Streaming",
      subtitle: "The biggest films of the century, now on Film World",
      description:
        "From action-packed adventures to heartwarming dramas, watch the movies that defined cinema this year from the comfort of your home.",
      imageSrc: beastNoMore,
      category: "BLOCKBUSTERS",
      featured: true,
    },
    {
      id: "spot-movie-2",
      title: "Realm of shadows",
      subtitle: "Critically acclaimed cinema",
      description: "Experience the films that swept awards season.",
      imageSrc: realmOfShadows,
      category: "AWARDS",
    },
    {
      id: "spot-movie-3",
      title: "Bad Blood The Movie",
      subtitle: "Unique voices, powerful stories",
      description: "Discover bold storytelling from independent filmmakers.",
      imageSrc: badBloodTheMovie,
      category: "INDIE",
    },
    {
      id: "spot-movie-4",
      title: "Blue Call",
      subtitle: "Stories from around the world",
      description: "Acclaimed films from global directors and cultures.",
      imageSrc: blueCall,
      category: "WORLD CINEMA",
    },
  ];

  const movieGenres = [
    {
      name: "Action",
      count: "89 movies",
      boxOffice: "$2.1B",
      trending: "+12%",
    },
    { name: "Drama", count: "156 movies", boxOffice: "$1.8B", trending: "+8%" },
    {
      name: "Comedy",
      count: "92 movies",
      boxOffice: "$980M",
      trending: "+15%",
    },
    {
      name: "Thriller",
      count: "67 movies",
      boxOffice: "$1.2B",
      trending: "+22%",
    },
    {
      name: "Sci-Fi",
      count: "45 movies",
      boxOffice: "$1.5B",
      trending: "+18%",
    },
    {
      name: "Romance",
      count: "78 movies",
      boxOffice: "$650M",
      trending: "+10%",
    },
    {
      name: "Horror",
      count: "34 movies",
      boxOffice: "$890M",
      trending: "+25%",
    },
    {
      name: "Documentary",
      count: "123 movies",
      boxOffice: "$340M",
      trending: "+20%",
    },
  ];

  const recentlyWatched = [
    {
      title: "Frank & Fearless",
      rating: 5.4,
      watched: "2 days ago",
      imageSrc: frankAndFearless,
    },
    {
      title: "Hill Walkers",
      rating: 4.3,
      watched: "5 days ago",
      imageSrc: hillWalkers,
    },
    {
      title: "Ingenium",
      rating: 4.8,
      watched: "1 week ago",
      imageSrc: Ingenium,
    },
    {
      title: "Taboo: Family Secrets",
      rating: 6.8,
      watched: "2 weeks ago",
      imageSrc: tabooFamilySecrets,
    },
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
                Experience the magic of cinema with our vast collection of
                blockbusters, indie gems, international films, and award-winning
                masterpieces.
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
              Recently Added
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
                      {/* <Film className="h-12 w-12 text-primary/60" /> */}
                      <img
                        src={movie.imageSrc}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
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
                { icon: Star, label: "Avg Rating", value: "6.4" },
                { icon: Award, label: "Award Winners", value: "180" },
                { icon: Clock, label: "Total Runtime", value: "2,400h" },
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
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
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
                  From theatrical releases to Film World originals, discover new
                  movies added to our library every Friday.
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

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
import lethalogica from "@/assets/lethalogica.jpg";
import tabooFamilySecrets from "@/assets/tabooFamilySecrets.png";
import charliChaplinPawnShop from "@/assets/charliChaplinPawnShop.png";
import disorderInTheCourt from "@/assets/disorderInTheCourt.png";
import gruffAndMe from "@/assets/grufAndMe.jpg";
import barkingOrders from "@/assets/barkingOrders.jpg";
import aTripToTheMoon from "@/assets/aTripToTheMoon.jpg";
import blackGirlInParis from "@/assets/blackGirlInParis.jpg";
import mute from "@/assets/mute.png";
import theBlueDrum from "@/assets/theBlueDrum.png";
import firecracker from "@/assets/firecracker.jpg";
import anaarkali from "@/assets/anaarkali.png";
import theNightJaguar from "@/assets/theNightJaguar.png";
import theSongOfHer from "@/assets/theSongOfHer.jpg";
import { link } from "fs";

const Shows = () => {
  const featuredShows = [
    {
      id: "show-1",
      title: "Mute",
      category: "Horror",
      date: "2013",
      readTime: "5m",
      rating: 6.8,
      imageSrc: mute,
      description:
        "A boy finds a doll on the road. Strange supernatural events begin to unfold around him.",
    },
    {
      id: "show-2",
      title: "The blue drum",
      category: "Horror",
      date: "2022",
      readTime: "17m",
      rating: 4.4,
      imageSrc: theBlueDrum,
      description:
        "A woman mourning her father's passing is tormented by memories of a mother she never knew. A presence reveals secrets hidden within her family home.",
    },
    {
      id: "show-3",
      title: "Firecracker",
      category: "Drama/Comedy/Romance",
      date: "2022",
      readTime: "15m",
      rating: 6.4,
      imageSrc: firecracker,
      description:
        "On the night of their anniversary, a Chinese woman must decide whether to keep her Asian-American girlfriend a secret from her traditional family with the upcoming Chinese New Year or live out her dream as her true self.",
    },
    {
      id: "show-4",
      title: "Anaarkali",
      category: "Drama",
      date: "2019",
      readTime: "25m",
      rating: 8.9,
      imageSrc: anaarkali,
      description:
        "Inspired by the Indian legend of the slave girl who becomes the King's favorite concubine, only to fall in love with his son, Anaarkali is the story of Simran, the mistress of powerful and corrupt Mumbai businessman Rashid Bhai. Simran dreams of being a Bollywood star, but when she falls for Rashid's employee Arjun, she tempts the fates at the risk of both their lives. In a city of extremes, it is only through love that she finds salvation.",
    },
    {
      id: "show-5",
      title: "The Night Jaguar",
      category: "Short",
      date: "2023",
      readTime: "9m",
      rating: 4.9,
      imageSrc: theNightJaguar,
      description:
        "a 2023 short film directed by Robert Zimmer Jr., written by Zimmer Jr. and Matthew Halterman, and produced by Deeper Magic Communications",
    },
    {
      id: "show-6",
      title: "The Song Of Her",
      category: "Sci-Fi",
      date: "2019",
      readTime: "20m",
      rating: 4.8,
      imageSrc: theSongOfHer,
      description:
        "The Song of Her is a love story that lives in an alternate universe. We follow a tortured pipe organist (Flora) who tries to drown out the sound of a world war while working for a secret society (GODA) of ruthless women.",
    },
  ];

  const spotlightShows = [
    {
      id: "spot-show-1",
      title: "Short-Films",
      subtitle: "The best shows streaming now on Film World",
      description:
        "From gripping dramas to laugh-out-loud comedies, discover the short films that are defining this generation of storytelling.",
      imageSrc: lethalogica,
      category: "BINGE-WORTHY",
      featured: true,
    },
    {
      id: "spot-show-2",
      title: "Gruf and Me",
      subtitle: "Fresh content every week",
      description:
        "Stay up to date with ongoing short films and never miss a new release.",
      imageSrc: gruffAndMe,
      category: "RATED",
    },
    {
      id: "spot-show-3",
      title: "A Trip To The Moon",
      subtitle: "Complete stories in one sitting",
      description:
        "Perfect self-contained narratives you can finish in a small period.",
      imageSrc: aTripToTheMoon,
      category: "SHORT FILMS",
    },
    {
      id: "spot-show-4",
      title: "Black Girl in Paris",
      subtitle: "Global, universal appeal",
      description:
        "Acclaimed short films from around the world that transcend language barriers.",
      imageSrc: blackGirlInParis,
      category: "GLOBAL",
    },
  ];

  const genres = [
    { name: "Drama", count: "145 shows", trending: "+15%" },
    { name: "Comedy", count: "89 shows", trending: "+8%" },
    { name: "Thriller", count: "76 shows", trending: "+22%" },
    { name: "Sci-Fi", count: "54 shows", trending: "+18%" },
    { name: "Documentary", count: "92 shows", trending: "+12%" },
    { name: "Horror", count: "38 shows", trending: "+25%" },
    { name: "Romance", count: "67 shows", trending: "+10%" },
    { name: "Action", count: "71 shows", trending: "+14%" },
  ];

  const currentlyWatching = [
    {
      title: "The Pawnshop",
      progress: 1,
      episode: "25m",
      imageSrc: charliChaplinPawnShop,
      link: "https://redcoraluniverse.com/en/movies/charlie-chaplin's-the-pawnshop-67c9b9a3553ea379b712c7a6?ccId=6796a961115e3f20ba4065f5",
    },
    {
      title: "Disorder in the court",
      progress: 1,
      episode: "17m",
      imageSrc: disorderInTheCourt,
      link: "https://redcoraluniverse.com/en/movies/disorder-in-the-court-679c9b051060be9d3ca2c317?ccId=67d04815b956ad93adf5d25c",
    },
    {
      title: "Lethalogica",
      progress: 1,
      episode: "6m",
      imageSrc: lethalogica,
      link: "#",
    },
    {
      title: "Barking Orders",
      progress: 1,
      episode: "2m",
      imageSrc: barkingOrders,
      link: "#",
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
                <Tv className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Short Films
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in captivating stories, unforgettable
                characters, and stream short films that will keep you coming
                back for more.
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
              What To Watch
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
                      <img
                        src={show.imageSrc}
                        alt={show.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
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
                  <p className="text-sm text-muted-foreground">{genre.count}</p>
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
                { icon: Users, label: "Total Views", value: "1.2B" },
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
                  Get ready for our biggest lineup yet with original series,
                  international hits, and exclusive premieres coming to Film
                  World.
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
              New episodes added weekly • Stream unlimited with Film World
              subscription
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shows;

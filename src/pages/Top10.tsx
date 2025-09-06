import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { TrendingUp, Star, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import contentGrid from "@/assets/content-grid.jpg";
import battleofDurango from "@/assets/battleofDurango.jpg";
import slingBlade from "@/assets/slingBlade.jpg";
import vendetta from "@/assets/vendetta.jpg";
import sapioSexual from "@/assets/sapioSexual.jpg"

const Top10 = () => {
  const top10Items = [
    {
      rank: 1,
      title: "Battle of Durango",
      category: "Sports Event",
      genre: "Mountain Biking",
      viewTime: "8.2M hours",
      description:
        "The first World Mountain Bike Championships held in 1990, showcasing international talent in a thrilling competition.",
      rating: 9.1,
      episodes: "6 hours",
      year: "1990",
      imageSrc: battleofDurango,
    },
    {
      rank: 2,
      title: "Sling Blade",
      category: "Movie",
      genre: "Drama",
      viewTime: "7.8M hours",
      description:
        "A powerful drama about a man with a troubled past who forms an unlikely friendship in a small town.",
      rating: 8.0,
      episodes: "2h 15min",
      year: "1996",
      imageSrc: slingBlade,
    },
    {
      rank: 3,
      title: "Vendetta",
      category: "Movie",
      genre: "Action/Thriller",
      viewTime: "6.5M hours",
      description:
        "When his daughter is brutally murdered and legal justice seems unlikely, William Duncan takes the law into his own hands and sets out on a quest for retribution.",
      rating: 8.7,
      episodes: "1h 36min",
      year: "2022",
      imageSrc: vendetta,
    },
    {
      rank: 4,
      title: "Sapiosexual",
      category: "Movie",
      genre: "Thriller",
      viewTime: "5.9M hours",
      description:
        "Three people who are tangled in secrets and dark ties to each other's past gather for an uncoupling celebration.",
      rating: 8.5,
      episodes: "1h 27m",
      year: "2023",
      imageSrc: sapioSexual,
    },
    {
      rank: 5,
      title: "The Digital Conspiracy",
      category: "Movie",
      genre: "Sci-Fi Thriller",
      viewTime: "5.2M hours",
      description:
        "A tech whistleblower uncovers a massive conspiracy in Silicon Valley",
      rating: 8.3,
      episodes: "1h 47m",
      year: "2025",
      imageSrc: battleofDurango,
    },
    {
      rank: 6,
      title: "Family Reunion",
      category: "TV Series",
      genre: "Comedy",
      viewTime: "4.8M hours",
      description:
        "A dysfunctional family comes together for unexpected adventures",
      rating: 8.1,
      episodes: "12 episodes",
      year: "2025",
      imageSrc: battleofDurango,
    },
    {
      rank: 7,
      title: "Ocean's Depths",
      category: "Documentary",
      genre: "Nature",
      viewTime: "4.3M hours",
      description:
        "Explore the mysterious creatures living in Earth's deepest waters",
      rating: 8.8,
      episodes: "5 episodes",
      year: "2025",
      iimageSrc: battleofDurango,
    },
    {
      rank: 8,
      title: "Street Chronicles",
      category: "TV Series",
      genre: "Crime Drama",
      viewTime: "3.9M hours",
      description:
        "Follow detectives as they solve complex cases in urban environments",
      rating: 8.0,
      episodes: "10 episodes",
      year: "2025",
      imageSrc: battleofDurango,
    },
    {
      rank: 9,
      title: "Midnight Cafe",
      category: "Movie",
      genre: "Romantic Comedy",
      viewTime: "3.5M hours",
      description:
        "Two strangers meet at a 24-hour cafe and change each other's lives",
      rating: 7.9,
      episodes: "1h 32m",
      year: "2025",
      imageSrc: battleofDurango,
    },
    {
      rank: 10,
      title: "The Innovators",
      category: "Documentary Series",
      genre: "Biography",
      viewTime: "3.1M hours",
      description:
        "Stories of entrepreneurs who changed the world with their innovations",
      rating: 8.4,
      episodes: "8 episodes",
      year: "2025",
      imageSrc: battleofDurango,
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
                <TrendingUp className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Top 10 on Frame Focus
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover what everyone's watching this week. Our Top 10 list
                features the most popular movies, TV shows, and documentaries
                based on viewing hours from Frame Focus members worldwide.
              </p>
              <div className="mt-8 text-sm text-muted-foreground">
                <span className="flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Updated daily • Based on viewing hours from the past 7 days
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top 10 List */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6">
              {top10Items.map((item, index) => (
                <motion.div
                  key={item.rank}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden hover:shadow-card-cinema transition-all duration-500 group">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        {/* Rank Number */}
                        <div className="bg-primary/10 flex items-center justify-center lg:w-32 p-8 lg:p-0">
                          <span className="text-6xl lg:text-8xl font-bold text-primary">
                            {item.rank}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="lg:w-80 aspect-video lg:aspect-square overflow-hidden">
                          <img
                            src={item.imageSrc}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge
                              variant="outline"
                              className="text-primary border-primary/50"
                            >
                              {item.category}
                            </Badge>
                            <Badge variant="secondary">{item.genre}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-6 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-semibold text-foreground">
                                {item.viewTime}
                              </span>
                              <span className="ml-1">viewed</span>
                            </div>

                            <div className="flex items-center text-muted-foreground">
                              <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                              <span className="font-semibold text-foreground">
                                {item.rating}
                              </span>
                              <span className="ml-1">rating</span>
                            </div>

                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span>{item.episodes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-muted/20 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              Rankings based on viewing hours from Frame Focus members worldwide
              • Updated daily
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Top10;

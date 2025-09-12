import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Flame, Star, TrendingUp, Users } from "lucide-react";
import ContentGrid from "@/components/ContentGrid";
import SpotlightSection from "@/components/SpotlightSection";
import contentGrid from "@/assets/content-grid.jpg";
import heroThriller from "@/assets/hero-thriller.jpg";
import theLastHouseStanding from "@/assets/theLastHouseStanding.jpg";
import thrashBoogie from "@/assets/thrashBoogie.png";
import kilioChetu from "@/assets/kiliochetu.png";
import floatLikeAButterfly from "@/assets/floatLikeAButterfly.jpg";
import littleUkraine from "@/assets/littleUkraine.png";
import johnDoe from "@/assets/johnDoe.png";
import randomShootingInLA from "@/assets/randomShootingInLA.png";
import peaceRiver from "@/assets/peaceRiver.png";
import gangsterExchange from "@/assets/gangsterExchange.png";
const Trending = () => {
  const trendingContent = [
    {
      id: "trend-1",
      title: "The Last House Standing",
      category: "Documentary",
      date: "Nov 15, 2020",
      readTime: "57m",
      rating: 9.6,
      imageSrc: theLastHouseStanding,
      description:
        "A documentary about climate change and how, despite our materials to build sturdy infrastructure, storms and worse are destroying homes everywhere.",
    },
    {
      id: "trend-2",
      title: "Marc Rizzo - Thrash Boogie ",
      category: "Song",
      date: "Mar 30, 2018",
      readTime: "5m",
      rating: 8.9,
      imageSrc: thrashBoogie,
      description:
        "Instrumental guitar track by Marc Rizzo, known for his work in Soulfly and Cavalera Conspiracy, released in 2018 on his album Rotation.",
    },
    {
      id: "trend-3",
      title: "Kilio Chetu",
      category: "Short Film",
      date: "Aug, 2024",
      readTime: "6m",
      rating: 5.0,
      imageSrc: kilioChetu,
      description:
        "Almost one in two African women has experienced violence at some point during her life. But perpetrators silence their victims by saying the woman is to blame — or that she provoked the abuse. How can this change?",
    },
    {
      id: "trend-4",
      title: "Float Like a Butterfly",
      category: "Movie",
      date: "Sep 7, 2018",
      readTime: "1h 44m",
      rating: 5.9,
      imageSrc: floatLikeAButterfly,
      description:
        "From the producers of Once and Sing Street, Float Like a Butterfly is a powerful, timely story of a girl's fight for freedom and belonging. In a gender-reversal of the classic film Billy Elliott, 15-year-old Frances must fight for the right to fight back. Raised in roadside camps in rural Ireland, Frances wants to champion her people inside the boxing ring and out, like her idol Muhammad Ali. But society is determined to break her spirit and destroy her way of life. And her father, once her greatest ally, is too defeated himself to imagine anything better for his daughter. But Frances was not born to be broken. In the mother of all fights, she must dig deep to find in herself the Champion her father once knew her to be.",
    },
    {
      id: "trend-5",
      title: "Little Ukraine",
      category: "Movie",
      date: "Aug 16, 2022",
      readTime: "1h 30m",
      rating: 4.0,
      imageSrc: littleUkraine,
      description:
        "Little Ukraine is an unfolding crime drama (set in Little Ukraine NYC ) that ties the past and present hopes and dreams of a Ukrainian Jewish immigrant family as they navigate their new found lives in America. From the complexity of familial pitfalls one generation to the next to the wide eyed optimism of a father's hopes and wishes for his son's future colliding with his own disappointments. The immigrant story is relevant, alive and dynamic as our characters struggle to grasp their ever evolving American Dream.",
    },
    {
      id: "trend-6",
      title: "Meet John Doe",
      category: "Movie",
      date: "Mar 12, 1941",
      readTime: "2h 15m",
      rating: 7.6,
      imageSrc: johnDoe,
      description:
        "A penniless drifter is recruited by an ambitious columnist to impersonate a non-existent person who said he'd be committing suicide as a protest, and a social movement begins.",
    },
  ];

  const spotlightTrending = [
    {
      id: "spot-trend-1",
      title: "What's Trending This Week",
      subtitle: "The hottest content everyone's talking about",
      description:
        "From viral moments to breakthrough performances, discover what's capturing audiences worldwide and driving conversations across social media.",
      imageSrc: kilioChetu,
      category: "WEEKLY HIGHLIGHTS",
      featured: true,
    },
    {
      id: "spot-trend-2",
      title: "Random Shooting In LA",
      subtitle: "Scenes that broke the internet",
      description:
        "The most shared, memed, and discussed moments from good releases.",
      imageSrc: randomShootingInLA,
      category: "VIRAL",
    },
    {
      id: "spot-trend-3",
      title: "Peace River",
      subtitle: "Breakout performances to watch",
      description: "Talent making waves with unforgettable performances.",
      imageSrc: peaceRiver,
      category: "BREAKOUT",
    },
    {
      id: "spot-trend-4",
      title: "Gangster Exchange",
      subtitle: "Content crossing all borders",
      description: "Shows and movies creating worldwide cultural impact.",
      imageSrc: gangsterExchange,
      category: "GLOBAL",
    },
  ];

  const trendingStats = [
    { label: "Total Views This Week", value: "21M", icon: Users },
    { label: "Trending Topics", value: "147", icon: Flame },
    { label: "Countries Reached", value: "190", icon: TrendingUp },
    { label: "Social Mentions", value: "89M", icon: Star },
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
                <Flame className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Trending Now
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with the hottest content, viral moments,
                and cultural phenomena that are shaping conversations worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trending Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-card-cinema transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <SpotlightSection items={spotlightTrending} />

        {/* Trending Content Grid */}
        <ContentGrid
          title="What's Trending"
          items={trendingContent}
          showRating={true}
        />

        {/* Trending Categories */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trending Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore what's hot across different genres and formats
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Thriller Series",
                  trend: "+340%",
                  description: "Psychological dramas dominating charts",
                },
                {
                  title: "International Films",
                  trend: "+220%",
                  description: "Global cinema breaking barriers",
                },
                {
                  title: "True Crime Docs",
                  trend: "+180%",
                  description: "Real stories captivating audiences",
                },
                {
                  title: "Sci-Fi Adventures",
                  trend: "+150%",
                  description: "Futuristic narratives on the rise",
                },
                {
                  title: "Comedy Specials",
                  trend: "+120%",
                  description: "Laughter therapy trending worldwide",
                },
                {
                  title: "Historical Dramas",
                  trend: "+95%",
                  description: "Period pieces gaining momentum",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {category.trend}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              Trending data updated every hour • Based on global viewing
              patterns and social engagement
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trending;

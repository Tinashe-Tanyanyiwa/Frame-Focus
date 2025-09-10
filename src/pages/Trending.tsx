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
      title: "Beauty Standards Revolution",
      category: "Cultural Impact",
      date: "Aug 30, 2025",
      readTime: "6 min read",
      rating: 4.7,
      imageSrc: contentGrid,
      description:
        "Beauty in Black sparks global conversations about representation and self-acceptance in modern media.",
    },
    {
      id: "trend-4",
      title: "Streaming Wars Heat Up",
      category: "Industry News",
      date: "Aug 28, 2025",
      readTime: "8 min read",
      rating: 4.6,
      imageSrc: contentGrid,
      description:
        "Film World leads innovation with interactive storytelling and immersive viewing experiences.",
    },
    {
      id: "trend-5",
      title: "International Content Surge",
      category: "Global Trends",
      date: "Aug 25, 2025",
      readTime: "5 min read",
      rating: 4.8,
      imageSrc: contentGrid,
      description:
        "Non-English content dominates viewership as global audiences embrace diverse storytelling.",
    },
    {
      id: "trend-6",
      title: "Creator Economy Boom",
      category: "Behind the Scenes",
      date: "Aug 22, 2025",
      readTime: "7 min read",
      rating: 4.5,
      imageSrc: contentGrid,
      description:
        "Independent creators find new opportunities on streaming platforms, revolutionizing content creation.",
    },
  ];

  const spotlightTrending = [
    {
      id: "spot-trend-1",
      title: "What's Trending This Week",
      subtitle: "The hottest content everyone's talking about",
      description:
        "From viral moments to breakthrough performances, discover what's capturing audiences worldwide and driving conversations across social media.",
      imageSrc: heroThriller,
      category: "WEEKLY HIGHLIGHTS",
      featured: true,
    },
    {
      id: "spot-trend-2",
      title: "Viral Moments",
      subtitle: "Scenes that broke the internet",
      description:
        "The most shared, memed, and discussed moments from recent releases.",
      imageSrc: contentGrid,
      category: "VIRAL",
    },
    {
      id: "spot-trend-3",
      title: "Rising Stars",
      subtitle: "Breakout performances to watch",
      description: "New talent making waves with unforgettable performances.",
      imageSrc: contentGrid,
      category: "BREAKOUT",
    },
    {
      id: "spot-trend-4",
      title: "Global Phenomena",
      subtitle: "Content crossing all borders",
      description: "Shows and movies creating worldwide cultural impact.",
      imageSrc: contentGrid,
      category: "GLOBAL",
    },
  ];

  const trendingStats = [
    { label: "Total Views This Week", value: "2.1B", icon: Users },
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

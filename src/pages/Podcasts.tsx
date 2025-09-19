import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Mic, Play, Users, Clock, Download, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ContentGrid from "@/components/ContentGrid";
import contentGrid from "@/assets/content-grid.jpg";
import maino from "@/assets/maino.png";
import kalenChase from "@/assets/kalenChase.jpg";
import devinWhite from "@/assets/devinWhite.jpg";
import paysonMeistrich from "@/assets/paysonMeistrich.jpeg";
import rockRockRock from "@/assets/rockRockRock.jpg";
import librence from "@/assets/librence.jpg";
import nashville from "@/assets/nashville.jpg";

const Podcasts = () => {
  const featuredPodcasts = [
    {
      id: "podcast-1",
      title: "Rock, Rock, Rock!",
      category: "Drama/Music",
      date: "1956",
      readTime: "1h 25m",
      rating: 5.0,
      imageSrc: rockRockRock,
      description:
        "Dori is trying to get together enough money to buy a strapless gown; Daddy has cut off Dori's allowance, but gee, she's gotta go to the prom.",
    },
    {
      id: "podcast-2",
      title: "Liberace: the World's Greatest Showman",
      category: "Musical/Film",
      date: "2017",
      readTime: "1h 45m",
      rating: 6.8,
      imageSrc: librence,
      description:
        "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
    },
    {
      id: "podcast-3",
      title: "Nashville's Next Best of 3",
      category: "Music",
      date: "2021",
      readTime: "2h",
      rating: 5.9,
      imageSrc: nashville,
      description:
        "Nashville's Next Best Of 3 is a new fun style of songwriting show featuring 27 new artist / songwriters. This show takes the audience intimately on the journey of writing and creating a song to the end result.",
    },
    {
      id: "podcast-4",
      title: "The Binge Report",
      category: "Reviews & Analysis",
      date: "Weekly Episodes",
      readTime: "25 min avg",
      rating: 4.6,
      imageSrc: contentGrid,
      description:
        "Your weekly guide to what's worth binging, featuring reviews, recommendations, and insider takes on trending content.",
    },
    {
      id: "podcast-5",
      title: "Innovators & Visionaries",
      category: "Biography",
      date: "Monthly Episodes",
      readTime: "60 min avg",
      rating: 4.8,
      imageSrc: contentGrid,
      description:
        "Long-form conversations with industry pioneers who are shaping the future of entertainment and technology.",
    },
    {
      id: "podcast-6",
      title: "Fan Theories & Deep Dives",
      category: "Fan Community",
      date: "Twice Weekly",
      readTime: "40 min avg",
      rating: 4.5,
      imageSrc: contentGrid,
      description:
        "Join passionate fans as they explore theories, easter eggs, and hidden meanings in your favorite shows and movies.",
    },
  ];

  const podcastCategories = [
    { name: "Entertainment", shows: "12 shows", listeners: "2.1M" },
    { name: "Technology", shows: "8 shows", listeners: "890K" },
    { name: "Culture & Society", shows: "15 shows", listeners: "1.5M" },
    { name: "Behind the Scenes", shows: "6 shows", listeners: "1.8M" },
    { name: "Reviews & Analysis", shows: "10 shows", listeners: "1.2M" },
    { name: "Fan Community", shows: "9 shows", listeners: "950K" },
    { name: "Biography & Interviews", shows: "7 shows", listeners: "1.1M" },
    { name: "Educational", shows: "11 shows", listeners: "780K" },
  ];

  const currentlyListening = [
    {
      title: "Maino",
      progress: 1,
      timeLeft: "American rapper and radio personality",
      imageSrc: maino,
    },
    {
      title: "Kalen Chase",
      progress: 1,
      timeLeft: "Rock n Roll",
      imageSrc: kalenChase,
    },
    {
      title: "Devin White",
      progress: 1,
      timeLeft: "R&B singer",
      imageSrc: devinWhite,
    },
    {
      title: "Payson Meistrich",
      progress: 1,
      timeLeft: "Singer",
      imageSrc: paysonMeistrich,
    },
  ];

  const topEpisodes = [
    {
      title: "Lucinda's Thriller Flash Mob Compilation",
      podcast: "All Ages",
      duration: "6m",
      plays: "1.2M",
      date: "2024",
    },
    {
      title: "Saigon's Ol Skool Moves Flash Mob",
      podcast: "All Ages",
      duration: "2m",
      plays: "890K",
      date: "2023",
    },
    {
      title: "Lucinda's Leave Your Hat On Flash Mob - with Sweet Voodoo",
      podcast: "All Ages",
      duration: "5m",
      plays: "750K",
      date: "2024",
    },
    {
      title: "Lucinda's Freedom 4th of July Flash Mob",
      podcast: "All Ages",
      duration: "4m",
      plays: "680K",
      date: "2022",
    },
    {
      title: "Lucinda's Footloose Flash Mob",
      podcast: "All Ages",
      duration: "5m",
      plays: "680K",
      date: "2020",
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
                <Mic className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Music & Podcasts
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dive deeper into the world of entertainment with exclusive
                music, podcasts featuring creator interviews, behind-the-scenes
                stories, and expert analysis of your favorite content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Continue Listening */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who To Listen To
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentlyListening.map((podcast, index) => (
                <motion.div
                  key={podcast.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden hover:shadow-card-cinema transition-all duration-300 group cursor-pointer">
                    <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary/5  flex items-center justify-center">
                      <img
                        src={podcast.imageSrc}
                        alt={podcast.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${podcast.progress}%` }}
                        />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1 text-sm">
                        {podcast.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {podcast.timeLeft}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Episodes This Week */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Flash Mobs
              </h2>
              <div className="w-24 h-1 bg-gradient-red rounded-full"></div>
            </motion.div>

            <div className="space-y-4">
              {topEpisodes.map((episode, index) => (
                <motion.div
                  key={episode.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <Card className="bg-card border-border/50 hover:shadow-card-cinema transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl font-bold text-primary mr-4">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                {episode.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {episode.podcast} • {episode.duration} •{" "}
                                {episode.plays} plays
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 ml-6">
                          <span className="text-sm text-muted-foreground">
                            {episode.date}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:bg-primary/10"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                Find podcasts that match your interests
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {podcastCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <Mic className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {category.shows}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {category.listeners} monthly listeners
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Podcasts Grid */}
        <ContentGrid
          title="Music Related Film, TV & Podcasts"
          items={featuredPodcasts}
          showRating={true}
        />

        {/* Podcast Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Mic, label: "Total Shows", value: "78" },
                { icon: Users, label: "Monthly Listeners", value: "12.4M" },
                { icon: Clock, label: "Total Hours", value: "2,500+" },
                { icon: Download, label: "Downloads", value: "45M" },
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

        {/* Listen Anywhere */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Listen Anywhere, Anytime
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Stream or Download for Offline Listening
                </h3>
                <p className="text-muted-foreground mb-6">
                  Access your favorite podcasts on any device. Download episodes
                  for offline listening during commutes, workouts, or travel.
                </p>
                <Button variant="cinema" size="lg">
                  Get the App
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              New episodes added weekly • Ad-free listening with Film World
              Premium
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Podcasts;

import React from "react";
import Navigation from "@/components/Navigation";
import PopularStrip from "@/components/PopularStrip";
import HeroSection from "@/components/HeroSection";
import ContentGrid from "@/components/ContentGrid";
import SpotlightSection from "@/components/SpotlightSection";
import heroThriller from "@/assets/hero-thriller.jpg";
import contentGrid from "@/assets/content-grid.jpg";
import blackRabbit from "@/assets/blackRabbit.jpg";
import wednesday from "@/assets/wednesday.jpg";
import beautyBlack from "@/assets/beautyBlack.jpg";
import futureStreaming from "@/assets/futureStreaming.jpg";
import frameFocus from "@/assets/frameFocus.jpg";
import theArtofCinematography from "@/assets/theArtofCinematography.jpg";
import behindtheStreams from "@/assets/behindtheStreams.jpeg";
import trendingNow from "@/assets/trendingNow.jpeg";
import criticsChoice from "@/assets/criticsChoice.jpg";




const Index = () => {
  // Sample data - in a real app this would come from an API
  const contentItems = [
    {
      id: "1",
      title: "The Mystery of Black Rabbit",
      category: "Thriller",
      date: "Sep 1, 2025",
      readTime: "5 min read",
      rating: 4.8,
      imageSrc: blackRabbit,
      description: "A gripping thriller that follows mysterious events in a small town where nothing is as it seems. Dark secrets emerge as our protagonists uncover the truth."
    },
    {
      id: "2", 
      title: "Wednesday Returns",
      category: "Horror Comedy",
      date: "Aug 30, 2025",
      readTime: "3 min read",
      rating: 4.9,
      imageSrc: wednesday,
      description: "The beloved gothic character returns for another season of dark humor and supernatural mysteries at Nevermore Academy."
    },
    {
      id: "3",
      title: "Beauty in Black",
      category: "Drama",
      date: "Aug 28, 2025", 
      readTime: "4 min read",
      rating: 4.6,
      imageSrc: beautyBlack,
      description: "A powerful drama exploring themes of identity, beauty standards, and self-acceptance in contemporary society."
    },
    {
      id: "4",
      title: "Future of Streaming",
      category: "Documentary",
      date: "Aug 25, 2025",
      readTime: "8 min read", 
      rating: 4.7,
      imageSrc: futureStreaming,
      description: "An in-depth look at how streaming platforms are reshaping entertainment and what the future holds for digital media consumption."
    },
    {
      id: "5",
      title: "Frame Focus Originals",
      category: "Behind the Scenes",
      date: "Aug 20, 2025",
      readTime: "6 min read",
      rating: 4.5,
      imageSrc: frameFocus,
      description: "Go behind the camera to see how Frame Focus is creating original content that pushes the boundaries of storytelling."
    },
    {
      id: "6",
      title: "The Art of Cinematography",
      category: "Education",
      date: "Aug 15, 2025",
      readTime: "10 min read",
      rating: 4.8,
      imageSrc: theArtofCinematography,
      description: "Master the techniques and artistic vision that create stunning visual narratives in modern film and television production."
    }
  ];

  const spotlightItems = [
    {
      id: "spotlight-1",
      title: "New on Frame Focus in September 2025",
      subtitle: "Stream Black Rabbit, plus new seasons of Wednesday, Beauty in Black, and more.",
      description: "Discover the latest additions to our growing catalog of premium content. From gripping thrillers to heartwarming dramas, this month brings an incredible variety of stories that will keep you at the edge of your seat.",
      imageSrc: heroThriller,
      category: "NEW RELEASES",
      featured: true
    },
    {
      id: "spotlight-2", 
      title: "Behind the Streams",
      subtitle: "Exclusive interviews and behind-the-scenes content",
      description: "Get an inside look at your favorite shows and movies with exclusive interviews, behind-the-scenes footage, and creator insights.",
      imageSrc: behindtheStreams,
      category: "EXCLUSIVE"
    },
    {
      id: "spotlight-3",
      title: "Trending Now",
      subtitle: "What everyone's watching this week", 
      description: "Stay up to date with the most popular content on Frame Focus and discover what's capturing audiences worldwide.",
      imageSrc: trendingNow,
      category: "TRENDING"
    },
    {
      id: "spotlight-4",
      title: "Critic's Choice",
      subtitle: "Award-winning content handpicked by experts",
      description: "Explore critically acclaimed films and series that have earned recognition from industry professionals and film festivals.",
      imageSrc: criticsChoice,
      category: "AWARDS"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Popular Strip */}
      <div className="pt-16 lg:pt-20">
        <PopularStrip />
      </div>

      {/* Hero Section */}
      <HeroSection
        title="New on Frame Focus in September 2025"
        subtitle="Stream Black Rabbit, plus new seasons of Wednesday, Beauty in Black, and more."
        description="Discover the latest additions to our growing catalog of premium content. From gripping thrillers to heartwarming dramas, this month brings an incredible variety of stories that will keep you at the edge of your seat."
        imageSrc={heroThriller}
        author="Erin Corbett"
        date="Aug. 31"
        category="NEW ON FRAME FOCUS"
        showPlayButton={true}
      />

      {/* Spotlight Section */}
      <SpotlightSection items={spotlightItems} />

      {/* Latest Articles Grid */}
      <ContentGrid 
        title="Latest Articles & Reviews"
        items={contentItems}
        showRating={true}
      />

      {/* Footer Spacer */}
      <div className="py-20 bg-gradient-to-t from-muted/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Frame Focus. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
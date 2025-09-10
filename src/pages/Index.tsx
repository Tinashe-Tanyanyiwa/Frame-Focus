import React from "react";
import Navigation from "@/components/Navigation";
import PopularStrip from "@/components/PopularStrip";
import HeroSection from "@/components/HeroSection";
import ContentGrid from "@/components/ContentGrid";
import SpotlightSection from "@/components/SpotlightSection";
import heroThriller from "@/assets/hero-thriller.jpg";
import slingBlade from "@/assets/slingBlade.jpg";
import blackRabbit from "@/assets/blackRabbit.jpg";
import wednesday from "@/assets/wednesday.jpg";
import beautyBlack from "@/assets/beautyBlack.jpg";
import futureStreaming from "@/assets/futureStreaming.jpg";
import frameFocus from "@/assets/frameFocus.jpg";
import theArtofCinematography from "@/assets/theArtofCinematography.jpg";
import behindtheStreams from "@/assets/behindtheStreams.jpeg";
import trendingNow from "@/assets/trendingNow.jpeg";
import criticsChoice from "@/assets/criticsChoice.jpg";
import mute from "@/assets/mute.png";
import barkingOrders from "@/assets/barkingOrders.jpg";
import lethalogica from "@/assets/lethalogica.jpg";
import theStandbys from "@/assets/theStandbys.jpg";
import shoulderDown from "@/assets/shoulderDown.jpg";
import theSportsShop from "@/assets/theSportsShop.png";
import gruffAndMe from "@/assets/grufAndMe.jpg";
import aMiracleInSpanishHarlem from "@/assets/aMiracleInSpanishHarlem.jpg";
import anitaB from "@/assets/anitaB.jpg";
import thankYouForJudging from "@/assets/thankYouForJudging.jpg";
import aTripToTheMoon from "@/assets/aTripToTheMoon.jpg";
import blackGirlInParis from "@/assets/blackGirlInParis.jpg";
const Index = () => {
  // Sample data - in a real app this would come from an API
  const contentItems = [
    {
      id: "1",
      title: "Gruf and Me",
      category: "Short Film",
      date: " Jan 1, 2021 ",
      readTime: "9 min",
      rating: 4.8,
      imageSrc: gruffAndMe,
      description:
        "Gruf is a graffiti character that comes to life in animation. Gruf falls in love with the street artist who created him. He desperately tries to find her and discovers that inter-dimensional love is not easy.",
    },
    {
      id: "2",
      title: "A Miracle in Spanish Harlem",
      category: "Movie",
      date: "Dec 6, 2013",
      readTime: "1h 34m",
      rating: 8.1,
      imageSrc: aMiracleInSpanishHarlem,
      description:
        "A Miracle in Spanish Harlem is a humorous and magical story of love, sin, faith and redemption, which begins with a hoax, and ends with a surprising true miracle.",
    },
    {
      id: "3",
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
      id: "4",
      title: "Thank You for Judging",
      category: "Movie",
      date: "Oct 22, 2011",
      readTime: "1h 31m",
      rating: 4.7,
      imageSrc: thankYouForJudging,
      description:
        "Filmmakers Sean Fornara and Michael Urie travel back to their hometowns in Texas to chronicle the mother of all Speech and Debate Tournaments - TFA State.",
    },
    {
      id: "5",
      title: "A Trip To The Moon",
      category: "Short Film",
      date: "Sept 1, 1902",
      readTime: "13m",
      rating: 8.1,
      imageSrc: aTripToTheMoon,
      description: "A group of astronomers go on an expedition to the Moon.",
    },
    {
      id: "6",
      title: "Black Girl in Paris",
      category: "Short Film",
      date: "June 1, 2012",
      readTime: "19m",
      rating: 7.6,
      imageSrc: blackGirlInParis,
      description:
        "When a down on her luck aspiring writer runs out of money after moving to Paris, she meets a street-smart prostitute who takes her on a whirlwind adventure of passion, self-discovery and uninhibited sexual freedom.",
    },
  ];

  const spotlightItems = [
    {
      id: "spotlight-1",
      title: "New on Film World in September 2025",
      subtitle:
        "Stream Shoulder Down: Road to Redemption, plus new seasons of Wednesday, Beauty in Black, and more.",
      description:
        "Discover the latest additions to our growing catalog of premium content. From gripping thrillers to heartwarming dramas, this month brings an incredible variety of stories that will keep you at the edge of your seat.",
      imageSrc: shoulderDown,
      category: "NEW RELEASES",
      featured: true,
    },
    {
      id: "spotlight-2",
      title: "Lethalogica",
      subtitle: "Exclusive interviews and behind-the-scenes content",
      description:
        "Revenge is a dish best served with - Relationships can be killer, but the best advice for a long one, is a short memory.",
      imageSrc: lethalogica,
      category: "SHORT FILM",
    },
    {
      id: "spotlight-3",
      title: "Barking Orders",
      subtitle: "What everyone's watching this week",
      description:
        "When the entire British Royal family tragically dies, the Queen's corgi finds himself next in line for the throne and in the seat of power.",
      imageSrc: barkingOrders,
      category: "SHORT FILM",
    },
    {
      id: "spotlight-4",
      title: "The Standbys",
      subtitle: "Award-winning content handpicked by experts",
      description:
        "A documentary revealing the under-appreciated, highly demanding world of Broadway Understudies and Standbys. Three undiscovered performers at various points in their careers get the chance of a lifetime. Their struggle is put into perspective through never-before-heard stories from celebrities who themselves were once Understudies or Standbys.",
      imageSrc: theStandbys,
      category: "DOCUMENTARY",
    },
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
        title="New on Film World in September 2025"
        subtitle="Stream Shoulder Down plus new seasons of Wednesday, Beauty in Black, and more."
        description="Discover the latest additions to our growing catalog of premium content. From gripping thrillers to heartwarming dramas, this month brings an incredible variety of stories that will keep you at the edge of your seat."
        imageSrc={shoulderDown}
        author="GARY LEE. VINCENT"
        date="2022"
        category="NEW ON FILM WORLD"
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
            © 2025 Film World. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

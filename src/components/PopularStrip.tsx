import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const PopularStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const popularItems = [
    {
      id: 1,
      title: "Sling blade",
      link: "https://redcoraluniverse.com/en/movies/sling-blade-67a35293755ad00b71575677",
    },
    {
      id: 2,
      title: "Vendetta",
      link: "https://redcoraluniverse.com/en/movies/vendetta-6795389a115e3f20ba40118b?loopData=true&ccId=6796a8c5115e3f20ba40626c",
    },
    {
      id: 3,
      title: "Kilio Chetu",
      link: "https://redcoraluniverse.com/en/movies/kilio-chetu-swahili-w-subt-67cca584553ea379b7198e7f",
    },
    {
      id: 4,
      title: "Welcome",
      link: "https://redcoraluniverse.com/en/movies/welcome-6833601814f91b1bd6d920f0?ccId=6796a8c5115e3f20ba40626c",
    },
    {
      id: 5,
      title: "Little Ukraine",
      link: "https://redcoraluniverse.com/en/movies/little-ukraine-67a613ae82570220cea2b6ff?ccId=6796a8c5115e3f20ba40626c",
    },
    {
      id: 6,
      title: "Without a body",
      link: "https://redcoraluniverse.com/en/movies/without-a-body-677c2df13d9e490fe54bd02d?ccId=6796a8c5115e3f20ba40626c",
    },
    {
      id: 7,
      title: "Gangster exchange",
      link: "https://redcoraluniverse.com/en/movies/gangster-exchange-677b0bf93d9e490fe54bbbd0?ccId=6796a8c5115e3f20ba40626c",
    },{
      id: 8,
      title: "Unleashed",
      link: "https://redcoraluniverse.com/en/movies/unleashed-679667ed115e3f20ba403388?ccId=6796a961115e3f20ba4065f5",
    },{
      id: 9,
      title: "Frank and fearless",
      link: "https://redcoraluniverse.com/en/movies/frank-fearless-67ccb7de553ea379b719be4f?ccId=6796a961115e3f20ba4065f5",
    },{
      id: 10,
      title: "Hill walkers",
      link: "https://redcoraluniverse.com/en/movies/hillwalkers-67ac984f103f50343f51037c?ccId=67d044a3b956ad93adf5cab1",
    },{
      id: 11,
      title: "Ingenim",
      link: "https://redcoraluniverse.com/en/movies/ingenium-67a4bdc85e3b916d290570e3?ccId=67d044a3b956ad93adf5cab1",
    },{
      id: 12,
      title: "Taboo family, secrets.",
      link: "https://redcoraluniverse.com/en/movies/taboo-family-secrets-682f581b3922930ed584a5d6?ccId=67d044a3b956ad93adf5cab1",
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <span className="text-sm font-medium text-muted-foreground mr-4 whitespace-nowrap">
            POPULAR:
          </span>

          {/* Scroll Buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll("left")}
            className="p-1 mr-2 hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 pb-2">
              {popularItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap relative group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  target="_blank"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll("right")}
            className="p-1 ml-2 hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularStrip;

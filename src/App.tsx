import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Top10 from "./pages/Top10";
import Trending from "./pages/Trending";
import WhatToWatch from "./pages/WhatToWatch";
import Shows from "./pages/Shows";
import Movies from "./pages/Movies";
import Podcasts from "./pages/Podcasts";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/top-10" element={<Top10 />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/what-to-watch" element={<WhatToWatch />} />
          <Route path="/short-films" element={<Shows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/shop" element={<Shop />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, Shield, Gift, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import contentGrid from "@/assets/content-grid.jpg";

const Shop = () => {
  const featuredProducts = [
    {
      id: "product-1",
      name: "Wednesday Addams Hoodie",
      category: "Apparel",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.8,
      reviews: 1248,
      image: contentGrid,
      badge: "Bestseller",
      description: "Official Wednesday Addams black hoodie with gothic embroidery"
    },
    {
      id: "product-2", 
      name: "Frame Focus Premium Mug",
      category: "Accessories",
      price: "$19.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 892,
      image: contentGrid,
      badge: "New",
      description: "Ceramic mug with color-changing Frame Focus logo"
    },
    {
      id: "product-3",
      name: "Black Rabbit Mystery Box",
      category: "Collectibles",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.9,
      reviews: 567,
      image: contentGrid,
      badge: "Limited",
      description: "Exclusive collectibles inspired by the hit thriller series"
    },
    {
      id: "product-4",
      name: "Streaming Essentials Bundle",
      category: "Tech & Gadgets",
      price: "$149.99", 
      originalPrice: "$199.99",
      rating: 4.6,
      reviews: 324,
      image: contentGrid,
      badge: "Bundle",
      description: "Everything you need for the ultimate streaming setup"
    },
    {
      id: "product-5",
      name: "Frame Focus Art Prints Set",
      category: "Home & Decor",
      price: "$34.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 445,
      image: contentGrid,
      badge: "New",
      description: "Set of 4 premium art prints featuring iconic Frame Focus moments"
    },
    {
      id: "product-6",
      name: "Binge-Watcher Snack Box",
      category: "Food & Treats", 
      price: "$24.99",
      originalPrice: null,
      rating: 4.5,
      reviews: 789,
      image: contentGrid,
      badge: "Monthly",
      description: "Curated snacks perfect for your next binge-watching session"
    }
  ];

  const categories = [
    { name: "Apparel", items: "45+ items", icon: "👕" },
    { name: "Accessories", items: "32+ items", icon: "🎒" },
    { name: "Collectibles", items: "28+ items", icon: "🏆" },
    { name: "Tech & Gadgets", items: "19+ items", icon: "📱" },
    { name: "Home & Decor", items: "36+ items", icon: "🏠" },
    { name: "Books & Media", items: "24+ items", icon: "📚" },
    { name: "Food & Treats", items: "15+ items", icon: "🍿" },
    { name: "Gift Cards", items: "5+ options", icon: "🎁" }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Checkout", 
      description: "Your payment information is always protected"
    },
    {
      icon: Gift,
      title: "Exclusive Items",
      description: "Products you can only find at Frame Focus Shop"
    },
    {
      icon: Star,
      title: "Member Benefits",
      description: "Special discounts for Frame Focus subscribers"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "New": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Limited": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "Bundle": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Monthly": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

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
                <ShoppingBag className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Frame Focus Shop
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Bring your favorite shows and movies into your everyday life with official merchandise, 
                exclusive collectibles, and unique items inspired by Frame Focus content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-card border border-border/50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tag className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Limited Time: 30% Off All Apparel
              </h3>
              <p className="text-muted-foreground mb-4">
                Use code BINGE30 at checkout • Offer ends September 15th
              </p>
              <Button variant="cinema" size="sm">
                Shop Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Browse Categories */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the perfect items to express your fandom
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-card-cinema transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.items}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-gradient-red rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden hover:shadow-card-cinema transition-all duration-300 group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`text-xs font-semibold border ${getBadgeColor(product.badge)}`}>
                          {product.badge}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center bg-black/70 px-2 py-1 rounded">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-xs text-white">{product.rating}</span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {product.category}
                      </Badge>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-foreground">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ({product.reviews} reviews)
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Membership Benefits */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Frame Focus Members Get More
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Exclusive Member Discounts & Early Access
                </h3>
                <p className="text-muted-foreground mb-6">
                  Frame Focus subscribers get 15% off all purchases, early access to limited editions, 
                  and exclusive member-only products.
                </p>
                <Button variant="cinema" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-muted/20 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              Free shipping on orders over $50 • 30-day return policy • Exclusive Frame Focus merchandise
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;
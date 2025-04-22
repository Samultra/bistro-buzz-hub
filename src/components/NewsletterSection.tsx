
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log("Subscribing email:", email);
      setIsSubmitted(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-bistro-50 py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Stay Updated with Culinary News
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest restaurant openings, special offers, and culinary events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow border-bistro-200 focus-visible:ring-bistro-500"
              required
              disabled={isSubmitted}
            />
            <Button 
              type="submit" 
              className="bg-bistro-500 hover:bg-bistro-600 text-white"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

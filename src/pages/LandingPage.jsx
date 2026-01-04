import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {  
    e.preventDefault();
    if(longUrl){
      navigate(`/auth?createNew=${longUrl}`)
    }
  };  

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white px-4">
      
     
      <section className="max-w-5xl mx-auto pt-24 pb-20 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          The only{" "}
          <span className="text-cyan-400">URL Shortener</span>
          <br />
          you&rsquo;ll ever need.
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Shorten, share, and manage links instantly with Zyplo.
          Built for creators, developers, and teams who value speed and simplicity.
        </p>

       
        <form  onSubmit={handleShorten}className="mt-10 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <Input
            type="url"
            value={longUrl} 
            placeholder="Paste your long URL here..."
            onChange={(e) => setLongUrl(e.target.value)}
            className="h-14 bg-[#111827] border-gray-800 text-white placeholder:text-gray-500"
          />
          <Button
            
            type="submit"
            className="h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
          >
            Shorten URL
          </Button>
        </form>
      </section>

     
      <section className="max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          How Zyplo Works
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          
          <AccordionItem value="item-1" className="border border-gray-800 rounded-lg px-4">
            <AccordionTrigger>
              How does Zyplo work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed">
              Zyplo converts long URLs into short, shareable links.
              When someone opens the short link, they are instantly redirected
              to the original destination with zero delay.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-800 rounded-lg px-4">
            <AccordionTrigger>
              Do I need an account to use Zyplo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed">
              No account is required for basic usage.
              Sign up only if you want to manage links, track clicks,
              and access your personal dashboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-800 rounded-lg px-4">
            <AccordionTrigger>
              Is Zyplo free?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed">
              Zyplo offers free link shortening.
              Advanced features and analytics may be introduced
              as optional premium upgrades in the future.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-800 rounded-lg px-4">
            <AccordionTrigger>
              Is my data safe?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed">
              Yes. Zyplo follows modern security practices and never
              shares your data with third parties.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </section>
    </div>
  );
};

export default LandingPage;

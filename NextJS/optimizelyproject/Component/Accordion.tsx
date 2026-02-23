"use client";
import { useState } from "react";
import "../app/globals.css";
const accordianData = [
    {
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces."
    },
    {
        title: "What is Next.js?",
        content: "Next.js is a React framework for server-side rendering and static site generation."
    },
    {
        title: "What is TypeScript?",
        content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
    }
]
const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(-1);
    if(!accordianData || accordianData.length === 0) {
        return <div className="w-full h-screen flex items-center justify-center">No data available</div>
    }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-1 transform transition-all duration-300"> 
        {accordianData.map((item, index) => (
            <div key={index} className="w-[80%]">  
                <div 
                    className="cursor-pointer p-4 bg-gray-200 relative flex items-center"
                    onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                >
                    {item.title}
                    <span className="absolute right-4 text-[30px]">{index === activeIndex ? "-" : "+"}</span> 
                </div>
                {index === activeIndex && (
                    <div className="p-4 max-h-40 overflow-auto scrollbar-hide">
                        {item.content}
                    </div>
                )}
            </div>
        ))}
    </div>
  );
};

export default Accordion;

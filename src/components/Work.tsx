import { useState, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: "AI Smart Parking Chatbot",
      category: "LLM Integration",
      tools: "Python, Gemini API, NLP",
      image: "/project screenshots/AI Smart Parking Chatbot — LLM Integration.png",
    },
    {
      name: "CETRI AI Project",
      category: "Full Stack AI Application",
      tools: "Python, ML Models, API Integration",
      image: "/project screenshots/CETRI AI Project — Full Stack AI Application.png",
    },
    {
      name: "Wind Power Forecast",
      category: "Real-time Dashboard",
      tools: "Machine Learning, Analytics, Full Stack",
      image: "/project screenshots/Wind Power Forecast Dashboard.png",
    },
    {
      name: "Smart Safety System",
      category: "AI-Based Threat Detection",
      tools: "Computer Vision, Threat Detection",
      image: "/project screenshots/Smart Safety System — AI-Based Threat Detection.png",
    },
    {
      name: "Handwriting Analysis",
      category: "Mental Health Prediction",
      tools: "CNN, Deep Learning, Streamlit",
      image: "/project screenshots/Handwriting Analysis for Mental Health Prediction.png",
    },
    {
      name: "Autonomous Robot",
      category: "Obstacle Detection",
      tools: "Arduino UNO, Embedded C, Sensors",
      image: "/project screenshots/Autonomous Obstacle Detection Robot.jpeg",
    },
  ];

  useGSAP(() => {
    if (!flexRef.current) return;
    
    const boxes = flexRef.current.children;
    if (boxes.length === 0) return;

    const boxWidth = boxes[0].getBoundingClientRect().width;
    // const gap = 0; // Assuming no gap between centered items for now, or handle it in CSS

    gsap.to(flexRef.current, {
      x: -activeIndex * boxWidth,
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [activeIndex]);

  const nextProject = () => {
    if (activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      gsap.to(window, {
        duration: 1,
        scrollTo: ".techstack",
        ease: "power2.inOut"
      });
    }
  };

  const prevProject = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="work-carousel-wrapper">
          <button 
            className={`nav-btn prev ${activeIndex === 0 ? "disabled" : ""}`} 
            onClick={prevProject}
            aria-label="Previous Project"
          >
            <FaChevronLeft />
          </button>

          <div className="work-flex-viewport">
            <div className="work-flex" ref={flexRef}>
              {projects.map((project, index) => (
                <div className="work-box" key={index}>
                  <div className="work-info">
                    <div className="work-title">
                      <h3>0{index + 1}</h3>
                      <div>
                        <h4>{project.name}</h4>
                        <p>{project.category}</p>
                      </div>
                    </div>
                    <h4>Tools and features</h4>
                    <p>{project.tools}</p>
                  </div>
                  <WorkImage image={project.image} alt={project.name} />
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-btn next" 
            onClick={nextProject}
            aria-label="Next Project"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;


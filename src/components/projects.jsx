import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  const cards = [
    {
      imageUrl:
        "https://www.chaudharyhospital.in/wp-content/uploads/2024/05/blood-donation-1140x628.png",
      altText: "Blood Donation",
      title: "Blood Donation",
      description:
        "I developed a web application that connects blood donors with recipients, allowing users to search for donors based on their location and blood type.",
      explore: "",
    },
    {
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240212174013/Portfolio-Website-copy.webp",
      altText: "Portfolio",
      title: "Portfolio Website",
      description:
        "I Developed own portfolio website using React, HTML, CSS, and JavaScript.",
      explore: "",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{
        margin: "-100px",
        once: true,
      }}
      className="up_gap "
      id="project"
    >
      <h2 className="project__heading down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

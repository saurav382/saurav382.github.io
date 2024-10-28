import React from "react";
import "./styles/skills.css";
import "./styles/new.css";
import { motion } from "framer-motion";
import SemiDonutChart from "./SemiDonutChart";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="skills"
    >
      <h1 className="heading2">Programming Language</h1>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML" />
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS" />
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="JavaScript" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS" />
          <SemiDonutChart percentage={95} fill="#03B0FD" txt="Node JS" />
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Python" />
        </div>
        <div className="flex"></div>
      </div>
    </motion.div>
  );
};

export default Skills;

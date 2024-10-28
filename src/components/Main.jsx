import "./styles/main2.css";
import { motion } from "framer-motion";
import Saurav from "../images/saurav.jpeg";
const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="Main"
      id="mainy"
    >
      <div className="main_left">
        <div className="main__left__container">
          <h3 className="it_is_me">Hey! It's Me</h3>
          <h2 className="names">Saurav Kumar Yadav</h2>
          <p className="i_am_a">
            Hello! I'm Saurav Kumar Yadav, a passionate developer and a
            competitive coder. I am a 3rd year student pursuing BCA at JKLU -
            Jaipur. I love to code and solve problems. I am a quick learner and
            a team player. I am always ready to learn new things and explore new
            technologies. I am a hardworking and dedicated person who is
            enthusiastic about learning new things.
          </p>

          <div className="flex1">
            <a href="mailto:saurav@jklu.edu.in">
              <button className="buttonc">E-Mail Me</button>
            </a>
            <button
              onClick={() => window.open("", "_blank")}
              className="buttonb"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="right_main">
        <img className="saurav__img" src={Saurav} alt="Saurav"></img>
      </div>
    </motion.div>
  );
};

export default Main;

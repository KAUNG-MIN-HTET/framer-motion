import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <motion.div
        className="home container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Welcome to Pizza Joint</h2>
        <Link to="/base">
          <motion.button variants={buttonVariants} whileHover="hover">Create Your Pizza</motion.button>
        </Link>
      </motion.div>
      <Loader />
    </React.Fragment>
  );
};

export default Home;

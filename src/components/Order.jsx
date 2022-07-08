import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 3000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <>
      <Header />
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {showTitle && (
            <motion.h2 exit={{ y: "-100vh" }}>
              Thank you for your order :)
            </motion.h2>
          )}
        </AnimatePresence>
        <motion.p variants={childVariants}>
          You ordered a {pizza.base} pizza with:
        </motion.p>
        {pizza.toppings.map((topping) => (
          <motion.div variants={childVariants} key={topping}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Order;

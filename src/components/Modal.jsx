import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
        delay: 0.2
    }
  },
};

const Modal = ({ showModal, setPizza }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make pizza again?</p>
            <Link to="/">
              <button onClick={() => setPizza({ base: "", toppings: [] })}>Start Again!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

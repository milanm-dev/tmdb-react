import React from "react";
import "./NotFound.scss";
import doggo from "./doggo.png";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const notFoundVariant = {
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const notVariant = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <motion.div
      className="NotFound"
      variants={notFoundVariant}
      animate="visible"
      initial="hidden"
    >
      <motion.div variants={notVariant}>404 | Page not found</motion.div>
      <motion.img variants={notVariant} src={doggo} alt="doggo" />
    </motion.div>
  );
};

export default NotFound;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import profileImage from '../assets/profile.png';


const Home = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center pt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h2
              className="text-xl text-accent mb-2"
              variants={itemVariants}
            >
              {t("home.greeting")}
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Fabio Recchia
            </motion.h1>
            <motion.h3
              className="text-2xl md:text-3xl text-text-secondary mb-6"
              variants={itemVariants}
            >
              {t("home.role")}
            </motion.h3>
            <motion.p className="text-lg mb-8 max-w-lg" variants={itemVariants}>
              {t("home.bio")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/portfolio"
                className="btn btn-primary inline-flex items-center"
              >
                {t("home.cta")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for profile image */}
              <img
                src={profileImage}
                alt="Foto profilo di Fabio Recchia"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import mockupImage from "../assets/mockup.png";
import repoImage from "../assets/repos.png";
import phoneImage from "../assets/phone.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projects = [
    {
      id: "womblab",
      title: t("portfolio.womblab.title"),
      description: t("portfolio.womblab.description"),
      technologies: t("portfolio.womblab.technologies"),
      imageUrl: mockupImage,
      videoUrl: null, // Will be replaced with actual video
      link: "https://github.com/FabioFapi/womblab-landing-page",
    },
    {
      id: "womblabRepo",
      title: t("portfolio.womblabRepo.title"),
      description: t("portfolio.womblabRepo.description"),
      technologies: t("portfolio.womblabRepo.technologies"),
      imageUrl: repoImage,
      videoUrl: null, // Will be replaced with actual video
      link: "https://github.com/FabioFapi/womblab-repository",
    },
    {
      id: "forU",
      title: t("portfolio.forU.title"),
      description: t("portfolio.forU.description"),
      technologies: t("portfolio.forU.technologies"),
      imageUrl: phoneImage,
      videoUrl: null, 
      link: "https://github.com/FabioFapi/4U",
    }
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      className="card group"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-800">
        {project.videoUrl ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <span className="text-2xl font-bold text-accent">
              {project.id.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-text-secondary mb-4">{project.description}</p>
      <p className="text-sm mb-4">{project.technologies}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-accent hover:underline"
      >
        {t("portfolio.viewProject")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold mb-2"
            variants={itemVariants}
          >
            {t("portfolio.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-text-secondary mb-12"
            variants={itemVariants}
          >
            {t("portfolio.subtitle")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;

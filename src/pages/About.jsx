import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import profileGithubImage from '../assets/profileGithub.png';

const About = () => {
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

  const skills = {
    mobile: ["Kotlin", "React Native", "Flutter", "Swift", "Android", "iOS"],
    web: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Svelte",
      "TailwindCSS",
    ],
    database: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
    other: ["Git", "RESTful APIs", "GraphQL", "CI/CD", "Agile"],
  };

  const SkillCategory = ({ title, skills }) => (
    <motion.div className="mb-8" variants={itemVariants}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-secondary border border-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
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
            {t("about.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-text-secondary mb-12"
            variants={itemVariants}
          >
            {t("about.subtitle")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-6">Fabio Recchia</h2>
              <p className="text-lg mb-6">{t("about.description")}</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/FabioFapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/fabio-recchia-435633339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden"
              variants={itemVariants}
            >
              {/* Placeholder for about image */}
              <img
                src={profileGithubImage}
                alt="Foto profilo di Fabio Recchia"
                className="object-cover w-full h-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <motion.h2
            className="text-2xl font-bold mb-8"
            variants={itemVariants}
          >
            {t("about.skills")}
          </motion.h2>

          <SkillCategory title={t("about.mobile")} skills={skills.mobile} />
          <SkillCategory title={t("about.web")} skills={skills.web} />
          <SkillCategory title={t("about.database")} skills={skills.database} />
          <SkillCategory title={t("about.other")} skills={skills.other} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="text-center py-10">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm [Your Name]
      </motion.h1>
      <p className="mt-4 text-xl">Frontend Developer | React Enthusiast</p>
    </section>
  );
}

export default Hero;
import React from "react";
import { UserCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-3xl mx-auto text-center px-6">
      <div className="flex flex-col items-center gap-1">
        <div className="mb-6">
          <UserCircle className="mx-auto" size={48} />
        </div>

        <h2 className="text-3xl font-semibold mb-6">
          Hello, I am Maria Krizea
        </h2>

        <p className="text-gray-700 leading-relaxed">
          I am a software engineer with strong front-end expertise, focused on
          delivering high-quality, scalable, and visually appealing user
          interfaces.
          <br />
          <br />
          I’m passionate about problem solving, writing clean code, and bringing
          ideas to life through modern web development.
        </p>
      </div>
    </section>
  );
};

export default About;

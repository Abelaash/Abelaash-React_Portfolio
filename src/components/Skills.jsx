import React from "react";

// Import icons
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import ReactLogo from "../assets/react.png";
import MongoDB from "../assets/mongodb.png";
import Node from "../assets/node.png";
import Java from "../assets/java.png";
import Python from "../assets/python.png";
import AWS from "../assets/aws.png";
import DjangoLogo from "../assets/django.png";
import Docker from "../assets/docker.png";
import Express from "../assets/express.png";
import VSCode from "../assets/vscode.png";
import WordPress from "../assets/wordpress.png";
import Shopify from "../assets/shopify.png";

// New icons
import Figma from "../assets/figma.png";
import React_Native from "../assets/react_native.png";
import PHP from "../assets/php.png";
import MySQL from "../assets/mysql.png";
import Elementor from "../assets/elementor.png";
import Git from "../assets/git.png";
import IntelliJ from "../assets/intellij.png";
import PyCharm from "../assets/pycharm.png";

import XAMPP from "../assets/xampp.png";
export const Skills = () => {
  
  const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: ReactLogo },
      { name: "React Native", icon: React_Native },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node", icon: Node },
      { name: "Express", icon: Express },
      { name: "Python", icon: Python },
      { name: "Django", icon: DjangoLogo },
      { name: "Java", icon: Java },
      { name: "PHP", icon: PHP },
    ],
  },

  {
    title: "Database / Cloud",
    skills: [
      { name: "MongoDB", icon: MongoDB },
      { name: "MySQL", icon: MySQL },
      { name: "AWS", icon: AWS },
      { name: "Docker", icon: Docker },
    ],
  },

  {
    title: "CMS / Platforms",
    skills: [
      { name: "WordPress", icon: WordPress },
      { name: "Shopify", icon: Shopify },
      { name: "Elementor", icon: Elementor },
    ],
  },

  {
    title: "Design / UI",
    skills: [
      { name: "Figma", icon: Figma },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub },
      { name: "VSCode", icon: VSCode },
      { name: "XAMPP", icon: XAMPP },
      { name: "PyCharm", icon: PyCharm },
      { name: "IntelliJ IDEA", icon: IntelliJ },
    ],
  },
];
  return (
    <div id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">Technologies & tools I work with</p>
        </div>

        <div className="flex flex-col gap-10 mt-6">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg"
                  >
                    <img className="w-20 mx-auto" src={skill.icon} alt={skill.name} />
                    <p className="mt-3">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;

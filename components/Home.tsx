import { Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen text-gray-800">
      <NavBar />
      <section className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-4">
        <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          TUSHAR KUMAR
        </motion.h1>
        <motion.p className="text-lg md:text-xl max-w-2xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Software Engineer @ Compro Technologies Pvt. Ltd, Delhi
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a href="mailto:kumar.tushar816@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition">
            <Mail size={20} /> kumar.tushar816@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tushar-kumar-5a4308174/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </section>
      <section id="aboutme" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Image src="/images/tushar.jpeg" alt="Tushar Kumar" width={400} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-lg">
            I am a passionate and experienced Front-End Developer with hands-on experience in building dynamic, scalable, and user-centric web applications. My primary focus is on creating intuitive and high-performance front-end solutions using cutting-edge technologies such as Vue3, Nuxt3, React, and AWS. At my current company, I have contributed to a wide range of projects, specializing in crafting responsive UIs and ensuring seamless integration with back-end services. With a strong foundation in Vue3 and Nuxt3, I have been able to build efficient, modular applications that prioritize both performance and maintainability. I also have extensive experience with React, creating reusable components that enhance productivity while ensuring the best possible user experience. In addition to my front-end expertise, I have worked with AWS to deploy and manage applications, ensuring scalability and reliability in the cloud. 
            </p>
          </div>
          </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
        <motion.div  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}>
                <a target="_blank" href='https://pathfinding-visualiser-three.vercel.app/'>
              <Image src={`/images/proj2.webp`} alt={`Project 1`} width={600} height={300} className="object-cover w-full h-60" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Pathfinding Visualizer</h3>
                <p className="text-gray-600">This project is a pathfinding visualizer built with Next.js and TypeScript, allowing users to visualize various graph traversal algorithms on a 2D grid. Users can select algorithms, set start and end points, add obstacles, and watch the algorithm traverse the grid with animations. </p>
              </div>
              </a>
            </motion.div>
            <motion.div  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}>
                <a target="_blank" href='https://fitness-tracker-chi-six.vercel.app/'>  
              <Image src={`/images/proj1.jpeg`} alt={`Project 1`} width={600} height={300} className="object-cover w-full h-60" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fitness Tracker </h3>
                <p className="text-gray-600">A fitness tracker frontend built with Next.js and TypeScript. It features localStorage-based auth, input validations, and a progress chart using Chart.js.</p>
              </div>
              </a>
            </motion.div>
           
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['React', 'Angular', 'Redux', 'NodeJS', 'Java', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'CSS', 'Bootstrap', 'MaterialUI'].map(skill => (
            <span key={skill} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-300 transition">{skill}</span>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-16">
        &copy; {new Date().getFullYear()} Tushar Kumar. All rights reserved.
      </footer>
    </main>
  );
}

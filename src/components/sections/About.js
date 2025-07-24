'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaGraduationCap, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaGraduationCap,
      title: "Quality Education",
      description: "Providing excellent education through Golu Biddaniketon, nurturing young minds for a brighter future."
    },
    {
      icon: FaLeaf,
      title: "Environmental Care",
      description: "Leading tree plantation drives and environmental conservation efforts to protect our planet."
    },
    {
      icon: FaHeart,
      title: "Community Service",
      description: "Dedicated to serving communities and creating positive social impact through various initiatives."
    },
    {
      icon: FaHandsHelping,
      title: "Sustainable Development",
      description: "Building sustainable solutions that create lasting change for communities and the environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Golu Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A non-profit organization committed to transforming lives through education, environmental conservation, and community development.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Foundation Work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Years of Impact</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Building a Better Tomorrow, One Step at a Time
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Since our inception, Golu Foundation has been at the forefront of positive change, focusing on education and environmental conservation. Through our school, Golu Biddaniketon, we&apos;ve educated hundreds of students, while our environmental initiatives have contributed to a greener planet.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our holistic approach ensures that every initiative we undertake creates lasting impact, empowering communities and fostering sustainable development.
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
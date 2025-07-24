'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaTree, FaSeedling, FaGlobe } from 'react-icons/fa';

const Environment = () => {
  const initiatives = [
    {
      icon: FaTree,
      title: "Tree Plantation Drives",
      description: "Regular community tree planting events to increase green cover and combat climate change.",
      count: "1000+",
      label: "Trees Planted"
    },
    {
      icon: FaSeedling,
      title: "Nursery Development",
      description: "Maintaining nurseries to grow saplings and distribute them to communities.",
      count: "50+",
      label: "Nurseries Managed"
    },
    {
      icon: FaGlobe,
      title: "Environmental Education",
      description: "Spreading awareness about environmental conservation through workshops and campaigns.",
      count: "5000+",
      label: "People Educated"
    },
    {
      icon: FaLeaf,
      title: "Green Initiatives",
      description: "Promoting sustainable practices and eco-friendly solutions in communities.",
      count: "25+",
      label: "Green Projects"
    }
  ];

  const impacts = [
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Reforestation Programs",
      description: "Transforming barren lands into lush green forests through systematic plantation drives."
    },
    {
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Community Gardens",
      description: "Creating community spaces that bring people together while promoting green living."
    },
    {
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Educational Workshops",
      description: "Teaching sustainable practices and environmental awareness to all age groups."
    }
  ];

  return (
    <section id="environment" className="py-20 bg-gradient-to-b from-green-50 to-white">
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
            Environmental <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Conservation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protecting our planet through dedicated environmental initiatives, tree plantation drives, and community-based conservation programs.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Environmental Conservation"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl mx-auto px-4">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Green Earth, Bright Future</h3>
              <p className="text-xl mb-6">Join us in our mission to create a sustainable environment for future generations</p>
              <motion.button
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Tree Plantation
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <initiative.icon className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">{initiative.count}</div>
              <div className="text-sm text-gray-500 mb-3">{initiative.label}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">{initiative.title}</h4>
              <p className="text-gray-600 text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Environmental Impact</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{impact.title}</h4>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Be Part of the Green Revolution</h3>
            <p className="text-xl mb-8 opacity-90">
              Every tree planted is a step towards a healthier planet. Join our upcoming tree plantation drives and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register for Next Drive
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sponsor a Tree
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-20 left-10 w-8 h-8 text-green-400"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaLeaf />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-8 h-8 text-green-500"
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <FaSeedling />
        </motion.div>
      </div>
    </section>
  );
};

export default Environment; 
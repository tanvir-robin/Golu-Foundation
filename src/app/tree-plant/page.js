'use client';

import { motion } from 'framer-motion';
import { 
  FaTree, 
  FaHeart, 
  FaUsers, 
  FaGraduationCap, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers as FaPeople,
  FaLeaf,
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { treePlantData } from '@/data/treePlantData';

const TreePlantPage = () => {
  const iconMap = {
    FaTree,
    FaHeart,
    FaUsers,
    FaGraduationCap
  };

  return (
    <main className="relative bg-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <FaArrowLeft className="w-5 h-5" />
              <span className="font-semibold">হোমে ফিরুন</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">বৃক্ষরোপণ কর্মসূচি</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{treePlantData.hero.title}</h1>
            <p className="text-2xl mb-4">{treePlantData.hero.subtitle}</p>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">{treePlantData.hero.description}</p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={treePlantData.hero.image}
              alt={treePlantData.hero.title}
              width={1200}
              height={500}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {treePlantData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.eventDetails.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.eventDetails.description}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaCalendarAlt className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">তারিখ</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.date}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaClock className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">সময়</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.time}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaMapMarkerAlt className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">স্থান</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.location}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaGlobe className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">আয়োজক</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.organizer}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaGraduationCap className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">সহযোগী</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.partner}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaPeople className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">অংশগ্রহণকারী</h3>
              <p className="text-gray-600">{treePlantData.eventDetails.info.participants}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.objectives.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.objectives.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treePlantData.objectives.goals.map((goal, index) => {
              const IconComponent = iconMap[goal.icon];
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{goal.title}</h4>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.activities.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.activities.description}</p>
          </motion.div>

          <div className="space-y-8">
            {treePlantData.activities.events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Species Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.treeSpecies.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.treeSpecies.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treePlantData.treeSpecies.species.map((species, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Image
                    src={species.image}
                    alt={species.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {species.count}টি
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{species.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 italic">{species.scientificName}</p>
                  <div className="space-y-2">
                    {species.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <FaLeaf className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.impact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.impact.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {treePlantData.impact.effects.map((effect, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">{effect.category}</h3>
                <ul className="space-y-3">
                  {effect.impacts.map((impact, impactIndex) => (
                    <li key={impactIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span className="text-sm opacity-90">{impact}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.participants.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.participants.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treePlantData.participants.groups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaUsers className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{group.category}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{group.count}</div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{group.description}</p>
                <p className="text-gray-500 text-xs italic">{group.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.gallery.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.gallery.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treePlantData.gallery.images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">{treePlantData.futurePlans.title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{treePlantData.futurePlans.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treePlantData.futurePlans.plans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-semibold mb-2 bg-white/20 px-3 py-1 rounded-full inline-block">
                  {plan.timeline}
                </div>
                <h3 className="text-lg font-semibold mb-3">{plan.title}</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{treePlantData.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{treePlantData.contact.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaGlobe className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">সংস্থা</h3>
              <p className="text-gray-600">{treePlantData.contact.info.organization}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ঠিকানা</h3>
              <p className="text-gray-600">{treePlantData.contact.info.address}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaPhone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ফোন</h3>
              <p className="text-gray-600">{treePlantData.contact.info.phone}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ইমেইল</h3>
              <p className="text-gray-600">{treePlantData.contact.info.email}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TreePlantPage; 
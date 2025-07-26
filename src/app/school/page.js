'use client';

import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaUsers, 
  FaHeart, 
  FaGraduationCap, 
  FaLaptop, 
  FaUtensils, 
  FaFirstAid, 
  FaBus,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowLeft
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { schoolData } from '@/data/schoolData';

const SchoolPage = () => {
  const iconMap = {
    FaChalkboardTeacher,
    FaBook,
    FaUsers,
    FaHeart,
    FaGraduationCap,
    FaLaptop,
    FaUtensils,
    FaFirstAid,
    FaBus
  };

  return (
    <main className="relative bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <FaArrowLeft className="w-5 h-5" />
              <span className="font-semibold">হোমে ফিরুন</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">গোলু বিদ্যানিকেতন</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">{schoolData.hero.title}</h1>
            <p className="text-2xl mb-4">{schoolData.hero.subtitle}</p>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">{schoolData.hero.description}</p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={schoolData.hero.image}
              alt={schoolData.hero.title}
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
            {schoolData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{schoolData.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{schoolData.about.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolData.about.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{schoolData.programs.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{schoolData.programs.description}</p>
          </motion.div>

          <div className="space-y-12">
            {schoolData.programs.items.map((program, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{schoolData.facilities.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{schoolData.facilities.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolData.facilities.items.map((facility, index) => {
              const IconComponent = iconMap[facility.icon];
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-full">
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h4>
                  <p className="text-gray-600">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">{schoolData.achievements.title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{schoolData.achievements.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolData.achievements.highlights.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold mb-2">{achievement.year}</div>
                <h4 className="text-lg font-semibold mb-3">{achievement.title}</h4>
                <p className="text-sm opacity-90">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{schoolData.admission.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{schoolData.admission.description}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Admission Process */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ভর্তি প্রক্রিয়া</h3>
              <div className="space-y-6">
                {schoolData.admission.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements and Fees */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">প্রয়োজনীয় কাগজপত্র</h3>
              <ul className="space-y-3 mb-8">
                {schoolData.admission.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">ফি কাঠামো</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">ভর্তি ফি:</span>
                    <span className="font-semibold">{schoolData.admission.fees.admission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">মাসিক বেতন:</span>
                    <span className="font-semibold">{schoolData.admission.fees.monthly}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">পরীক্ষার ফি:</span>
                    <span className="font-semibold">{schoolData.admission.fees.exam}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">পরিবহন ফি:</span>
                    <span className="font-semibold">{schoolData.admission.fees.transport}</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{schoolData.contact.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ঠিকানা</h3>
              <p className="text-gray-600">{schoolData.contact.address}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaPhone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ফোন</h3>
              <p className="text-gray-600">{schoolData.contact.phone}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ইমেইল</h3>
              <p className="text-gray-600">{schoolData.contact.email}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaClock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">অফিস সময়</h3>
              <p className="text-gray-600">{schoolData.contact.officeHours}</p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">প্রধান শিক্ষক</h3>
            <p className="text-lg text-gray-600 mb-2">{schoolData.contact.principal}</p>
            <p className="text-lg text-gray-600">{schoolData.contact.vicePrincipal}</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SchoolPage; 
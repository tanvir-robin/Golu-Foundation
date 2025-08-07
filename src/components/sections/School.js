'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const School = () => {
  const achievements = [
    { number: "৫০০+", label: "প্রাক্তন শিক্ষার্থী" },
    { number: "৯৮%", label: "পাসের হার" },
    { number: "৫০+", label: "পুরস্কার প্রাপ্ত" },
    { number: "২৫+", label: "যোগ্য শিক্ষক" }
  ];

  return (
    <section id="school" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">গোলু বিদ্যানিকেতন</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের প্রধান শিক্ষা প্রতিষ্ঠান যা গুণগত শিক্ষা প্রদান করে এবং শক্তিশালী নৈতিক মূল্যবোধ সহ ভবিষ্যত নেতৃত্ব গড়ে তোলে।
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/school/morning_class.jpg"
            alt="গোলু বিদ্যানিকেতন স্কুল"
            width={1200}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">শিক্ষায় উৎকর্ষতা</h3>
              <p className="text-xl mb-6">যেখানে স্বপ্ন উড়ে যায় এবং ভবিষ্যত গড়ে ওঠে</p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                আমাদের স্কুল দেখুন
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">স্কুলের ছবি</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আমাদের স্কুলের দৈনন্দিন জীবনের স্মরণীয় মুহূর্তগুলো
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/school/morning_class.jpg",
                alt: "সকালের ক্লাস",
                caption: "প্রতিদিন সকালে শিক্ষার্থীরা উৎসাহের সাথে ক্লাসে অংশগ্রহণ করে"
              },
              {
                src: "/images/school/students_taking_meal.jpg",
                alt: "মিড-ডে মিল",
                caption: "সব শিক্ষার্থী একসাথে পুষ্টিকর খাবার গ্রহণ করে"
              },
              {
                src: "/images/school/cover_all_student.jpg",
                alt: "স্কুলের শিক্ষার্থী",
                caption: "আমাদের স্কুলের সব শিক্ষার্থী"
              },
              {
                src: "/images/school/clss_time_2.jpg",
                alt: "ক্লাসরুমে শিক্ষা",
                caption: "শিক্ষকদের নিবিড় তত্ত্বাবধানে শিক্ষা গ্রহণ"
              },
              {
                src: "/images/school/class_time.jpg",
                alt: "শ্রেণিকক্ষে পাঠদান",
                caption: "আধুনিক পদ্ধতিতে পাঠদান"
              },
              {
                src: "/images/school/morning_class.jpg",
                alt: "স্কুল প্রাঙ্গণ",
                caption: "সবুজ প্রাঙ্গণে শিক্ষার্থীদের আনন্দময় সময়"
              }
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg font-semibold mb-2">{photo.alt}</h4>
                    <p className="text-sm opacity-90">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School Life Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">স্কুল জীবনের সৌন্দর্য</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaGraduationCap className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">সকালের ক্লাস</h4>
                  <p className="text-gray-600">প্রতিদিন সকালে শিক্ষার্থীরা উৎসাহের সাথে ক্লাসে অংশগ্রহণ করে।</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaHeart className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">মিড-ডে মিল</h4>
                  <p className="text-gray-600">সব শিক্ষার্থী একসাথে পুষ্টিকর খাবার গ্রহণ করে।</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/school/students_taking_meal.jpg"
              alt="শিক্ষার্থীরা খাবার গ্রহণ করছে"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">আমাদের অর্জন</h3>
            <p className="text-xl opacity-90">নিষ্ঠা এবং কঠোর পরিশ্রমের মাধ্যমে উৎকর্ষতা গড়ে তোলা</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">আমাদের স্কুলে যোগ দিতে প্রস্তুত?</h3>
          <p className="text-gray-600 mb-8">আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য গোলু বিদ্যানিকেতনে ভর্তি করুন</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/school">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                বিস্তারিত দেখুন
              </motion.button>
            </Link>
            <motion.button
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              এখনই আবেদন করুন
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default School; 
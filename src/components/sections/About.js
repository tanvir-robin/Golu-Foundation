'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaGraduationCap, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaGraduationCap,
      title: "গুণগত শিক্ষা",
      description: "গোলু বিদ্যানিকেতনের মাধ্যমে উৎকৃষ্ট শিক্ষা প্রদান, উজ্জ্বল ভবিষ্যতের জন্য তরুণ মনকে লালন করা।"
    },
    {
      icon: FaLeaf,
      title: "পরিবেশ সুরক্ষা",
      description: "সবুজ আচ্ছাদন বৃদ্ধি এবং জলবায়ু পরিবর্তন মোকাবেলায় নিয়মিত সম্প্রদায় গাছ লাগানো কার্যক্রম পরিচালনা।"
    },
    {
      icon: FaHeart,
      title: "সম্প্রদায় সেবা",
      description: "বিভিন্ন উদ্যোগের মাধ্যমে সম্প্রদায়ের সেবা এবং ইতিবাচক সামাজিক প্রভাব সৃষ্টিতে নিবেদিত।"
    },
    {
      icon: FaHandsHelping,
      title: "টেকসই উন্নয়ন",
      description: "সম্প্রদায় এবং পরিবেশের জন্য স্থায়ী পরিবর্তন সৃষ্টিকারী টেকসই সমাধান গড়ে তোলা।"
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
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">গোলু ফাউন্ডেশন</span> সম্পর্কে
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            শিক্ষা, পরিবেশ সংরক্ষণ এবং সম্প্রদায় উন্নয়নের মাধ্যমে জীবন পরিবর্তনে প্রতিশ্রুতিবদ্ধ একটি অলাভজনক সংস্থা।
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
                alt="ফাউন্ডেশনের কাজ"
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
                <div className="text-3xl font-bold text-green-600 mb-1">১০+</div>
                <div className="text-gray-600 text-sm">বছর প্রভাব</div>
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
              ধাপে ধাপে একটি ভালো আগামীকাল গড়ে তোলা
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              আমাদের প্রতিষ্ঠার পর থেকে, গোলু ফাউন্ডেশন শিক্ষা এবং পরিবেশ সংরক্ষণের উপর ফোকাস করে ইতিবাচক পরিবর্তনের অগ্রভাগে রয়েছে। আমাদের স্কুল, গোলু বিদ্যানিকেতনের মাধ্যমে আমরা শত শত শিক্ষার্থীকে শিক্ষিত করেছি, অন্যদিকে আমাদের পরিবেশগত উদ্যোগগুলি একটি সবুজ গ্রহে অবদান রেখেছে।
            </p>
            <p className="text-gray-600 text-lg mb-8">
              আমাদের সামগ্রিক দৃষ্টিভঙ্গি নিশ্চিত করে যে আমরা যে প্রতিটি উদ্যোগ গ্রহণ করি তা স্থায়ী প্রভাব সৃষ্টি করে, সম্প্রদায়কে ক্ষমতায়ন করে এবং টেকসই উন্নয়নকে উৎসাহিত করে।
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              আমাদের সম্পর্কে আরও জানুন
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
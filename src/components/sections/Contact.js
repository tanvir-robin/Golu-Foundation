'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "আমাদের দেখুন",
      details: ["Dumki, PSTU", "Patuakhali", "Barisal"]
    },
    {
      icon: FaPhone,
      title: "আমাদের কল করুন",
      details: ["+88017000000000", "+88017000000000"]
    },
    {
      icon: FaEnvelope,
      title: "আমাদের ইমেইল করুন",
      details: ["info@golufoundation.org", "contact@golufoundation.org"]
    },
    {
      icon: FaClock,
      title: "অফিসের সময়",
      details: ["সোমবার - শুক্রবার: সকাল ৯:০০ - বিকাল ৬:০০", "শনিবার: সকাল ১০:০০ - বিকাল ৪:০০", "রবিবার: বন্ধ"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">যোগাযোগ</span> করুন
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            পার্থক্য তৈরি করতে প্রস্তুত? আমাদের কর্মসূচি, স্বেচ্ছাসেবার সুযোগ, বা আপনি কীভাবে আমাদের মিশনকে সমর্থন করতে পারেন সে সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">আমাদের একটি বার্তা পাঠান</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">নামের প্রথম অংশ</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="আপনার নামের প্রথম অংশ"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">নামের শেষ অংশ</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="আপনার নামের শেষ অংশ"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">বিষয়</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                  <option>সাধারণ জিজ্ঞাসা</option>
                  <option>স্কুলে ভর্তি</option>
                  <option>স্বেচ্ছাসেবার সুযোগ</option>
                  <option>দান</option>
                  <option>গাছ লাগানো কর্মসূচি</option>
                  <option>সহযোগিতা</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">বার্তা</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="আমরা কীভাবে আপনাকে সাহায্য করতে পারি তা বলুন..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="w-5 h-5" />
                <span>বার্তা পাঠান</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full">
                    <info.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">আমাদের খুঁজুন</h4>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-2" />
                  <p>ইন্টারেক্টিভ মানচিত্র শীঘ্রই উপলব্ধ হবে</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">পার্থক্য তৈরি করতে প্রস্তুত?</h3>
            <p className="text-lg mb-6 opacity-90">
              শিক্ষা এবং পরিবেশ সংরক্ষণের মাধ্যমে একটি ভালো আগামীকাল গড়ে তোলার আমাদের মিশনে যোগ দিন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                স্বেচ্ছাসেবক হন
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                দান করুন
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
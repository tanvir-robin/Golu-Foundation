'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: 'আমাদের সম্পর্কে', href: '#about' },
    { name: 'স্কুল', href: '#school' },
    { name: 'পরিবেশ', href: '#environment' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  const programs = [
    { name: 'গোলু বিদ্যানিকেতন', href: '#school' },
    { name: 'গাছ লাগানো', href: '#environment' },
    { name: 'সম্প্রদায় সেবা', href: '#about' },
    { name: 'শিক্ষামূলক কর্মশালা', href: '#school' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo/logo_transparent.png"
                alt="GoLu Foundation Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">GoLu Foundation</h3>
                <p className="text-sm text-gray-400">God Lives Universal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              গুণগত শিক্ষা এবং পরিবেশ সংরক্ষণ উদ্যোগের মাধ্যমে জীবন পরিবর্তনে নিবেদিত একটি অলাভজনক সংস্থা।
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">আমাদের কর্মসূচি</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">যোগাযোগ করুন</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-400 w-5 h-5" />
                <div>
                  <p className="text-gray-400">১২৩ ফাউন্ডেশন স্ট্রিট</p>
                  <p className="text-gray-400">শহর, রাজ্য ১২৩৪৫</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-400 w-5 h-5" />
                <p className="text-gray-400">+১ (৫৫৫) ১২৩-৪৫৬৭</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-400 w-5 h-5" />
                <p className="text-gray-400">info@golufoundation.org</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">আপডেট থাকুন</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 rounded-r-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  সাবস্ক্রাইব
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ২০২৪ গোলু ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">একটি ভালো বিশ্বের জন্য</p>
              <FaHeart className="text-red-500 w-4 h-4" />
              <p className="text-gray-400 text-sm">দিয়ে তৈরি</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 
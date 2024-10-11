import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import icon from "../assets/icons.png";
import Home from '../view/home/Home';

const SplashScreen = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(false);

  useEffect(() => {
    // Ambil waktu terakhir splash screen ditampilkan dari localStorage
    const lastSplashTime = localStorage.getItem('lastSplashTime');
    const now = Date.now();
    const threeMinutes = 3 * 60 * 1000; // 3 menit dalam milidetik

    // Cek jika sudah lebih dari 3 menit atau splash screen belum pernah ditampilkan
    if (!lastSplashTime || now - lastSplashTime > threeMinutes) {
      setIsSplashVisible(true);
      // Simpan waktu sekarang sebagai waktu splash terakhir di localStorage
      localStorage.setItem('lastSplashTime', now);

      // Set timer untuk menyembunyikan splash screen setelah 2.5 detik
      const timer = setTimeout(() => {
        setIsSplashVisible(false);
      }, 2500); // 2.5 detik

      // Bersihkan timer jika komponen di-unmount
      return () => clearTimeout(timer);
    }
  }, []);

  // Jika splash screen aktif, tampilkan splash screen
  if (isSplashVisible) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <img src={icon} alt="App Icon" className="w-72 mb-4 drop-shadow-2xl shadow-grays rounded-lg shadow-lg" />
        </motion.div>
      </div>
    );
  }

  // Jika splash screen tidak aktif, tampilkan Home
  return <Home />;
};

export default SplashScreen;

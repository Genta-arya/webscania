// components/ListCard.js
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion dari framer-motion

const ListCard = ({ items, onItemClick, renderItem }) => {
  // Variabel animasi untuk setiap item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.04, // Delay berdasarkan indeks
      },
    }),
  };

  return (
    <ul className="space-y-2">
      {items.length > 0 ? (
        items.map((item, index) => (
          <motion.li
            key={item.id}
            onClick={() => onItemClick(item)}
            className="p-2 bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded shadow-md cursor-pointer"
            variants={itemVariants} // Menambahkan variabel animasi
            initial="hidden" // Kondisi awal
            animate="visible" // Kondisi akhir
            custom={index} // Mengirimkan indeks sebagai custom prop
          >
            {renderItem ? renderItem(item, index) : `${index + 1}. ${item.name}`}
          </motion.li>
        ))
      ) : (
        <p className="text-gray-500 text-center">No items found.</p>
      )}
    </ul>
  );
};

export default ListCard;

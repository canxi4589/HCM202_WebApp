"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/header";

const StudyRecapPage = () => {
  return (
    <>
      <Header />
      
      <div
        className="relative flex flex-col items-center justify-center pt-20 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📚 Hỏi đáp & Học tập
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tham gia thảo luận và trao đổi kiến thức về tư tưởng Hồ Chí Minh
            </p>
          </motion.div>

          {/* Q&A Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-8 text-center"
              >
                <div className="mb-6">
                  <ExternalLink size={64} className="mx-auto text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Hỏi đáp trực tuyến
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Tham gia thảo luận và trao đổi kiến thức về tư tưởng Hồ Chí Minh với cộng đồng học tập
                  </p>
                </div>

                <motion.button
                  onClick={() => window.open('https://padlet.com/trincse182497/hcm202-t-t-ng-h-ch-minh-v-ch-ngh-a-x-h-i-v-x-y-d-ng-ch-ngh-a-actxusylrbo7ao9u', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <ExternalLink size={24} />
                  <span>Truy cập diễn đàn hỏi đáp</span>
                </motion.button>

                <p className="text-sm text-gray-500 mt-4">
                  * Liên kết sẽ mở trong tab mới
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StudyRecapPage;
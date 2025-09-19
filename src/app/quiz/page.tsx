"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { AnswerOption, hoChiMinhThoughtQuiz, Question } from "./constant/quiz";
import Header from "@/components/header";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(hoChiMinhThoughtQuiz.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const question: Question = hoChiMinhThoughtQuiz[current];

  const handleSelect = (idx: number) => {
    const newSelected = [...selectedAnswers];
    newSelected[current] = idx;
    setSelectedAnswers(newSelected);
  };

  const nextQuestion = () => {
    if (selectedAnswers[current] === null) return;
    setShowHint(false);
    setCurrent((prev) => Math.min(prev + 1, hoChiMinhThoughtQuiz.length - 1));
  };

  const prevQuestion = () => {
    setShowHint(false);
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleRetry = () => {
    setSelectedAnswers(Array(hoChiMinhThoughtQuiz.length).fill(null));
    setCurrent(0);
    setShowHint(false);
  };

  return (
    <>
      <Header />

      <div
        className="relative  flex flex-col items-center justify-center pt-16 min-h-[100vh] bg-cover bg-center overflow-y-auto"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-6">
                Câu {question.questionNumber}: {question.question}
              </h2>

              <div className="grid gap-4">
                {question.answerOptions.map(
                  (option: AnswerOption, idx: number) => {
                    const isSelected = selectedAnswers[current] === idx;
                    const isCorrect = option.isCorrect;

                    return (
                      <motion.div
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 min-h-[70px] flex flex-col justify-center
                          ${
                            isSelected
                              ? isCorrect
                                ? "bg-green-100 border-green-500 text-green-900"
                                : "bg-red-100 border-red-500 text-red-900"
                              : "bg-white border-gray-300 hover:bg-gray-50 text-gray-900"
                          }`}
                      >
                        <p className="font-medium">{option.text}</p>

                        {isSelected && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`mt-2 text-sm ${
                              isCorrect ? "text-green-700" : "text-red-700"
                            }`}
                          >
                            {option.rationale}
                          </motion.p>
                        )}
                      </motion.div>
                    );
                  }
                )}
              </div>

              {showHint ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded"
                >
                  <p className="text-sm text-yellow-700">{question.hint}</p>
                </motion.div>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="mt-6 px-4 py-2 border rounded-lg text-yellow-700 border-yellow-400 hover:bg-yellow-50 flex items-center gap-2"
                >
                  <HelpCircle size={18} /> Gợi ý
                </button>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevQuestion}
                  disabled={current === 0}
                  className="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center gap-2"
                >
                  <ChevronLeft size={18} /> Trước
                </button>
                <p className="text-sm text-gray-600">
                  Câu {current + 1} / {hoChiMinhThoughtQuiz.length}
                </p>
                {current === hoChiMinhThoughtQuiz.length - 1 ? (
                  <button
                    onClick={handleRetry}
                    disabled={selectedAnswers[current] === null}
                    className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                  >
                    Làm lại
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    disabled={selectedAnswers[current] === null}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 flex items-center gap-2"
                  >
                    Sau <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Quiz;

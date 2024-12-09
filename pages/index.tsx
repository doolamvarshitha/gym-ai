import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-green-500">Gym AI</span>
          </h1>
          <p className="mt-4 text-lg">
            Transform your fitness journey with AI-driven insights.
          </p>
          <button className="mt-6 px-8 py-3 bg-green-500 text-white rounded-lg flex items-center gap-2">
            Get Started <ArrowRightIcon className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold">AI-Powered Workouts</h3>
            <p className="mt-4">Get personalized workout plans tailored to your goals.</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold">Real-Time Tracking</h3>
            <p className="mt-4">Monitor your progress with AI-driven insights.</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold">Interactive Dashboard</h3>
            <p className="mt-4">Access analytics and improve your fitness journey.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

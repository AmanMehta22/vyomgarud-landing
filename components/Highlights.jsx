import { motion } from 'framer-motion'

const Highlights = () => {
  const highlights = [
    {
      number: "01",
      title: "Military-Grade Reliability",
      description: "Engineered for extreme conditions with 99.9% operational uptime and rigorous testing protocols.",
      icon: "🛡️"
    },
    {
      number: "02",
      title: "Advanced Autonomy",
      description: "AI-powered systems with minimal human intervention required for complex mission execution.",
      icon: "🤖"
    },
    {
      number: "03", 
      title: "Precision Engineering",
      description: "Sub-meter accuracy in navigation and targeting systems with advanced sensor fusion technology.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Why Choose <span className="text-orange-500">VyomGarud</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-orange group-hover:glow-orange"
              >
                <span className="text-2xl">{highlight.icon}</span>
              </motion.div>
              
              <div className="text-orange-500 text-sm font-bold mb-2 font-inter tracking-wider">
                {highlight.number}
              </div>
              
              <h3 className="text-xl font-bold mb-4 font-poppins group-hover:text-orange-500 transition-colors duration-300">
                {highlight.title}
              </h3>
              
              <p className="text-gray-400 font-inter leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gray-800 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            Ready to Enhance Your Capabilities?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-inter">
            Contact us to learn how VyomGarud's advanced UAV systems can transform your defense operations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 glow-orange font-inter"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
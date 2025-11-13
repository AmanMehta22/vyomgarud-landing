import { motion } from 'framer-motion'

const Capabilities = () => {
  const capabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "Reconnaissance Drones",
      description: "Advanced surveillance systems with high-resolution imaging, thermal vision, and real-time data transmission for intelligence gathering.",
      features: ["HD Live Streaming", "Night Vision", "Long Range Operation"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Combat UAVs",
      description: "Tactical strike systems with precision targeting, autonomous mission capabilities, and integrated defense mechanisms.",
      features: ["Precision Strike", "Autonomous Operation", "Multi-target Tracking"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Security Systems",
      description: "Integrated defense solutions with encrypted communication, AI-powered threat detection, and rapid response capabilities.",
      features: ["Encrypted Comms", "AI Threat Detection", "Rapid Deployment"]
    }
  ]

  return (
    <section id="capabilities" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Our <span className="text-orange-500">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Advanced UAV systems designed for the most demanding defense and security applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-8 transition-all duration-300 hover-glow border border-gray-700"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 glow-orange">
                {capability.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-poppins">{capability.title}</h3>
              <p className="text-gray-300 mb-6 font-inter leading-relaxed">{capability.description}</p>
              
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400 font-inter">
                    <svg className="w-4 h-4 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
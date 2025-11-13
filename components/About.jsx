import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-dark-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Precision Engineering for <span className="text-orange-500">Aerial Dominance</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-inter leading-relaxed">
              VyomGarud stands at the forefront of unmanned aerial systems technology, 
              delivering military-grade solutions that redefine operational capabilities 
              in modern defense and security landscapes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { number: '99.9%', label: 'Operational Uptime' },
                { number: '24/7', label: 'Mission Support' },
                { number: '100+', label: 'Successful Deployments' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-inter">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
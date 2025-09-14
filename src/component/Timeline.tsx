import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <motion.div 
      className="bg-inherit p-4 w-full"
      id='timeline'
    >
      <motion.div 
        className="lg:hidden"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.1 
        }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-dark-green">الجدول الزمني</h1>
      </motion.div>
      
      <motion.picture
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: "easeOut" 
        }}
      >
        {/* Mobile first */}
        <source srcSet="timelineMoblie.svg" media="(max-width: 767px)" />
        {/* Desktop */}
        <source srcSet="timeline.svg" media="(min-width: 1028px)" />
        {/* Fallback */}
        <img src="timeline.svg" alt="Timeline" className="w-full max-w-5xl mx-auto" />
      </motion.picture>
    </motion.div>
  )
}
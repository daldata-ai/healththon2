import { motion } from 'framer-motion';

export default function TargetGroup() {
  const targetGroups = [
    { id: 2, title: "مختصين علوم البيانات والذكاء الاصطناعي", image: "2.svg" },
    { id: 1, title: "الباحثين والمختصين في المجال الصحي", image: "1.svg" },
    { id: 3, title: "طلاب وخريجي الجامعات", image: "3.svg" },
    { id: 4, title: "مطوري الأعمال", image: "4.svg" },
  ]

  return (
    <motion.div 
      className="px-6 py-12 mx-auto bg-dark-green w-full border-t-4 border-b-4 border-light-green"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-2xl lg:text-3xl font-bold text-center mb-8 text-light-green"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.1 
        }}
      >
        الفئة المستهدفة
      </motion.h1>
      
      <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
        {targetGroups.map((group, index) => (
          <motion.div 
            key={group.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <motion.img
              src={group.image}
              alt={group.title}
              className="w-full h-24 md:h-48"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut" 
              }}
            />
            <motion.h2 
              className="text-base lg:text-lg font-semibold text-center text-white/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.4,
                ease: "easeOut" 
              }}
            >
              {group.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
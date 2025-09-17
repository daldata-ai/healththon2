import { motion } from 'framer-motion';

export default function TAndC() {
  const terms = [
    {
      id: 1,
      number: "١",
      text: "أن يتكون الفريق من ٣ أعضاء كحد أدنى و٥ أعضاء كحد أقصى."
    },
    {
      id: 2,
      number: "٢",
      text: "تواجد على الاقل نصف عدد اعضاء الفريق في الأيام الحضورية في الرياض."
    },
    {
      id: 3,
      number: "٣",
      text: "الانضمام إلى سيرفر ديسكورد الخاص بالداتاثون الصحي والذي سيُرسل عبر البريد الإلكتروني للمقبولين."
    }
  ];

  return (
    <motion.main 
      className="px-4 pb-6 bg-inherit"
    >
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold text-dark-green text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.1 
        }}
      >
        الشروط والأحكام
      </motion.h1>

      {/* Terms List */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {terms.map((term, index) => (
          <motion.div 
            key={term.id}
            className="rounded-2xl px-6 py-2 shadow-lg flex items-center gap-6" 
            style={{background: 'linear-gradient(135deg, rgba(151, 182, 112, 0.5), rgba(28, 84, 79, 0.5))'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <motion.span 
              className="text-dark-green font-bold lg:text-6xl text-4xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut" 
              }}
            >
              {term.number}
            </motion.span>
            <motion.p 
              className="text-dark-green text-md lg:text-lg leading-relaxed flex-1"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.3,
                ease: "easeOut" 
              }}
            >
              {term.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  )
}

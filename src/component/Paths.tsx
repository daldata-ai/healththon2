import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Paths() {
  const [hoveredCard, setHoveredCard] = useState<null | 1 | 2>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (cardId: string, itemId: string) => {
    const key = `${cardId}-${itemId}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-inherit p-4 sm:p-8"
      id="path"
      initial={{ opacity: 100}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-8 sm:mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-dark-green mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          مسارات الداتاثون
        </motion.h1>
      </motion.div>

      {/* Cards Container - Responsive: Column on mobile, Row on larger screens */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 sm:h-[500px]">
        
        {/* Card 1 - First Path */}
        <motion.div
          className="relative rounded-3xl text-white cursor-pointer overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out min-h-[400px] sm:min-h-0 sm:h-auto"
          onMouseEnter={() => !isMobile && setHoveredCard(1)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
          initial={{ opacity: 0, x: 0, scale: 0.9 }}
          animate={isInView ? 
            { opacity: 1, x: 0, scale: 1 } : 
            { opacity: 0, x: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={!isMobile ? { 
            scale: 1.02, 
            y: -4,
            transition: { duration: 0.3 }
          } : {}}
          style={{
            width: isMobile ? '100%' : hoveredCard === null ? '50%' : hoveredCard === 1 ? '75%' : '25%',
            background: (hoveredCard === 1 || isMobile)
              ? `linear-gradient(135deg, rgba(20, 184, 166, 0.9) 0%, rgba(13, 148, 136, 0.95) 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              : 'linear-gradient(135deg, rgba(15, 118, 110, 0.95) 0%, rgba(17, 94, 89, 0.98) 100%)',
            transform: !isMobile && hoveredCard === 1 
              ? 'scale(1.02) translateY(-4px)' 
              : !isMobile && hoveredCard === 2 
              ? 'scale(0.98)' 
              : 'scale(1)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* DNA-like background pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 1, delay: 1, ease: "backOut" }}
              style={{ transform: (hoveredCard === 1 || isMobile) ? 'rotate(90deg) scale(1.2)' : 'rotate(0deg)' }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-12 h-12 border border-white rounded-full"
              initial={{ scale: 0, rotate: 180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
              transition={{ duration: 1, delay: 1.2, ease: "backOut" }}
              style={{ transform: (hoveredCard === 1 || isMobile) ? 'rotate(-90deg) scale(1.3)' : 'rotate(0deg)' }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/4 w-6 h-6 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              style={{ transform: (hoveredCard === 1 || isMobile) ? 'scale(1.5)' : 'scale(1)' }}
            />
          </div>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center">
            <motion.div 
              className="transition-all duration-1000"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ 
                transform: (!isMobile && hoveredCard === 1) ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <h2 className={`font-bold transition-all duration-1000 ${
                isMobile ? 'text-xl mb-2' : hoveredCard === 1 ? 'text-xl sm:text-2xl md:text-3xl lg:text-3xl' : hoveredCard === 2 ? 'text-base sm:text-lg md:text-3xl lg:text-3xl opacity-70' : 'text-lg sm:text-xl md:text-3xl lg:text-3xl'
              }`}>
                المسار الأول
              </h2>
              <p className={`transition-all duration-1000 leading-relaxed ${
                isMobile ? 'text-base mb-4' : hoveredCard === 1 ? 'text-base sm:text-lg md:text-xl mb-4 sm:mb-8' : hoveredCard === 2 ? 'text-xs sm:text-base opacity-0' : 'text-sm sm:text-lg'
              }`}>
                تقليل معدل الوفيات المبكرة
              </p>
            </motion.div>

            {/* Expanded Content - Always visible on mobile */}
            <motion.div 
              className={`transition-all duration-1000 ease-in-out ${
                (hoveredCard === 1 || isMobile) ? 'opacity-100 max-h-[600px] overflow-y-auto' : 'opacity-0 max-h-0'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={(hoveredCard === 1 || isMobile) && isInView ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: hoveredCard === 1 ? 0.2 : 1 }}
              style={{ 
                transform: (hoveredCard === 1 || isMobile) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-right">
                <p className="text-xs sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed opacity-90">
                  يهدف هذا المسار للحد من حالات الوفاة المبكرة من خلال تحديد الفئات الأكثر عرضة للوفاة مبكرًا وأسبابها، والتنبؤ بمخاطر فقدان الجنين وصحة الأمهات أثناء الحمل، لتفادي تعرضهم للخطر مستقبلًا.
                </p>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-teal-200">تحديات المسار</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Accordion Item 1 */}
                  <motion.div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card1', 'item1')}
                    initial={{ opacity: 0, x: 0 }}
                    animate={(hoveredCard === 1 || isMobile) && isInView ? 
                      { opacity: 1, x: 0 } : 
                      { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
                          التنبؤ بالفئات الأكثر عرضة للوفاة المبكرة وتحليل الأسباب القابلة للتفادي
                        </span>
                        <motion.div
                          animate={{ rotate: expandedItems['card1-item1'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-teal-200 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: expandedItems['card1-item1'] ? 'auto' : 0,
                          opacity: expandedItems['card1-item1'] ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            التحدي: تكمن المشكلة في عدم القدرة على التنبؤ بدقة بالفئات السكانية الأكثر عرضة للوفاة المبكرة، وفهم الأسباب التي يمكن تفاديها مثل الأمراض المزمنة غير المُدارة أو الحوادث والإصابات.
                          </p>
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            الهدف: تطوير حل ذكي يستند إلى بيانات متعددة المصادر، بما يتيح معرفة الفئات المعرضة لخطر الوفاة المبكرة وبناء سياسات صحية وقائية لضمان سلامة معيشتهم.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Accordion Item 2 */}
                  <motion.div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card1', 'item2')}
                    initial={{ opacity: 0, x: 0 }}
                    animate={(hoveredCard === 1 || isMobile) && isInView ? 
                      { opacity: 1, x: 0 } : 
                      { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
                          التنبؤ المبكر بخطر وفيات الأجنة
                        </span>
                        <motion.div
                          animate={{ rotate: expandedItems['card1-item2'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-teal-200 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: expandedItems['card1-item2'] ? 'auto' : 0,
                          opacity: expandedItems['card1-item2'] ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            التحدي: ما زالت معدلات فقدان الأجنة والمضاعفات أثناء الحمل مرتفعة بسبب ضعف القدرة على التنبؤ المبكر، وغياب أدوات توظف البيانات الجينية مع المؤشرات الحيوية لتقديم رعاية وقائية مخصصة للأم وجنينها.
                          </p>
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            الهدف: بناء نظام يحدد ويتنبأ بالمخاطر المتعلقة بفقدان الأجنة، وراثية كانت أو صحية، وأن يوفر الدعم الكافي للأطباء في التدخل المبكر مما قد يساعد في تقليل معدلات وفيات الأجنة وتحسين صحة الأم والطفل.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 2 - Second Path */}
        <motion.div
          className="relative rounded-3xl text-white cursor-pointer overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out min-h-[400px] sm:min-h-0 sm:h-auto"
          onMouseEnter={() => !isMobile && setHoveredCard(2)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
          initial={{ opacity: 0, x: 0, scale: 0.9 }}
          animate={isInView ? 
            { opacity: 1, x: 0, scale: 1 } : 
            { opacity: 0, x: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={!isMobile ? { 
            scale: 1.02, 
            y: -4,
            transition: { duration: 0.3 }
          } : {}}
          style={{
            width: isMobile ? '100%' : hoveredCard === null ? '50%' : hoveredCard === 2 ? '75%' : '25%',
            background: (hoveredCard === 2 || isMobile)
              ? `linear-gradient(135deg, rgba(6, 78, 59, 0.95) 0%, rgba(4, 120, 87, 0.98) 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              : 'linear-gradient(135deg, rgba(6, 78, 59, 0.98) 0%, rgba(5, 46, 22, 1) 100%)',
            transform: !isMobile && hoveredCard === 2 
              ? 'scale(1.02) translateY(-4px)' 
              : !isMobile && hoveredCard === 1 
              ? 'scale(0.98)' 
              : 'scale(1)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Molecular pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className="absolute top-16 left-10 w-16 h-16 border border-white rounded-full"
              initial={{ scale: 0, rotate: 180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
              transition={{ duration: 1, delay: 1.2, ease: "backOut" }}
              style={{ transform: (hoveredCard === 2 || isMobile) ? 'rotate(90deg) scale(1.2)' : 'rotate(0deg)' }}
            />
            <motion.div 
              className="absolute bottom-24 left-16 w-8 h-8 border-2 border-white rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 1, delay: 1.4, ease: "backOut" }}
              style={{ transform: (hoveredCard === 2 || isMobile) ? 'rotate(-90deg) scale(1.3)' : 'rotate(0deg)' }}
            />
            <motion.div 
              className="absolute top-1/3 left-1/3 w-4 h-4 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              style={{ transform: (hoveredCard === 2 || isMobile) ? 'scale(1.5)' : 'scale(1)' }}
            />
          </div>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center">
            <motion.div 
              className="transition-all duration-1000"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ 
                transform: (!isMobile && hoveredCard === 2) ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <h2 className={`font-bold transition-all duration-1000 ${
                isMobile ? 'text-xl mb-2' : hoveredCard === 2 ? 'text-xl sm:text-2xl md:text-3xl lg:text-3xl' : hoveredCard === 1 ? 'text-base sm:text-lg md:text-3xl lg:text-3xl opacity-70' : 'text-lg sm:text-xl md:text-3xl lg:text-3xl'
              }`}>
                المسار الثاني
              </h2>
              <p className={`transition-all duration-1000 leading-relaxed ${
                isMobile ? 'text-base mb-4' : hoveredCard === 2 ? 'text-base sm:text-lg md:text-xl mb-4 sm:mb-8' : hoveredCard === 1 ? 'text-xs sm:text-base opacity-0' : 'text-sm sm:text-lg'
              }`}>
                إطالة العمر الصحي عبر علم الجينات والتقنيات الحيوية
              </p>
            </motion.div>

            {/* Expanded Content - Always visible on mobile */}
            <motion.div 
              className={`transition-all duration-1000 ease-in-out ${
                (hoveredCard === 2 || isMobile) ? 'opacity-100 max-h-[600px] overflow-y-auto' : 'opacity-0 max-h-0'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={(hoveredCard === 2 || isMobile) && isInView ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: hoveredCard === 2 ? 0.2 : 1.2 }}
              style={{ 
                transform: (hoveredCard === 2 || isMobile) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-right">
                <p className="text-xs sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed opacity-90">
                  يهدف هذا المسار إلى وقاية المجتمع ورفع جودة الحياة من خلال تحسين التغذية والخطط الغذائية للفرد والقدرة على تقدير العمر بيولوجيًا بدلًا من الاعتماد على العمر الزمني.
                </p>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-emerald-200">تحديات المسار</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Accordion Item 1 */}
                  <motion.div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card2', 'item1')}
                    initial={{ opacity: 0, x: 0 }}
                    animate={(hoveredCard === 2 || isMobile) && isInView ? 
                      { opacity: 1, x: 0 } : 
                      { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
                          الأيض الذكي – العلاقة بين التغذية وكفاءة التمثيل الغذائي
                        </span>
                        <motion.div
                          animate={{ rotate: expandedItems['card2-item1'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-200 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: expandedItems['card2-item1'] ? 'auto' : 0,
                          opacity: expandedItems['card2-item1'] ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            التحدي: تكمن المشكلة في أن الخطط الغذائية العامة المعتمدة لا تراعي الفروقات الفردية في البيانات البيولوجية بين شخص لآخر، مما يؤدي إلى ضعفها في تحسين صحة المرء.
                          </p>
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            الهدف: تطوير نظام ذكي قادر على تحليل البيانات الغذائية والبيولوجية للفرد، وربطها بكفاءة التمثيل الغذائي (الأيض)، وتصميم توصيات غذائية شخصية تحسِّن من كفاءة استهلاك الجسم للطاقة، وتقلل من تراكم الدهون، وتدعم صحة الأعضاء والمناعة.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Accordion Item 2 */}
                  <motion.div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card2', 'item2')}
                    initial={{ opacity: 0, x: 0 }}
                    animate={(hoveredCard === 2 || isMobile) && isInView ? 
                      { opacity: 1, x: 0 } : 
                      { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
                           تطوير مؤشر ذكي للعمر الصحي باستخدام المؤشرات الحيوية
                        </span>
                        <motion.div
                          animate={{ rotate: expandedItems['card2-item2'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-200 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: expandedItems['card2-item2'] ? 'auto' : 0,
                          opacity: expandedItems['card2-item2'] ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            التحدي: الاعتماد على العمر الزمني في قياس صحة الفرد البيولوجية يجعل الأفراد أقل وعيًا بمستوى صحتهم لعدم مقدرته على عكس الحالة الصحية بدقة.
                          </p>
                          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                            الهدف: تطوير حل متكامل يعتمد على بيانات المؤشرات الحيوية للفرد من أجل تقدير العمر البيولوجي بدقة، هذا الحل مخصص لمساعدة الفرد على إبطاء الشيخوخة والوقاية من الأمراض المزمنة من خلال تمكينهم من اتخاذ قرارات صحية أفضل بناءً على مؤشراتهم الصحية.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
}
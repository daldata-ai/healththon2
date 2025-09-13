import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Paths() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (cardId, itemId) => {
    const key = `${cardId}-${itemId}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-inherit p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-dark-green mb-2">مسارات الداتاثون</h1>
      </div>

      {/* Cards Container - Responsive: Column on mobile, Row on larger screens */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 sm:h-[500px]">
        
        {/* Card 1 - First Path */}
        <div
          className="relative rounded-3xl text-white cursor-pointer overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out min-h-[400px] sm:min-h-0 sm:h-auto"
          onMouseEnter={() => !isMobile && setHoveredCard(1)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
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
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 1 || isMobile) ? 'rotate(90deg) scale(1.2)' : 'rotate(0deg)' }}></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 border border-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 1 || isMobile) ? 'rotate(-90deg) scale(1.3)' : 'rotate(0deg)' }}></div>
            <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 1 || isMobile) ? 'scale(1.5)' : 'scale(1)' }}></div>
          </div>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center">
            <div className={`transition-all duration-1000 `}
                 style={{ 
                   transform: (!isMobile && hoveredCard === 1) ? 'translateY(-10px)' : 'translateY(0)',
                   transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}>
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
            </div>

            {/* Expanded Content - Always visible on mobile */}
            <div className={`transition-all duration-1000 ease-in-out ${
              (hoveredCard === 1 || isMobile) ? 'opacity-100 max-h-[600px] overflow-y-auto' : 'opacity-0 max-h-0'
            }`}
                 style={{ 
                   transform: (hoveredCard === 1 || isMobile) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                   transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}>
              <div className="text-right">
                <p className="text-xs sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed opacity-90">
                  يهدف هذا المسار للحد من الوفيات المبكرة عبر التنبؤ الدقيق بالفئات عالية الخطورة، وتحليل 
                  الأسباب القابلة للتفادي، وابتكار مؤشر وطني للعمر الصحي يعزز حياة أطول وأكثر جودة.
                </p>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-teal-200">تحديات المسار</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Accordion Item 1 */}
                  <div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card1', 'item1')}
                    style={{ 
                      transform: (hoveredCard === 1 || isMobile) ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: (hoveredCard === 1 || isMobile) ? '1' : '0',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                    }}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                         <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
التنبؤ بالفئات الأكثر عرضة للوفاة المبكرة وتحليل الأسباب القابلة للتفادي                        </span>
                        <ChevronDown 
                          className={`w-4 sm:w-5 h-4 sm:h-5 text-teal-200 flex-shrink-0 transition-transform duration-300 ${
                            expandedItems['card1-item1'] ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedItems['card1-item1'] ? 'max-h-40 mt-3' : 'max-h-0'
                      }`}>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                          التحدي: تكمن المشكلة في عدم القدرة على التنبؤ بدقة بالفئات السكانية الأكثر عرضة للوفاة المبكرة، وفهم الأسباب التي يمكن تفاديها مثل الأمراض المزمنة غير المُدارة أو الحوادث والإصابات.                        </p>
                                                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
الهدف: تطوير نماذج ذكاء اصطناعي تستند إلى تحليل بيانات متعددة المصادر، بما يتيح بناء سياسات صحية وقائية تستهدف الفئات عالية الخطورة بدقة وفعالية.


                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accordion Item 2 */}
                  <div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card1', 'item2')}
                    style={{ 
                      transform: (hoveredCard === 1 || isMobile) ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: (hoveredCard === 1 || isMobile) ? '1' : '0',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                         <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
تطوير مؤشر ذكي للعمر الصحي باستخدام المؤشرات الحيوية                        </span>
                        <ChevronDown 
                          className={`w-4 sm:w-5 h-4 sm:h-5 text-teal-200 flex-shrink-0 transition-transform duration-300 ${
                            expandedItems['card1-item2'] ? 'rotate-180' : ''
                          }`} 
                        />

                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedItems['card1-item2'] ? 'max-h-40 mt-3' : 'max-h-0'
                      }`}>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        التحدي: الاعتماد على العمر الزمني في قياس صحة الفرد البيولوجية يجعل الأفراد أقل وعيًا بمستوى صحتهم لعدم مقدرته على عكس الحالة الصحية بدقة.
                        </p>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        الهدف: تطوير نموذج متكامل يعتمد على بيانات المؤشرات الحيوية للفرد من أجل تقدير العمر البيولوجي بدقة، يقدم هذا المؤشر توصيات صحية مخصصة تساعد على إبطاء الشيخوخة والوقاية من الأمراض المزمنة، وسيصبح أداة وطنية لرفع وعي الأفراد بمستوى صحتهم، وتمكينهم من اتخاذ قرارات صحية أفضل
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Second Path */}
        <div
          className="relative rounded-3xl text-white cursor-pointer overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out min-h-[400px] sm:min-h-0 sm:h-auto"
          onMouseEnter={() => !isMobile && setHoveredCard(2)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
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
            <div className="absolute top-16 left-10 w-16 h-16 border border-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 2 || isMobile) ? 'rotate(90deg) scale(1.2)' : 'rotate(0deg)' }}></div>
            <div className="absolute bottom-24 left-16 w-8 h-8 border-2 border-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 2 || isMobile) ? 'rotate(-90deg) scale(1.3)' : 'rotate(0deg)' }}></div>
            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-white rounded-full transition-transform duration-1000"
                 style={{ transform: (hoveredCard === 2 || isMobile) ? 'scale(1.5)' : 'scale(1)' }}></div>
          </div>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center">
            <div className={`transition-all duration-1000`}
                 style={{ 
                   transform: (!isMobile && hoveredCard === 2) ? 'translateY(-10px)' : 'translateY(0)',
                   transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}>
              <h2 className={`font-bold transition-all duration-1000 ${
                isMobile ? 'text-xl mb-2' : hoveredCard === 2 ? 'text-xl sm:text-2xl md:text-3xl lg:text-3xl' : hoveredCard === 1 ? 'text-base sm:text-lg md:text-3xl lg:text-3xl opacity-70' : 'text-lg sm:text-xl md:text-3xl lg:text-3xl'
              }`}>
                المسار الثاني
              </h2>
              <p className={`transition-all duration-1000 leading-relaxed ${
                isMobile ? 'text-base mb-4' : hoveredCard === 2 ? 'text-base sm:text-lg md:text-xl mb-4 sm:mb-8' : hoveredCard === 1 ? 'text-xs sm:text-base opacity-0' : 'text-sm sm:text-lg'
              }`}>
                إطالة العمر الصحي عبر البايوجينتكس والتقنيات الحيوية
              </p>
            </div>

            {/* Expanded Content - Always visible on mobile */}
            <div className={`transition-all duration-1000 ease-in-out ${
              (hoveredCard === 2 || isMobile) ? 'opacity-100 max-h-[600px] overflow-y-auto' : 'opacity-0 max-h-0'
            }`}
                 style={{ 
                   transform: (hoveredCard === 2 || isMobile) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                   transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}>
              <div className="text-right">
                <p className="text-xs sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed opacity-90">
                  يركز هذا المسار على استخدام التقنيات المتقدمة في علم الوراثة والتكنولوجيا الحيوية 
                  لفهم آليات الشيخوخة وتطوير حلول مبتكرة لإطالة العمر الصحي وتحسين جودة الحياة.
                </p>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-emerald-200">تحديات المسار</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Accordion Item 1 */}
                  <div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card2', 'item1')}
                    style={{ 
                      transform: (hoveredCard === 2 || isMobile) ? 'translateX(0)' : 'translateX(20px)',
                      opacity: (hoveredCard === 2 || isMobile) ? '1' : '0',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                    }}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
الأيض الذكي – العلاقة بين التغذية وكفاءة التمثيل الغذائي                        </span>
                        <ChevronDown 
                          className={`w-4 sm:w-5 h-4 sm:h-5 text-emerald-200 flex-shrink-0 transition-transform duration-300 ${
                            expandedItems['card2-item1'] ? 'rotate-180' : ''
                          }`} 
                        />

                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedItems['card2-item1'] ? 'max-h-40 mt-3' : 'max-h-0'
                      }`}>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        التحدي: تكمن المشكلة في أن الخطط الغذائية العامة المعتمدة لا تراعي الفروقات الفردية في البيانات البيولوجية بين شخص لآخر، مما يؤدي إلى ضعفها في تحسين صحة المرء.
                        </p>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        الهدف: تطوير نظام ذكي قادر على تحليل البيانات الغذائية والبيولوجية للفرد، وربطها بكفاءة التمثيل الغذائي (الأيض)، وتصميم توصيات غذائية شخصية تحسِّن من كفاءة استهلاك الجسم للطاقة، وتقلل من تراكم الدهون، وتدعم صحة الأعضاء والمناعة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accordion Item 2 */}
                  <div 
                    className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 cursor-pointer"
                    onClick={() => toggleAccordion('card2', 'item2')}
                    style={{ 
                      transform: (hoveredCard === 2 || isMobile) ? 'translateX(0)' : 'translateX(20px)',
                      opacity: (hoveredCard === 2 || isMobile) ? '1' : '0',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm leading-relaxed mr-2 font-medium">
التنبؤ المبكر بخطر وفيات الأجنة باستخدام علم الجينات                        </span>
                        <ChevronDown 
                          className={`w-4 sm:w-5 h-4 sm:h-5 text-emerald-200 flex-shrink-0 transition-transform duration-300 ${
                            expandedItems['card2-item2'] ? 'rotate-180' : ''
                          }`} 
                        />

                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedItems['card2-item2'] ? 'max-h-40 mt-3' : 'max-h-0'
                      }`}>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        التحدي: تكمن المشكلة في عدم القدرة على التنبؤ بدقة بالفئات السكانية الأكثر عرضة للوفاة المبكرة، وفهم الأسباب التي يمكن تفاديها مثل الأمراض المزمنة غير المُدارة أو الحوادث والإصابات.
                        </p>
                                                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        الهدف: تطوير نماذج ذكاء اصطناعي تستند إلى تحليل بيانات متعددة المصادر، بما يتيح بناء سياسات صحية وقائية تستهدف الفئات عالية الخطورة بدقة وفعالية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
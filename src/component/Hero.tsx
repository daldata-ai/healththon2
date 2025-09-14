import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    // Set your target date here (YYYY-MM-DD format)
    const TARGET_DATE = new Date('2025-09-27T00:00:00+03:00');
    
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = TARGET_DATE.getTime() - now.getTime();
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                return { days, hours, minutes, seconds };
            }
            
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Set initial time
        setTimeLeft(calculateTimeLeft());

        // Update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleTelegramClick = () => {
        // Replace with your actual Telegram group link
        window.open('https://t.me/your_group_username', '_blank');
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Floating Action Buttons */}
            <motion.div 
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex gap-3"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2, ease: "backOut" }}
            >
                {/* Telegram Button */}
                <motion.button
                    onClick={handleTelegramClick}
                    className="bg-blue-500 bg-opacity-80 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full hover:bg-blue-600 hover:bg-opacity-90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex items-center gap-2 shadow-lg"
                    aria-label="Join Telegram Group"
                >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">Join Group</span>
                </motion.button>
                
                {/* Mute Button */}
                <motion.button
                    onClick={toggleMute}
                    className="bg-black/20 bg-opacity-60 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 self-end"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                </motion.button>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                {/* Logo/Brand */}
                <motion.div 
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
                >
                    <div className="flex items-center justify-center">
                        <motion.img 
                            src='logo-white.svg' 
                            alt='Logo' 
                            className='h-24 sm:h-32 md:h-40 w-auto' 
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                    {/* Days */}
                    <motion.div 
                        className="flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(255,255,255,0.4)" }}
                    >
                        <motion.div 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                            key={timeLeft.days} // This will trigger re-animation when value changes
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {timeLeft.days.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-gray-300">أيام</div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div 
                        className="flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(255,255,255,0.4)" }}
                    >
                        <motion.div 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                            key={timeLeft.hours}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {timeLeft.hours.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-gray-300">ساعة</div>
                    </motion.div>

                    {/* Minutes */}
                    <motion.div 
                        className="flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: 1.6, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(255,255,255,0.4)" }}
                    >
                        <motion.div 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                            key={timeLeft.minutes}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-gray-300">دقيقة</div>
                    </motion.div>

                    {/* Seconds */}
                    <motion.div 
                        className="flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: 1.8, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(255,255,255,0.4)" }}
                    >
                        <motion.div 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                            key={timeLeft.seconds}
                            initial={{ scale: 1.2, color: "#10b981" }}
                            animate={{ scale: 1, color: "#ffffff" }}
                            transition={{ duration: 0.3 }}
                        >
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-gray-300">ثواني</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Hashtag positioned at bottom of screen */}
            <motion.div 
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.5, ease: "backOut" }}
                whileHover={{ scale: 1.1, y: -5 }}
            >
                <motion.img 
                    src="hash.svg" 
                    alt="Hashtag" 
                    className="h-8 sm:h-10 md:h-12 w-auto"
                    animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
}
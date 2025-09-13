import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Send } from 'lucide-react';

export default function Hero() {
    // Set your target date here (YYYY-MM-DD format)
    const TARGET_DATE = new Date('2026-01-01T00:00:00');
    
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
            <div className="absolute inset-0 z-0">
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
                {/* Dark overlay for better text readability */}
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex gap-3">
                {/* Telegram Button */}
                <button
                    onClick={handleTelegramClick}
                    className="bg-blue-500 bg-opacity-80 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full hover:bg-blue-600 hover:bg-opacity-90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex items-center gap-2 shadow-lg"
                    aria-label="Join Telegram Group"
                >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">Join Group</span>
                </button>
                
                {/* Mute Button */}
                <button
                    onClick={toggleMute}
                    className="bg-black/20 bg-opacity-60 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 self-end"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                </button>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                {/* Logo/Brand */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center justify-center">
                        <img 
                            src='logo-white.svg' 
                            alt='Logo' 
                            className='h-24 sm:h-32 md:h-40 w-auto' 
                        />
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-lg">
                    {/* Days */}
                    <div className="flex flex-col items-center  bg-opacity-40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                            {timeLeft.days.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300">أيام</div>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center  bg-opacity-40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                            {timeLeft.hours.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300">ساعة</div>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col items-center  bg-opacity-40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300">دقيقة</div>
                    </div>

                    {/* Seconds */}
                    <div className="flex flex-col items-center  bg-opacity-40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300">ثواني</div>
                    </div>
                </div>

                {/* Hashtag */}
                <div className="mt-6 sm:mt-8">
                    <p className="text-2xl md:text-3xl text-white font-bold">#عمرك_طويل</p>
                </div>
            </div>
        </div>
    );
}
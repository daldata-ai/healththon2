import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SharePage() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://healthdatathon.fillout.com/t/f1mxoSvUiBus?unique_id=${id}&new=false`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.log('Copy failed');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'انضم إلى جدول الفريق',
          url: shareUrl,
        });
      } catch (e) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <>
    <Helmet>
        <title>دعوة فريق - الداتاثون الصحي</title>
        <meta name="description" content="انضم إلى فريقي في الداتاثون الصحي. شارك الرابط مع أعضاء فريقك." />
    </Helmet>
  <div
    className="min-h-screen bg-dark-green flex items-center justify-center p-6 border-t-4 border-b-4 border-light-green"
    style={{ backgroundColor: 'var(--color-dark-green, #125662)', borderTopColor: 'var(--color-light-green, #afd57f)', borderBottomColor: 'var(--color-light-green, #afd57f)' }}
  >
      <div className="text-center max-w-md w-full">
        {/* Header */}
        <div className="mb-8">
          <div
            className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
            style={{ backgroundColor: 'var(--color-light-green, #afd57f)' }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">دعوة الفريق</h1>
          <p className="text-white">شارك هذا الرابط مع أعضاء فريقك</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full bg-light-green hover:bg-light-green/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 border-2 border-light-green"
            style={{ backgroundColor: 'var(--color-light-green, #afd57f)', borderColor: 'var(--color-light-green, #afd57f)', color: '#fff' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>{typeof navigator.share === 'function' ? 'مشاركة مع الفريق' : 'نسخ الرابط'}</span>
          </button>

          {typeof navigator.share !== 'function' && (
            <button
              onClick={handleCopy}
              className="w-full bg-dark-green hover:bg-light-green/20 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 border-2 border-light-green hover:border-light-green flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--color-dark-green, #125662)', borderColor: 'var(--color-light-green, #afd57f)', color: '#fff' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h8a2 2 0 002 2v8a2 2 0 002 2z" />
              </svg>
              <span>نسخ إلى الحافظة</span>
            </button>
          )}
          
          {copied && (
            <div className="text-center">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-light-green text-white border border-light-green"
                style={{ backgroundColor: 'var(--color-light-green, #afd57f)', borderColor: 'var(--color-light-green, #afd57f)', color: '#fff' }}
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                تم نسخ الرابط بنجاح!
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p
            className="text-light-green text-sm"
            style={{ color: 'var(--color-light-green, #afd57f)' }}
          >
            معرف الفريق: <span className="font-mono font-semibold text-white">{id}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
import Link from 'next/link';
export const Overview = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 text-center p-4">
          <h2 className="text-xl font-semibold"> Advanced AI Chatbot - ASTUCSEC Dev Project</h2>
          <p className="text-white-600">Developed by <span className='font-italic underline'> <Link href='https://github.com/lijnati'>Yegetaneh Firew</Link></span></p>
          <p className="text-gray-600 underline"><Link href='https://github.com/lijnati/ai-chatbot-astucsec-v1'>Star on Github⭐</Link></p>
        </div>
      </div>

    </div>
  );
};

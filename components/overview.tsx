import Link from 'next/link';
export const Overview = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 text-center p-4">
          <h2 className="text-xl font-semibold">AI Chatbot - ASTUCSEC Project</h2>
          <p className="text-white-600">Developed by <span className='font-italic'> <Link href='https://github.com/lijnati'>Yegetaneh Firew</Link></span></p>
          <p className="text-gray-600"><Link href='https://github.com/lijnati/ai-chatbot-astucsec-v1'>Star on Github</Link></p>
        </div>
      </div>

    </div>
  );
};

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-black text-white mb-6 md:mb-0">
            SAMSONG <span className="text-gray-500">E&M</span>
          </div>
          {/* SNS Links Removed */}
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-600 space-y-6 md:space-y-0 leading-relaxed">
          <div className="space-y-1 break-keep">
            <p>상호명 : (주)삼송이엔엠 <span className="mx-1 hidden md:inline">|</span> <br className="md:hidden"/> 대표자 : 이호선</p>
            <p>사업자등록번호 : 114-87-06304</p>
            <p>주소 : 서울 강남구 학동로3길 27 메리디엠타워 B101</p>
          </div>
          <div className="flex flex-col md:items-end space-y-1">
             <p>TEL : 02-599-1415</p>
             <p>Email : samsongenm@tpenm.com</p>
             <p className="mt-4 text-gray-700">Copyright © 2024 SAMSONG E&M All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
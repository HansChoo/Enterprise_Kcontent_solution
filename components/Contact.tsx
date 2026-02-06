import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, X, Loader2, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    interest: '온라인 사내 노래경연대회',
    message: ''
  });
  
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================================================================
  // [구글 폼 연동 설정 가이드]
  // 1. 스프레드시트 상단 메뉴 [도구] -> [설문지 관리] -> [설문지 수정] 클릭
  // 2. 설문지 편집 화면 우측 상단 점 3개 -> '미리 채워진 링크 가져오기' 클릭
  // 3. 각 질문에 'test' 입력 후 '링크 생성' -> '링크 복사'
  // 4. 복사한 링크를 분석하여 아래 변수들을 채워주세요.
  // =========================================================================================

  const GOOGLE_FORM_ACTION_URL: string = ""; 
  // 예: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc.../formResponse"

  const FIELD_IDS = {
    company:  "entry.000000000",
    name:     "entry.000000000",
    phone:    "entry.000000000",
    email:    "entry.000000000",
    interest: "entry.000000000",
    message:  "entry.000000000",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreePrivacy) {
      alert("원활한 상담을 위해 개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);

    // 1. 구글 폼 ID가 설정되어 있는 경우 (자동 전송)
    if (GOOGLE_FORM_ACTION_URL && GOOGLE_FORM_ACTION_URL.length > 10) {
      const formBody = new FormData();
      
      formBody.append(FIELD_IDS.company, formData.company);
      formBody.append(FIELD_IDS.name, formData.name);
      formBody.append(FIELD_IDS.phone, formData.phone);
      formBody.append(FIELD_IDS.email, formData.email);
      formBody.append(FIELD_IDS.interest, formData.interest);
      formBody.append(FIELD_IDS.message, formData.message);
      
      try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
          method: 'POST',
          body: formBody,
          mode: 'no-cors'
        });
        
        // 전송 성공 처리
        setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccessModal(true);
        }, 1500);
      } catch (err) {
        console.error("Form submission error", err);
        setIsSubmitting(false);
        alert("전송 중 오류가 발생했습니다. 이메일로 문의 부탁드립니다.");
      }
    } 
    // 2. 구글 폼 ID가 설정되지 않은 경우 (메일 클라이언트 열기 Fallback)
    else {
      setTimeout(() => {
        setIsSubmitting(false);
        
        const subject = `[기업 솔루션 문의] ${formData.company} - ${formData.name}님`;
        const body = `
[문의 내용]
회사명: ${formData.company}
담당자: ${formData.name}
연락처: ${formData.phone}
이메일: ${formData.email}
관심 솔루션: ${formData.interest}

문의 내용:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:samsongenm@tpenm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }, 1000);
    }
  };

  const handleCopyContent = () => {
    const text = `
[문의 내용]
회사명: ${formData.company}
담당자: ${formData.name}
연락처: ${formData.phone}
이메일: ${formData.email}
관심 솔루션: ${formData.interest}
내용: ${formData.message}
    `.trim();
    
    navigator.clipboard.writeText(text);
    alert("문의 내용이 복사되었습니다.\n이메일이나 메신저에 붙여넣기 해주세요.");
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      interest: '온라인 사내 노래경연대회',
      message: ''
    });
    setAgreePrivacy(false);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 break-keep leading-tight">
              새로운 기업 문화,<br/>
              <span className="text-blue-500">지금 시작하세요.</span>
            </h2>
            <p className="text-gray-400 mb-10 md:mb-12 leading-relaxed break-keep">
              인사, 복지, 기업문화 담당자님.<br className="hidden md:block"/>
              궁금한 점이 있으시다면 언제든 문의해주세요.<br/>
              담당자가 확인 후 신속하게 답변 드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-blue-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">전화 문의</h4>
                  <p className="text-gray-400 text-sm md:text-base">02-559-1415</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-blue-500 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">이메일 문의</h4>
                  <p className="text-gray-400 text-sm md:text-base break-all">samsongenm@tpenm.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-blue-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">오시는 길</h4>
                  <p className="text-gray-400 text-sm md:text-base break-keep">서울시 강남구 학동로23길 27 메디오빌딩 B1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">문의하기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">회사명 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="company" required
                    className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    value={formData.company} onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">담당자명 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="name" required
                    className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    value={formData.name} onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">연락처 <span className="text-red-500">*</span></label>
                <input 
                  type="tel" name="phone" required
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.phone} onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">이메일 <span className="text-red-500">*</span></label>
                <input 
                  type="email" name="email" required
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.email} onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">관심 솔루션</label>
                <select 
                  name="interest"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-sm"
                  value={formData.interest} onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option>온라인 사내 노래경연대회</option>
                  <option>사내 벤처/혁신 아이디어 공모</option>
                  <option>임직원 참여 브랜드 송 제작</option>
                  <option>정년 퇴임자 예우 '명예의 기록'</option>
                  <option>임직원 세대공감 듀엣 프로젝트</option>
                  <option>조직문화 활성화 숏폼 챌린지</option>
                  <option>기타 / 전체 제안서 요청</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">문의 내용</label>
                <textarea 
                  name="message" rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm"
                  value={formData.message} onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="궁금하신 내용이나 요청사항을 자유롭게 적어주세요."
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                    />
                    <div className="w-5 h-5 border-2 border-zinc-600 rounded bg-zinc-800 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
                    <CheckCircle2 size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <div className="text-xs text-gray-500 leading-snug select-none group-hover:text-gray-400 transition-colors">
                    <span className="text-blue-500 font-bold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.<br/>
                    <span className="text-[10px] opacity-70">수집항목: 회사명, 성명, 연락처, 이메일 | 목적: 문의 상담 및 답변 | 보유기간: 1년</span>
                  </div>
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 ${
                  isSubmitting ? 'bg-zinc-700 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <span>문의 보내기</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 max-w-sm w-full shadow-2xl relative text-center">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-blue-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">문의가 접수되었습니다</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed break-keep">
              담당자가 내용 확인 후 24시간 이내에<br/>
              입력하신 연락처로 답변 드리겠습니다.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleCopyContent}
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-700 text-sm"
              >
                <Copy size={16} />
                <span>문의 내용 복사하기</span>
              </button>
              
              <button 
                onClick={handleCloseModal}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
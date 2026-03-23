export default function SpnLandingPage() {
  const benefits = [
    ["아마존 셀러 대상", "최대 25% 할인"],
    ["선착순", "무료 규정 상담 제공"],
    ["빠른 마켓 진입을 위한", "Fast Track 검토"],
  ];

  const painPoints = [
    "아마존 마켓플레이스별 다른 글로벌 규정에 어떻게 대응해야 할지 막막함",
    "라벨링 요구사항과 원료 검토에 어려움을 겪고 있음",
    "필수 서류 누락으로 통관이 지연됨",
    "수입통관 지원을 위한 IOR(수입자)이 없음",
  ];

  const solutions = [
    ["타겟 국가 및 마켓플레이스별", "인증 지원"],
    ["마켓플레이스 국가의 요구사항에", "맞춘 라벨 검토 및 라벨 제작"],
    "국가별 통관 및 수입 지원",
    "아마존 마케팅 전략 수립 및 실행",
    "인플루언서 마케팅 캠페인",
    ["셀러 성장을 위한", "퍼포먼스 마케팅 캠페인"],
  ];

  const reasons = [
    {
      titleLines: ["다양한 카테고리의", "아마존 셀러 지원 경험 보유"],
      tags: ["화장품", "식품", "건강기능식품", "OTC(일반의약품)", "전자기기"],
    },
    {
      titleLines: ["인증, 라벨, 통관, 마케팅까지", "End-to-End 서비스"],
      tags: [],
    },
    {
      titleLines: ["빠르고 실무적인 실행력"],
      tags: [],
    },
    {
      titleLines: [
        "미국, 캐나다, 영국, EU,",
        "일본, UAE(두바이), 호주,",
        "싱가포르 등 글로벌 커버리지",
      ],
      tags: [],
    },
    {
      titleLines: ["아마존 셀러의 런칭과", "스케일링에 최적화된 구조"],
      tags: [],
    },
  ];

  const offers = [
    "전체 참여자 15% 할인 (인증/등록 서비스)",
    "선착순 50개 브랜드: 최대 25% 할인 (상담 참여 시)",
    "Fast Track 우선 검토",
    "원료 검토 무료 (제품 1 SKU)",
  ];

  const contactItems = [
    { label: "주요 연락처", value: "info@admtmax.com" },
    { label: "전화", value: "02-6007-2123" },
    { label: "응답 시간", value: "24시간 이내" },
  ];

  const featureCards = ["셀러의 주요 고민", "End-to-End 지원", "전문가 직접 상담"];

  const processSteps = [
    "마켓플레이스 전문가가 문의 내용을 검토합니다",
    "24시간 이내에 1차 답변을 받게 됩니다",
    "카테고리와 타겟 마켓플레이스에 따라 다음 단계를 안내해드립니다",
  ];

  const countryRows = [
    ["🇺🇸 미국", "🇨🇦 캐나다", "🇬🇧 영국", "🇪🇺 EU"],
    ["🇯🇵 일본", "🇦🇪 UAE(두바이)", "🇦🇺 호주", "🇸🇬 싱가포르"],
  ];

  const quickSteps = [
    ["1", "기본 정보 입력"],
    ["2", "제품 및 타겟 시장 선택"],
    ["3", "필수 서류 제출 후 접수 완료"],
  ];

  const targetSellerItems = [
    "글로벌 마켓 진출을 준비 중인 브랜드",
    "인증, 라벨, 통관을 한 번에 해결하고 싶은 셀러",
    "빠르게 런칭 가능 여부를 확인하고 싶은 경우",
    "미국, EU, 일본 등 다국가 확장을 고려 중인 브랜드",
  ];

  const ctaLink = "#contact";
  const emailLink = "mailto:info@admtmax.com?subject=Amazon Marketplace Inquiry&body=안녕하세요,%0D%0A문의드립니다.";

  const renderTextLines = (value) => {
    if (Array.isArray(value)) {
      return value.map((line, idx) => <div key={idx}>{String(line)}</div>);
    }
    return <>{String(value)}</>;
  };

  const renderReasonCard = (reason, idx) => (
    <div key={idx} className="rounded-3xl bg-[#F9FAFB] p-5 ring-1 ring-[#EEF0F3]">
      <div className="text-[15px] font-semibold leading-6 text-[#191F28]">
        {reason.titleLines.map((line, lineIdx) => (
          <div key={lineIdx}>{line}</div>
        ))}
      </div>
      {Array.isArray(reason.tags) && reason.tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {reason.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-[#EEF0F3] px-3 py-1 text-xs font-medium text-[#6B7684]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F4F6] text-[#191F28]">
      <section className="relative overflow-hidden bg-[#131A22] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(255,184,77,0.14),transparent_18%),radial-gradient(circle_at_96%_0%,rgba(255,153,0,0.10),transparent_16%)]" />
        <div className="absolute right-[-100px] top-[-90px] h-[360px] w-[360px] rounded-full bg-[#FFB84D]/18 blur-3xl" />
        <div className="absolute right-[7%] top-[3%] h-[220px] w-[220px] rounded-full bg-[#FF9900]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                <span>ADMTMAX GROUP</span>
                <span className="mx-2 text-white/40">•</span>
                <span className="text-white/70">아마존 마켓플레이스 확장 솔루션</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl md:leading-[1.06]">
                아마존 글로벌 진출,
                <span className="mt-2 block text-[#FFB84D]">한 번에 해결하세요</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-[20px]">
                아마존 마켓플레이스 전반에 걸쳐 국가별 인증, 라벨링, 통관, 마케팅 지원 제공
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {countryRows.map((row, idx) => (
                  <div key={idx} className="flex flex-wrap gap-2.5">
                    {row.map((country) => (
                      <span
                        key={country}
                        className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                ))}
                <p className="text-sm text-white/70 md:text-base">등으로 확장하는 셀러를 위한 서비스</p>
              </div>

              <p className="mt-2 text-sm font-medium text-[#FFB84D] md:text-base">
                아마존 마켓플레이스 진입과 확장을 추진하는 글로벌 브랜드의 신뢰를 받는 파트너
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm">
                  자동 응답이 아닌 실제 담당자의 응답
                </div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm">
                  24시간 이내 1차 회신
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {benefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-[24px] bg-white/10 p-5 shadow-lg ring-1 ring-white/10 backdrop-blur-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB84D]">
                      혜택 {idx + 1}
                    </div>
                    <div className="mt-3 text-[15px] font-semibold leading-6 text-white">
                      {renderTextLines(item)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={ctaLink}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FF9900] px-6 py-4 text-base font-semibold text-[#111111] shadow-lg transition hover:translate-y-[-1px]"
                >
                  무료 상담 신청
                </a>
                <a
                  href="https://www.admtmax.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  프로젝트 시작하기
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[32px] bg-white p-6 text-[#191F28] shadow-2xl md:p-7">
                <div className="flex items-start justify-between gap-3 border-b border-[#E5E8EB] pb-5">
                  <div>
                    <div className="text-sm font-semibold text-[#8B95A1]">한정 캠페인 혜택</div>
                    <div className="mt-1 text-[28px] font-bold tracking-[-0.02em]">셀러 전용 혜택</div>
                  </div>
                  <div className="rounded-full bg-[#FFF3DF] px-3 py-1 text-xs font-semibold text-[#B56A00]">
                    한정
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {offers.map((item, idx) => (
                    <div key={idx} className="rounded-3xl bg-[#F9FAFB] p-4 ring-1 ring-[#EEF0F3]">
                      <div className="text-[15px] font-semibold leading-6 text-[#191F28]">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl bg-[#232F3E] p-5 text-white">
                  <div className="text-sm font-semibold text-[#FFB84D]">지금 신청하세요</div>
                  <div className="mt-1 text-sm leading-6 text-white/90">한정 수량으로 선착순 마감됩니다.</div>
                </div>

                <div className="mt-4 rounded-3xl border border-[#EEF0F3] bg-[#FCFCFD] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#232F3E] text-sm font-semibold text-white">
                      AM
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#191F28]">ADMTMAX GROUP 팀의 직접 가이드</div>
                      <div className="text-sm text-[#6B7684]">
                        제품 유형과 타겟 마켓플레이스를 기준으로
                        <br />
                        실제 전문가가 문의를 검토합니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((title) => (
            <div key={title} className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-[#E9EDF1]">
              <div className="text-lg font-semibold tracking-[-0.02em] text-[#191F28]">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-[#E9EDF1]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9900]">셀러 고민</div>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">이런 문제를 겪고 계신가요?</h2>

            <div className="mt-6 space-y-3">
              {painPoints.map((item, idx) => (
                <div key={idx} className="rounded-3xl bg-[#F9FAFB] p-5 ring-1 ring-[#EEF0F3]">
                  <div className="text-[15px] font-semibold leading-6 text-[#191F28]">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-[#FFF8ED] p-5 ring-1 ring-[#FFE5B8]">
              <div className="text-sm font-semibold text-[#B56A00]">셀러들이 흔히 겪는 상황</div>
              <p className="mt-2 text-sm leading-6 text-[#5C6675]">
                대부분의 셀러는 글로벌 아마존 마켓플레이스로 확장하기 전에 이러한 장벽을 마주합니다.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#232F3E] p-8 text-white shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFB84D]">서비스</div>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em]">
              아마존 글로벌 진출,
              <br />
              한 번에 해결하는 서비스
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutions.map((item, idx) => (
                <div key={idx} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                  <div className="text-[15px] font-semibold leading-6 text-white">{renderTextLines(item)}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-[#FF9900] p-5 text-[#111111] shadow-lg">
              <div className="text-sm font-semibold">End-to-End 지원</div>
              <p className="mt-2 text-sm leading-6 text-[#2A2A2A]">
                셀링에 집중하세요. 에이디엠티맥스가 인증, 라벨, 통관은 물론 아마존 마케팅,
                <br />
                인플루언서 마케팅, 퍼포먼스 캠페인까지 마켓플레이스별로 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-8">
        <div className="rounded-[36px] bg-white p-8 shadow-sm ring-1 ring-[#E9EDF1] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9900]">왜 ADMTMAX인가</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">아마존 글로벌 확장을 위한 파트너</h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason, idx) => renderReasonCard(reason, idx))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[#131A22] p-8 text-white shadow-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFB84D]">프로모션</div>
              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em]">
                전담팀과 함께 아마존 확장을 시작하세요
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                명확한 혜택, 간단한 절차, 실제 시장 진입 전문가의
                <br />
                직접 지원을 제공합니다.
              </p>

              <div className="mt-5 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-[#FFB84D]">문의 후 진행 절차</div>
                <div className="mt-2 text-sm leading-6 text-white/80">
                  {processSteps.map((step, idx) => (
                    <div key={idx}>
                      {idx + 1}. {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={ctaLink}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#FF9900] px-6 py-4 text-base font-semibold text-[#111111] shadow-lg"
                >
                  마켓플레이스 검토 요청
                </a>
                <a
                  href={ctaLink}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-white/15"
                >
                  무료 상담 신청
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-[#E9EDF1]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9900]">문의하기</div>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">프로젝트에 대해 상담해보세요</h2>

            <div className="mt-6 space-y-3">
              {contactItems.map((item) => (
                <div key={item.label} className="rounded-3xl bg-[#F9FAFB] p-5 ring-1 ring-[#EEF0F3]">
                  <div className="text-sm font-semibold text-[#8B95A1]">{item.label}</div>
                  <div className="mt-1 text-[15px] font-semibold text-[#191F28]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-[#232F3E] p-5 text-white">
              <div className="text-sm font-semibold text-[#FFB84D]">공유해주실 내용</div>
              <p className="mt-2 text-sm leading-6 text-white/80">
                제품 카테고리, 타겟 마켓, 제품 링크, 출시 일정, 필요한 지원 범위,
                <br />
                현재 마켓플레이스 진행 상태(입점 여부)를 알려주세요.
              </p>
            </div>

            <div className="mt-6 rounded-3xl bg-[#FFF8ED] p-5 ring-1 ring-[#FFE5B8]">
              <div className="text-sm font-semibold text-[#B56A00]">직접 응답 약속</div>
              <p className="mt-2 text-sm leading-6 text-[#5C6675]">
                모든 문의는 팀원이 직접 검토하며, 마켓플레이스, 제품 카테고리,
                <br />
                지원 범위를 기준으로 적절한 담당자에게 배정됩니다.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#131A22] p-8 text-white shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFB84D]">빠른 접수</div>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">복잡한 입력 없이 빠르게 접수하세요</h2>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              외부 제출 페이지에서 약 3분 내 접수가 완료되며, 제출 후 실제 담당자가 검토를 진행합니다.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">빠른 접수 안내</h3>
                <div className="mt-5 space-y-4">
                  {quickSteps.map(([step, text]) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#111111]">
                        {step}
                      </div>
                      <p className="pt-1 text-sm text-white/80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">이런 셀러에게 적합합니다</h3>
                <div className="mt-5 space-y-3 text-sm text-white/80">
                  {targetSellerItems.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9900] text-xs font-semibold text-[#111111]">
                AM
              </div>
              <div>
                <div className="text-sm font-semibold text-white">ADMTMAX 마켓플레이스 전문가 검토</div>
                <div className="text-xs text-white/65">초기 검토는 자동 분배가 아닌 전문가가 직접 진행합니다</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/FEBFRWmYS3YP9Bi28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#FF9900] px-6 py-4 text-base font-semibold text-[#111111] transition hover:opacity-90 sm:flex-1"
              >
                3분 만에 필수 서류 제출하기
              </a>
              <a
                href={emailLink}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:flex-1"
              >
                이메일로 바로 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

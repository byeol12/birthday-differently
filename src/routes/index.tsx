import { createFileRoute } from '@tanstack/react-router'
import {
  Accessibility,
  ArrowDown,
  ArrowUpRight,
  CakeSlice,
  Check,
  Copy,
  Earth,
  Heart,
  Languages,
  Share2,
  Sparkles,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: BirthdayGiving,
})

const actions = [
  {
    category: '혼인평등',
    title: '모두의 결혼',
    description:
      '누구나 사랑하는 사람과 동등하게 결혼할 수 있는 사회를 만드는 시민 캠페인이에요. 혼인평등법 제정을 위한 활동을 이어가고 있어요.',
    href: 'https://secure.donus.org/marriageforallkr/pay/step1',
    tone: 'pink',
    Icon: Heart,
  },
  {
    category: '농인 · 성소수자',
    title: '한국농인LGBT+',
    description:
      '농인과 성소수자의 정체성이 만나는 자리에서 활동하는 인권단체예요. 편견 없는 성소수자 한국수어를 만들고 농인의 접근권을 알려요.',
    href: 'https://deaflgbt.kr/support/',
    tone: 'violet',
    Icon: Languages,
  },
  {
    category: '유니세프 · 긴급구호',
    title: '네팔 홍수 긴급지원',
    description:
      '홍수와 산사태로 어려움을 겪는 네팔의 어린이와 가족에게 식수, 위생용품, 의료 지원이 닿도록 돕는 긴급구호 후원이에요.',
    href: 'https://www.unicef.or.kr/campaign/26nepalflood/dn?trackcode=26nepalflood_official_hp_news',
    tone: 'blue',
    Icon: Earth,
  },
  {
    category: '이동권',
    title: '계단뿌셔클럽',
    description:
      '휠체어 이용자와 유아차, 고령자 등 이동약자를 위해 계단과 경사로 정보를 모으고 접근 가능한 길찾기 환경을 만들어요.',
    href: 'https://secure.donus.org/staircrusherclub/pay/step1',
    tone: 'orange',
    Icon: Accessibility,
  },
]

const freeActions = [
  '안 쓰는 물건을 필요한 곳에 나누기',
  '오래 생각난 사람에게 먼저 안부 묻기',
  '동네의 작은 가게에 다정한 후기 남기기',
  '가까운 곳에서 한 시간 봉사하기',
]

function BirthdayGiving() {
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const root = pageRef.current
    if (!root) return

    const revealEls = root.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copyAddress = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const sharePage = async () => {
    if (navigator.share) {
      await navigator
        .share({
          title: '생일 대신 마음을 나눠주세요',
          text: '올해 생일에는 선물 대신 작은 후원을 부탁해요.',
          url: window.location.href,
        })
        .catch(() => undefined)
      return
    }

    await copyAddress()
  }

  return (
    <main id="top" className="birthday-page" ref={pageRef}>
      <nav className="topbar" aria-label="페이지 메뉴">
        <a className="brand" href="#top">
          <span className="brand-mark"><Heart size={15} fill="currentColor" /></span>
          생일 대신 마음
        </a>
        <button className="share-button" type="button" onClick={sharePage}>
          <Share2 size={16} />
          <span>함께 나누기</span>
        </button>
        <span
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="date-sticker"><CakeSlice size={17} /> 2026년 9월 25일</p>
          <p className="hero-kicker"><Sparkles size={15} /> 올해의 작은 생일 소원</p>
          <h1 id="hero-title">
            선물 대신
            <span>기부를 부탁해</span>
          </h1>
          <p className="hero-intro">
            필요한 물건은 이미 충분해서, 올해는 조금 다른 방식으로 축하받고 싶어요.
            제가 평소 마음 쓰던 네 곳 중 <strong>마음이 가는 곳에 부담 없는 만큼</strong>
            나눠주세요. 그걸로 충분해요.
          </p>
          <a className="scroll-link" href="#donations">
            마음 둘 곳 보기 <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="sunburst" />
          <div className="gift-box">
            <span className="gift-bow gift-bow-left" />
            <span className="gift-bow gift-bow-right" />
            <span className="gift-lid" />
            <div className="gift-body">
              <Heart size={58} fill="currentColor" strokeWidth={1.5} />
              <span>마음을<br />담아</span>
            </div>
          </div>
          <p className="art-note">포장지는 없지만<br />오래 남는 선물</p>
        </div>
      </section>

      <div className="wish-strip" aria-label="생일 소원 요약">
        <span>물건은 가볍게</span><Heart size={18} />
        <span>부담도 가볍게</span><Sparkles size={18} />
        <span>마음은 오래</span>
      </div>

      <section className="donations" id="donations" aria-labelledby="donations-title">
        <header className="section-heading reveal">
          <p className="section-label">마음 둘 곳, 네 곳</p>
          <h2 id="donations-title">끌리는 마음을<br />따라 골라주세요.</h2>
          <p>
            누르면 각 단체의 공식 후원 페이지로 이동해요. 이 페이지에서는 금액도,
            개인정보도 받지 않아요.
          </p>
        </header>

        <div className="ticket-list">
          {actions.map(({ Icon, ...action }, index) => (
            <a
              className={`ticket ticket-${action.tone} reveal`}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              key={action.title}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="ticket-number">0{index + 1}</span>
              <span className="ticket-icon"><Icon size={26} strokeWidth={2.2} /></span>
              <span className="ticket-content">
                <span className="ticket-category">{action.category}</span>
                <strong>{action.title}</strong>
                <span className="ticket-description">{action.description}</span>
              </span>
              <span className="ticket-action">
                후원 페이지 <span className="arrow-circle"><ArrowUpRight size={20} /></span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="free-section reveal" aria-labelledby="free-title">
        <p className="section-label">돈이 들지 않아도 좋아요</p>
        <h2 id="free-title">다정함에는<br />여러 가지 모양이 있으니까.</h2>
        <div className="free-list">
          {freeActions.map((action, index) => (
            <div key={action}>
              <span>0{index + 1}</span>
              <p>{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="closing reveal" aria-labelledby="closing-title">
        <span className="closing-heart"><Heart size={42} strokeWidth={1.6} /></span>
        <p className="section-label">이게 제 생일 소원의 전부예요</p>
        <h2 id="closing-title">내 삶에 있어줘서<br />고마워요.</h2>
        <p>
          사실 함께해주는 마음만으로 이미 충분한 선물이에요. 이 중 하나가 누군가의
          하루를 조금 더 나아지게 한다면, 제 생일 소원은 이루어진 셈이에요.
        </p>
        <button className="copy-button" type="button" onClick={copyAddress}>
          {copied ? <Check size={17} /> : <Copy size={17} />}
          {copied ? '주소를 복사했어요' : '이 페이지 주소 복사하기'}
        </button>
      </section>

      <footer>
        <span>포장지 대신 마음으로 만들었어요.</span>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </main>
  )
}

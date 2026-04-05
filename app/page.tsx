'use client'
import Image from "next/image";
import './style.css';
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { SiThreads, SiNote } from "react-icons/si";

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <div className="my-white-bg noto-serif py-2">
          <section id="hero" className="min-h-screen pt-16 w-full flex items-center justify-center">
            <h2>Home</h2>
          </section>

          {/* Aboutセクション */}
          <About/>

          {/* playerセクション */}
          <Player/>

          {/* setterセクション */}
          <Setter/>

          {/* Projectsセクション */}
          {/*
          <section id="projects" className="my-prpl-bg section_detail">
            <h2>Projects</h2>
            <div className="projects-grid">
              <article className="project-card">
                <img src="/project1.jpg" alt="プロジェクト1" />
                <h3>プロジェクト名</h3>
                <p>説明</p>
                <a href="#">View More</a>
              </article>
            </div>
          </section>
          */}

          {/* Contactセクション */}
          <Contact/>

        </div>
      </main>

      <footer>
        <p>&copy; 2026 Yusuke SUGIMOTO</p>
      </footer>
    </>
  )
}


export function About(){
  return(
    <section id="about" className="my-prpl-bg section_detail">
      <h1>About Me</h1>
      <div className="mx-6 px-4 py-4 my-white-bg">
        <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">　2006年6月19日生まれ。2015年にクライミングを始め、翌年からクライミングスクールで本格的に練習を始める。<br/>　ユースC(現在でいうU14)からユース選手権に出場し、リードユース選手権は2度目、ボルダーユース選手権は3度目で決勝に進出する。</p>
          </div>
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2023_B_BJC_S1.jpg"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2023_B_BJC_S1.jpg"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">　世界ユースに出場できる年齢になったタイミングで3種目のトレーニングを始め、2020,2021年度のユース日本代表に3種目で選出される。その後はボルダーとリードの2種目に専念し、23年にボルダーのシニア日本代表に、24年に世界ユースのリード種目で優勝している。</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">自己紹介文...</p>
          </div>
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2023_B_BJC_S1.jpg"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact(){
  return(
    <section id="contact" className="my-prpl-bg section_detail">
      <h1>Contact</h1>
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com/yusuke5875"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition"
          aria-label="Instagramを開く"
        >
          <FaInstagram className="h-6 w-6" aria-hidden="true" />
        </a>

        <a
          href="https://www.threads.net/@yusuke5875"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition"
          aria-label="Instagramを開く"
        >
          <SiThreads className="h-6 w-6" aria-hidden="true" />
        </a>

        <a
          href="https://note.com/ysk_5875"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition"
          aria-label="Instagramを開く"
        >
          <SiNote className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (sectionId: string) =>{
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64
      const offsetPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return(
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gray-800"
          >
            MyPortfolio
          </button>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('player')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Player
            </button>
            <button
              onClick={() => scrollToSection('setter')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Setter
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
          </div>

          {/* ハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('player')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Player
            </button>
            <button
              onClick={() => scrollToSection('setter')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Setter
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Player(){
  return(
    <section id="player" className="my-prpl-bg section_detail">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1>Player</h1>
        <PlayerStyle/>
        <PlayerTimeline/>
      </div>
    </section>
  )
}

export function PlayerStyle() {

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>Style</h2>
      </div>
      <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">　2006年6月19日生まれ。2015年にクライミングを始め、翌年からクライミングスクールで本格的に練習を始める。<br/>　ユースC(現在でいうU14)からユース選手権に出場し、リードユース選手権は2度目、ボルダーユース選手権は3度目で決勝に進出する。</p>
          </div>
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2023_B_BJC_S1.jpg"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
    </div>
  )
}

export function PlayerTimeline() {
  const events = [
    { year: '2026', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 7位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2025', month:'6' , competition: 'ボルダーワールドカップ', description: 'インスブルック 10位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2025', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 4位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2024', month:'8' , competition: '世界ユース選手権 リード', description: '貴陽 1位' ,type: "international", discipline: "lead", detail: "detail"},
    { year: '2024', month:'5' , competition: '日本ユース選手権 リード', description: '盛岡 3位' ,type: "national", discipline: "lead", detail: "detail"},
    { year: '2023', month:'12' , competition: 'アジアカップ ボルダー', description: 'リヤド 3位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2023', month:'8' , competition: '世界ユース選手権 ボルダー', description: 'ソウル 4位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2023', month:'6' , competition: '日本ユース選手権 ボルダー', description: '倉吉 2位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2021', month:'12' , competition: '日本ユース選手権 ボルダー', description: '倉吉 1位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2021', month:'8' , competition: '世界ユース選手権 スピード', description: 'ヴォロネジ 3位' ,type: "international", discipline: "speed", detail: "detail"},
    { year: '2021', month:'3' , competition: '日本ユース選手権 スピード', description: '亀岡 1位' ,type: "national", discipline: "speed", detail: "detail"},
    { year: '2020', month:'11' , competition: '日本ユース選手権 ボルダー', description: '葛飾 2位' ,type: "national", discipline: "boulder", detail: "detail"},
  ]
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null)
  const handleEventHover = (state: string, index: number) => {
    switch(state){
      case "enter":
        setHoveredIndex(index);
        break;
      case "leave":
        setHoveredIndex(null);
        break;
    }
  }

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>TimeLine</h2>
      </div>
      <div className="relative">
        {/* 縦線 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
        {/* イベント */}
        {events.map((event, index) => (
          <div key={index}>
            <div key={index} className="px-4 py-4 flex justify-between items-center items-stretch w-full">
              {event.type === "national" ? (
                <>
                  <PlayerTimeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                  <PlayerTimeline_Dot/>
                  <PlayerTimeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                </>
              ) : (
                <>
                  <PlayerTimeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                  <PlayerTimeline_Dot/>
                  <PlayerTimeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PlayerTimeline_Detail({hovered, detail}: PlayerTimeline_DetailProps){
  return(
    <div className="w-11/24 overflow-hidden rounded-lg">
      {hovered ? (
        <div className={"flex items-center justify-center relative h-full transition-all duration-300 cursor-pointer bg-white shadow-xl scale-105"}>
          <p className={"mx-5 text-sm"}>{detail}</p>
        </div>
      ):(
        <div/>
      )}
    </div>
  )
}

interface PlayerTimeline_DetailProps{
  hovered: boolean
  detail: string
}

export function PlayerTimeline_Dot(){
  return(
    <div className="w-2/24 flex justify-center items-center">
    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
    </div>
  )
}


export function PlayerTimeline_Event({year, month, competition, description, discipline, left, onHoverChange, index}: PlayerTimeline_EventProps){
  return(
    <div
    onMouseEnter={() => onHoverChange("enter", index)}
    onMouseLeave={() => onHoverChange("leave", index)}
    className={`w-11/24 ${left?"text-right pl-8":"text-left pr-8"}`}
    >
      <h3 className={`text-3xl font-bold text-blue-600 ${discipline==='boulder'?"text-yellow-400":discipline==='lead'?"text-green-600":"text-red-400"}`}>{year + "." + month}</h3>
      <h4 className={`text-xl font-semibold mt-2`}>{competition}</h4>
      <p className="text-gray-600 mt-1 text-xl">{description}</p>
    </div>
  )

}

interface PlayerTimeline_EventProps{
  year: string
  month: string
  competition: string
  description: string
  discipline: string
  left: boolean
  onHoverChange: (state: string, index: number) => void
  index: number
}

export function Setter(){
  return(
    <section id="setter" className="my-prpl-bg section_detail">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1>Setter</h1>
        <SetterStyle/>
        <SetterTimeline/>
      </div>
    </section>
  )
}

export function SetterStyle() {

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>Style</h2>
      </div>
      <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">　2006年6月19日生まれ。2015年にクライミングを始め、翌年からクライミングスクールで本格的に練習を始める。<br/>　ユースC(現在でいうU14)からユース選手権に出場し、リードユース選手権は2度目、ボルダーユース選手権は3度目で決勝に進出する。</p>
          </div>
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2023_B_BJC_S1.jpg"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
    </div>
  )
}

export function SetterTimeline() {
  const events = [
    { year: '2025', month:'10' , competition: '高校生選手権 東海合同県予選会', description: 'チーフルートセッター' ,type: "national", discipline: "lead", detail: "detail"},
    { year: '2025', month:'8' , competition: '全国中学生ボルダー競技大会', description: 'ルートセッター' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2024', month:'8' , competition: '全国中学生ボルダー競技大会', description: 'ルートセッター' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2024', month:'3' , competition: 'C級ルートセッター 取得', description: 'ライセンス' ,type: "national", discipline: "lead", detail: "detail"},
  ]
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null)
  const handleEventHover = (state: string, index: number) => {
    switch(state){
      case "enter":
        setHoveredIndex(index);
        break;
      case "leave":
        setHoveredIndex(null);
        break;
    }
  }

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>TimeLine</h2>
      </div>
      <div className="relative">
        {/* 縦線 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
        {/* イベント */}
        {events.map((event, index) => (
          <div key={index}>
            <div key={index} className="px-4 py-4 flex justify-between items-center items-stretch w-full">
              {event.type === "national" ? (
                <>
                  <SetterTimeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                  <SetterTimeline_Dot/>
                  <SetterTimeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                </>
              ) : (
                <>
                  <SetterTimeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                  <SetterTimeline_Dot/>
                  <SetterTimeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SetterTimeline_Detail({hovered, detail}: SetterTimeline_DetailProps){
  return(
    <div className="w-11/24 overflow-hidden rounded-lg">
      {hovered ? (
        <div className={"flex items-center justify-center relative h-full transition-all duration-300 cursor-pointer bg-white shadow-xl scale-105"}>
          <p className={"mx-5 text-sm"}>{detail}</p>
        </div>
      ):(
        <div/>
      )}
    </div>
  )
}

interface SetterTimeline_DetailProps{
  hovered: boolean
  detail: string
}

export function SetterTimeline_Dot(){
  return(
    <div className="w-2/24 flex justify-center items-center">
    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
    </div>
  )
}


export function SetterTimeline_Event({year, month, competition, description, discipline, left, onHoverChange, index}: SetterTimeline_EventProps){
  return(
    <div
    onMouseEnter={() => onHoverChange("enter", index)}
    onMouseLeave={() => onHoverChange("leave", index)}
    className={`w-11/24 ${left?"text-right pl-8":"text-left pr-8"}`}
    >
      <h3 className={`text-3xl font-bold text-blue-600 ${discipline==='boulder'?"text-yellow-400":discipline==='lead'?"text-green-600":"text-red-400"}`}>{year + "." + month}</h3>
      <h4 className={`text-xl font-semibold mt-2`}>{competition}</h4>
      <p className="text-gray-600 mt-1 text-xl">{description}</p>
    </div>
  )

}

interface SetterTimeline_EventProps{
  year: string
  month: string
  competition: string
  description: string
  discipline: string
  left: boolean
  onHoverChange: (state: string, index: number) => void
  index: number
}
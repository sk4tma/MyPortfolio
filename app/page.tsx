//import Image from "next/image";
'use client'
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          {/*
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          */}
        </nav>
      </header>

      <main>
        <div className="min-h-screen pt-16 w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Home</h1>
        </div>
        <div className="text-xl">
          {/* Aboutセクション */}
          <section id="about" className="p-2 m-4 my-prpl-bg">
            <h2 className="text-4xl text-center">About Me</h2>
            <p className="">自己紹介文...</p>
          </section>

          <PlayerTimeline/>

          {/* setterセクション */}
          <section id="setter" className="px-2 py-2 mx-4 my-4 my-prpl-bg">
            <h2 className="text-4xl text-center">Route Setter</h2>
            <p className="">自己紹介文...</p>
          </section>

          {/* Projectsセクション */}
          <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
              <article className="project-card">
                {/* <img src="/project1.jpg" alt="プロジェクト1" /> */}
                <h3>プロジェクト名</h3>
                <p>説明</p>
                <a href="#">View More</a>
              </article>
            </div>
          </section>

          {/* Contactセクション */}
          <section id="contact">
            <h2>Contact</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; 2026 Your Name</p>
      </footer>
    </>
  )
}

export function PlayerTimeline() {
  const events = [
    { year: '2026', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 7位' ,type: "national", discipline: "boulder", detail: "0"},
    { year: '2025', month:'6' , competition: 'ボルダーワールドカップ', description: 'インスブルック 10位' ,type: "international", discipline: "boulder", detail: "0"},
    { year: '2025', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 4位' ,type: "national", discipline: "boulder", detail: "0"},
    { year: '2024', month:'8' , competition: '世界ユース選手権 リード', description: '貴陽 1位' ,type: "international", discipline: "lead", detail: "0"},
    { year: '2024', month:'5' , competition: '日本ユース選手権 リード', description: '盛岡 3位' ,type: "national", discipline: "lead", detail: "0"},
    { year: '2023', month:'12' , competition: 'アジアカップ ボルダー', description: 'リヤド 3位' ,type: "international", discipline: "boulder", detail: "0"},
    { year: '2023', month:'8' , competition: '世界ユース選手権 ボルダー', description: 'ソウル 4位' ,type: "international", discipline: "boulder", detail: "0"},
    { year: '2023', month:'6' , competition: '日本ユース選手権 ボルダー', description: '倉吉 2位' ,type: "national", discipline: "boulder", detail: "0"},
    { year: '2021', month:'12' , competition: '日本ユース選手権 ボルダー', description: '倉吉 1位' ,type: "national", discipline: "boulder", detail: "0"},
    { year: '2021', month:'8' , competition: '世界ユース選手権 スピード', description: 'ヴォロネジ 3位' ,type: "international", discipline: "speed", detail: "0"},
    { year: '2020', month:'11' , competition: '日本ユース選手権 スピード', description: '亀岡 1位' ,type: "national", discipline: "speed", detail: "0"},
    { year: '2020', month:'11' , competition: '日本ユース選手権 ボルダー', description: '葛飾 2位' ,type: "national", discipline: "boulder", detail: "0"},
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
    <section className="my-prpl-bg py-10 m-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">主な戦歴</h2>
        
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
          
          {/* イベント */}
          {events.map((event, index) => (
            <div key={index}>
              <div key={index} className="mb-8 flex justify-between items-center items-stretch w-full bg-red-500/0">
                {event.type === "national" ? (
                  <>
                    <PlayerTimeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                    <PlayerTimeline_Dot/>
                    <div></div>
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
    </section>
  )
}

export function PlayerTimeline_Detail({hovered, detail}: PlayerTimeline_DetailProps){
  return(
    <div className="w-5/12 overflow-hidden rounded-lg">
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
    <div className="w-2/12 flex justify-center items-center">
    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
    </div>
  )
}


export function PlayerTimeline_Event({year, month, competition, description, discipline, left, onHoverChange, index}: PlayerTimeline_EventProps){
  return(
    <div
    onMouseEnter={() => onHoverChange("enter", index)}
    onMouseLeave={() => onHoverChange("leave", index)}
    className={`w-5/12 ${left?"text-right pl-8":"text-left pr-8"}`}
    >
      <h3 className={`text-2xl font-bold text-blue-600 ${discipline==='boulder'?"text-yellow-500":discipline==='lead'?"text-green-600":"text-red-400"}`}>{year + "." + month}</h3>
      <h4 className={`text-lg font-semibold mt-2`}>{competition}</h4>
      <p className="text-gray-600 mt-1">{description}</p>
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

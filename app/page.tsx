//import Image from "next/image";

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
          <section id="about" className="px-2 py-2 mx-4 my-4 my-prpl-bg">
            <h2 className="text-4xl text-center">About Me</h2>
            <p className="">自己紹介文...</p>
          </section>

          <PlayerTimeline/>

          {/* playerセクション */}
          <section id="player" className="px-2 py-2 mx-4 my-4 my-prpl-bg">
            <h2 className="text-4xl text-center">Player</h2>
            <p className="">年表</p>
          </section>

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
    { year: '2024', title: 'プロジェクトA', description: 'React/Next.jsで構築' },
    { year: '2023', title: 'プロジェクトB', description: 'TypeScriptを学習' },
    { year: '2022', title: 'プロジェクトC', description: 'Web開発を開始' },
  ]

  return (
    <section className="my-prpl-bg py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
        
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
          
          {/* イベント */}
          {events.map((event, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full bg-red-500/10">
              {/* 左側（奇数） */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12 text-right pr-8">
                    <h3 className="text-2xl font-bold text-blue-600">{event.year}</h3>
                    <h4 className="text-xl font-semibold mt-2">{event.title}</h4>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                  </div>
                  
                  {/* 中央の丸 */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                  </div>
                  
                  <div className="w-5/12" />
                </>
              ) : (
                /* 右側（偶数） */
                <>
                  <div className="w-5/12" />
                  
                  {/* 中央の丸 */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                  </div>
                  
                  <div className="w-5/12 pl-8">
                    <h3 className="text-2xl font-bold text-blue-600">{event.year}</h3>
                    <h4 className="text-xl font-semibold mt-2">{event.title}</h4>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

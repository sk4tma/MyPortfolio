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
        {/* ヒーローセクション */}
        <section className="hero">
          <h1>Your Name</h1>
          <p>Web Developer</p>
        </section>

        {/* Aboutセクション */}
        <section id="about">
          <h2>About Me</h2>
          <p>自己紹介文...</p>
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
      </main>

      <footer>
        <p>&copy; 2026 Your Name</p>
      </footer>
    </>
  )
}

'use client'
/* eslint-disable @next/next/no-img-element */

import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Player from "./sections/Player";
import Setter from "./sections/Setter";
import './style.css';

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <div className="my-white-bg noto-serif py-2">
        <Hero/>

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
import { FaInstagram } from "react-icons/fa";
import { SiThreads, SiNote } from "react-icons/si";

export default function Contact(){
  return(
    <section id="contact" className="my-prpl-bg section_detail">
      <h1>Contact</h1>
      <div className="flex items-center px-10">
        <p className="font-semibold text-gray-800">
          お仕事のご依頼はメールまたはInstagramのDMまで<br/>email : xxx@gmail.com
        </p>
      </div>
      <div className="px-4 flex gap-2 justify-end">
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
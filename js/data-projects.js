const Projects = {
  featured: [
    {
      // XPRIMM Database

      code: "xdb",
      name: "XPRIMM Database",
      date: "April 2020",
      type: "featured",
      categories: ["front-end", "ux"],
      links: [["xprimm.com/database", "https://www.xprimm.com/database/"]],

      descShort: `Spreadsheets and magazines database, containing downloadable content, interactive charts and maps.`,
      descLong: `
      <p>This is a 'facelift' for an Open Cart website, made for the company where I was working.</p>
      <p>It came to solve several problems related to the overall user experience, while also offering a fresh and modern look, keeping a trustworthy business feel at its core.</p>
      <p>The technologies used include JavaScript (for animations, DOM manipulation and other visual tricks), Bootstrap 4 (for layout), Chart.js (for dynamic charts) and Leaflet (for Wikipedia-like page).</p>
      `,

      tags: ["CSS/Sass", "Bootstrap 4", "Javascript", "Leaflet", "Chart.js"],
      lang: ["HTML, CSS/Sass, JavaScript"],
      tech: ["Bootstrap 4", "Chart.js", "Leaflet"],

      thumbnail: "img/projects/thumbnails/xdb-1000.jpg",
      gallery: [
        "img/projects/xdb/d01.jpg",
        "img/projects/xdb/d02.jpg",
        "img/projects/xdb/d03.jpg",
        "img/projects/xdb/d04.jpg",
        "img/projects/xdb/d05.jpg",
        "img/projects/xdb/d06.jpg",
      ],
    },
    {
      // XPRIMM Moldova

      code: "xmd",
      name: "XPRIMM Moldova",
      date: "June 2020",
      type: "featured",
      categories: "",
      links: [["xprimm.md", "http://xprimm.md/"]],

      descShort: `News website focused on Moldovan insurance market. Weather and currency APIs included.`,
      descLong: `
      <p>This project is a brand new interface for <a href="#" target="_blank">xprimm.md</a> press portal, the Moldovan branch of XPRIMM.</p>
      <p>Although it looks completly different than the old interface, it still keeps the branding elements of XPRIMM. The placement of red color was a bit of a challenge though, but it can be seen frequently in low saturation.</p>
      <p>The main focus of this website were the press articles, so typography and long but reader-friendly blocks of text were a priority. The serif fonts give more legibility and integrity to our editors texts.</p>
      <p>The project features neat animations, an interactive events calendar (built from scratch with pure JavaScript), interactive canvas charts (using Chart.js library), weather and exchange rate APIs and Bootstrap 4 (for layout, because its easy to maintain even by back-end engineers).</p>
      `,

      tags: [
        "CSS/Sass",
        "Bootstrap 4",
        "Javascript",
        "OpenWeatherMap",
        "Exchange rates API",
      ],
      lang: ["HTML, CSS/Sass, JavaScript"],
      tech: ["Bootstrap 4", "Chart.js", "REST API"],

      thumbnail: "img/projects/thumbnails/xmd-1000.jpg",
      gallery: [
        "img/projects/xmd/d01.jpg",
        "img/projects/xmd/d02.jpg",
        "img/projects/xmd/d03.jpg",
        "img/projects/xmd/d04.jpg",
      ],
    },
  ],

  others: [
    {
      // XPRIMM com

      code: "xco",
      name: "XPRIMM.com",
      date: "May 2019",
      type: "others",
      categories: "",
      links: [["xprimm.com", "https://www.xprimm.com/"]],

      descShort: `News website focused on 32 insurance markets around the world. The flagship website of the company, hence the conservative look.`,
      descLong: `
        <p>This is basically the website where my web development journey has started. Since there's not much technical stuff to talk about here, I'll let you with <span class="fs-i">its story:</span></p>
        <blockquote>
          <p>The story begins in February 2019 with me, as a very annoying and details obsessed person, who got almost everyday in the IT department room to one of the programmers, with a list of front-end changes to this website, begging him to help me change the CSS and HTML code.</p>
          <p>At some point, my coworker became so tired of me, that I asked him if he can let me do these changes by myself. He connected me to the server and soon afterwards the <a href="https://www.xprimm.com/" target="_blank">xprimm.com</a> portal had a new color-scheme, a sticky navbar with a search button, smooth shadows, rounded corners everywhere and a nice and legible typography on articles.</p>
          <p>Even now there are still many things to improve, but I belive the UX is at reasonable levels.</p>
        </blockquote>
        <p>The website uses Bootstrap 2, a JavaScript scroller library and plain JavaScript.</p>
        `,

      tags: ["Bootstrap 2", "Javascript"],
      lang: ["HTML", "CSS", "JavaScript"],
      tech: ["Bootstrap 2"],

      thumbnail: "img/projects/thumbnails/xco-1000.jpg",
      gallery: [
        // "img/projects/xco/d01.jpg",
        // "img/projects/xco/d02.jpg",
        "img/projects/xco/d04.jpg",
        "img/projects/xco/d05.jpg",
        "img/projects/xco/d03.jpg",
        "img/projects/xco/d06.jpg",
      ],
    },
    {
      // 1ASIG

      code: "1as",
      name: "1asig.ro",
      date: "July 2019",
      type: "others",
      categories: "",
      links: [["1asig.ro", "https://www.1asig.ro/"]],

      descShort: `News website focused on Romanian insurance and private pensions markets. My first real project.`,
      descLong: `
        <p>My second project at XPRIMM. It's a redesign of a really old website made which was made using old-school methods (HTML tables for layouts).</p>
        <p>I was so annoyed about the old website look that I decided it was time to start learning programming. Although it doesn't look impressive at all, it gave me a huge confidence boost, since I proved to myself that I can actually program.</p>
        <p>The technology stack is not monumental. I basically recycled the layout used on <a href="https://www.xprimm.com/" target="_blank">xprimm.com</a> (one of our websites, sort of 'my first project', where I saw for the first time ever how HTML, CSS and JavaScript look and behave together).</p>
        <p>The front-end of the website uses Bootstrap 2 (very old version for 2019 standards) and vanilla JavaScript (for header scrolling events and other visual tricks).</p>
        `,

      tags: ["Bootstrap 2", "Javascript"],
      lang: ["HTML", "CSS", "JavaScript"],
      tech: ["Bootstrap 2"],

      thumbnail: "img/projects/thumbnails/1as-1000.jpg",
      gallery: [
        "img/projects/1as/d01.jpg",
        "img/projects/1as/d02.jpg",
        "img/projects/1as/d03.jpg",
        "img/projects/1as/d04.jpg",
        "img/projects/1as/d05.jpg",
      ],
    },
    {
      // Asigurarea Masinilor

      code: "asm",
      name: "Asigurarea Mașinilor",
      date: "March 2020",
      type: "others",
      categories: "",
      links: [["asigurareamasinilor.ro", "http://asigurareamasinilor.ro/"]],

      descShort: `Informational website, aiming to present Romanian vehicle insurance concepts under a simple form.`,
      descLong: `
        <p>This project is part of APPA organization (<a href="http://www.appa-asigurari.ro/" target="_blank">appa-asigurari.ro</a>) and it replaces a very old looking website.</p>
        <p>My company was launching a new campaign for motor vehicle insurance and decided that we should launch a fresh looking website related these insurance products. The timeframe for it to be ready was really short (around 4 weeks), so I had to keep the things really simple and mobile responsive.</p>
        <p>I was equally involved in developing the website (made the whole interface) and in writing the insurance guides present on website (together with one more coworker).</p>
        <p>The interface is actually a Wordpress theme, which one of my coworkers implemented after I finished the front-end template. Regarding the technology, I wrote the interface in HTML, CSS/Sass and Javascript, using Bootstrap 4 for layout.</p>
      `,

      tags: ["Sass", "Bootstrap 4", "Javascript"],
      lang: ["HTML", "CSS/Sass", "JavaScript"],
      tech: ["Bootstrap 4", "Wordpress"],

      thumbnail: "img/projects/thumbnails/asm-1000.jpg",
      gallery: [
        "img/projects/asm/d01.jpg",
        "img/projects/asm/d02.jpg",
        "img/projects/asm/d03.jpg",
        "img/projects/asm/d04.jpg",
        "img/projects/asm/d05.jpg",
        "img/projects/asm/d06.jpg",
      ],
    },
  ],

  ux: [
    {
      // Skank and bass

      code: "snb",
      name: "Skank and bass",
      date: "August 2020",
      type: "ux",
      categories: "",
      links: [
        ["dribbble.com/shots/14028361", "https://dribbble.com/shots/14028361"],
      ],

      descShort: ``,
      descLong: `
        <p>A redesign of Skank and bass (<a href="http://skankandbass.com/" target="_blank">skankandbass.com</a>), my favourite place to discover Drum and Bass music.</p>
      `,

      tags: ["Figma"],
      tech: ["Figma"],

      thumbnail: "img/projects-ux/thumbnails/snb-1000.jpg",
      gallery: ["img/projects-ux/snb/d01.jpg", "img/projects-ux/snb/d02.jpg"],
    },
  ],
}

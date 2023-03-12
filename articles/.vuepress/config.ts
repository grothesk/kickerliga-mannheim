import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
import { viteBundler } from "@vuepress/bundler-vite";
//import { webpackBundler } from "@vuepress/bundler-webpack";
import { navbar } from "./configs"

export default defineUserConfig({
  base: "/kickerliga-mannheim/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Gungnir Theme" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "de",
      title: "Kickerliga Mannheim",
      description: "Kickerliga Mannheim"
    }
  },

  theme: gungnirTheme({
    repo: "Renovamen/vuepress-theme-gungnir",

    // personal information
    personalInfo: {
      name: "Kickerliga Mannheim",
      avatar: "/img/logo.png",
      description: "2023",
      sns: {
        github: "grothesk",
        facebook: "kickerligamannheim",
        email: "info@kickerliga-mannheim.de"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home/tisch-atmo.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home/tisch-atmo.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home/tisch-atmo.jpg",
        mask: "rgb(255, 255, 255, .3)"
      },
    ],

    // other pages
    pages: {
      tags: {
        title: "Artikel",
        subtitle: "Schlagwortsuche",
        bgImage: {
          path: "/img/home/tisch-atmo.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: "Material",
        subtitle:
          "Referenzen",
        bgImage: {
          path: "/img/home/tisch-atmo.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    navbarTitle: "Home",

    // theme-level locales config
    locales: {
      /**
       * German locale config
       *
       * As the default locale is German, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.de,
      }

    },

    themePlugins: {
      git: false,
      giscus: false,
      chartjs: true,
      search: false,
      readingTime: false
    },

    footer: `
        &copy; <a href="https://github.com/grothesk/kickerliga-mannheim" target="_blank">Kickerliga Mannheim</a> 2023
        <br>
        Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
        <br>
        <br>
        <div>
        Impressum:<br>
        Tischfussball Mannheim e.V.<br>
        Nahestraße 7<br>
        68167 Mannheim<br>
        </div>
        `
  })
});

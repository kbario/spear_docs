import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://spear_nvim.kbar.io",
  integrations: [
    starlight({
      title: "spear.nvim docs",
      customCss: ['./src/tailwind.css'],
      social: {
        github: "https://github.com/kbario/spear.nvim"
      },
      sidebar: [{
        label: "Motivation",
        link: "/motivation"
      }, {
        label: "Installation",
        autogenerate: {
          directory: "installation"
        }
      }, {
        label: "Setup",
        items: [{
          label: "defaults",
          link: ""
        }, {
          label: "init",
          link: ""
        }]
      }, {
        label: "Guides",
        items: [
          // Each item here is one entry in the navigation menu.
          {
            label: "Example Guide",
            link: "/guides/example/"
          }]
      }, {
        label: "Reference",
        autogenerate: {
          directory: "reference"
        }
      }]
    }),
    solidJs(),
    tailwind(
      // { applyBaseStyles: false }
    )
  ]
});

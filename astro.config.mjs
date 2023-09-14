import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://spear_nvim.kbar.io",
  integrations: [
    starlight({
      title: "spear.nvim docs",
      social: {
        github: "https://github.com/kbario/spear.nvim",
      },
      sidebar: [
        {
          label: "Motivation",
          items: [
            { label: "the problem", link: "" },
            { label: "the solution", link: "" },
          ],
        },
        {
          label: "Installation",
          items: [
            { label: "Packer", link: "" },
            { label: "lazy", link: "" },
          ],
        },
        {
          label: "Setup",
          items: [
            { label: "defaults", link: "" },
            { label: "init", link: "" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

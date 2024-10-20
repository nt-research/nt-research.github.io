import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NosTale Research Project",
  tagline: "Community driven research project for the MMORPG NosTale game",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nt-research.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nt-research", // Usually your GitHub org/user name.
  projectName: "nt-research.github.io", // Usually your repo name.

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/nt-research/nt-research.github.io/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/nt-research/nt-research.github.io/tree/main/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "NosTale Research Project",
      logo: {
        alt: "NosTale Research Project Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        { to: "/style-guide", label: "Style Guide", position: "right" },
        {
          href: "https://github.com/nt-research/nt-research.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tools",
              to: "/docs/category/-tools",
            },
            {
              label: "NOS files",
              to: "/docs/category/nos-files",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Elitepvpers",
              href: "https://www.elitepvpers.com/forum/nostale/",
            },
            {
              label: "NosApki",
              href: "https://nosapki.com/",
            },
            {
              label: "Play NosTale",
              href: "https://gameforge.com/en-GB/play/nostale",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/nt-research/nt-research.github.io",
            },
          ],
        },
      ],
      copyright: `Images and sounds from NosTale belong to Gameforge / Entwell`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

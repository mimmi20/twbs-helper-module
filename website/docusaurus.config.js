module.exports = {
  title: "TwbsHelper",
  tagline:
    "TwbsHelper is a Laminas (formerly Zend Framework) module for easy integration of the Twitter Bootstrap v4",
  url: "https://neilime.github.io",
  baseUrl: "/twbs-helper-module/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "neilime",
  projectName: "twbs-helper-module",
  themeConfig: {
    algolia: {
      apiKey: "daf4659aed5c21d5d7d3ef1da32b76a5",
      indexName: "laminas_twbs-helper",
    },
    navbar: {
      title: "TwbsHelper",
      logo: {
        alt: "TwbsHelper Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "https://codecov.io/gh/neilime/twbs-helper-module",
          label: "Code coverage",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Documentation", to: "docs/" }],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/neilime/twbs-helper-module",
            },
            {
              label: "Code coverage",
              to: "https://codecov.io/gh/neilime/twbs-helper-module",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TwbsHelper.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "installation",
          sidebarPath: require.resolve("./docs/sidebars.js"),
          editUrl:
            "https://github.com/neilime/twbs-helper-module/edit/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [require.resolve("@docusaurus/theme-bootstrap")],
};

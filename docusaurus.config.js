const githubUrl = "https://github.com/ossmeasures/guide";

module.exports = {
  title: "OSS施作ガイドライン",
  tagline: "AWS OSS施作ガイドライン",
  url: "https://github.com/ossmeasures/guide",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "cloudformation-perfect-guide",
  projectName: "docs",
  themeConfig: {
    image: "img/home.png",
    navbar: {
      title: "OSS施作ガイドライン",
      logo: {
        alt: "Logo",
        src: "img/favicon.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: githubUrl,
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
              label: "Home",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/gee0awa",
            },
            {
              label: "Slack",
              href: "https://slack.com/todo",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: githubUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ossmeasures. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "home",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ossmeasures/guide/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

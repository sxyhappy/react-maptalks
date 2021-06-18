/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Maptalks',
  tagline: 'react-maptalks 是 maptalks 的 react 包装',
  url: 'https://sxyhappy.github.io',
  baseUrl: '/react-maptalks/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sxyhappy',
  projectName: 'react-maptalks',
  scripts: ['/static/building.js'],
  themeConfig: {
    navbar: {
      title: 'React Maptalks',
      items: [
        {
          href: 'https://github.com/sxyhappy/react-maptalks',
          label: 'Github',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} react-maptalks, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          ReactLiveScope: require.resolve('./src/theme/ReactLiveScope/index.js')
        },
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock'
  ]
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Maptalks',
  tagline: 'react-maptalks 是 maptalks 的 react 包装',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sxyhappy', // Usually your GitHub org/user name.
  projectName: 'react-maptalks', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Maptalks',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '快速上手',
        },
        {
          to: '/docs/components/map',
          label: 'Components',
          position: 'left',
          activeBasePath: 'docs/components',
        },
        {to: '/example', label: 'Example', position: 'left'},
        {
          href: 'https://github.com/sxyhappy/react-maptalks',
          label: 'GitHub',
          position: 'right',
        },
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
        },
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock'
  ]
};

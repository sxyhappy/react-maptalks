/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      label: '快速上手',
      id: 'intro',
    },
    {
      type: 'doc',
      label: 'map',
      id: 'map'
    },
    {
      type: 'category',
      label: 'layers',
      items: [{
        type: 'autogenerated',
        dirName: 'components/layers'
      }]
    },
    {
      type: 'category',
      label: 'geometries',
      items: [{
        type: 'autogenerated',
        dirName: 'components/geometries'
      }]
    },
    {
      type: 'category',
      label: 'controls',
      items: [{
        type: 'autogenerated',
        dirName: 'components/controls'
      }]
    },
    {
      type: 'category',
      label: 'ui',
      items: [{
        type: 'autogenerated',
        dirName: 'components/ui'
      }]
    },
    {
      type: 'category',
      label: 'mapTools',
      items: [{
        type: 'autogenerated',
        dirName: 'components/maptools'
      }]
    },
  ],
  core: [
    'core/start',
    'core/hoc',
    'core/context-hook',
  ],
  plugins: [
    'plugins/three-layer'
  ],
  examples: [
    'examples/base',
  ]
};

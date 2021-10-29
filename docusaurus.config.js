// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K3ai',
  tagline: 'A lightweight tool to get an AI Infrastructure Stack up in minutes not days.',
  url: 'https://k3ai.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'k3ai', // Usually your GitHub org/user name.
  projectName: 'k3ai.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/k3ai/k3ai',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAnalytics: {
        trackingID: 'UA-211572758-1',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
      navbar: {
        title: 'K3ai',
        logo: {
          alt: 'K3ai Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/k3ai/k3ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.gg/vzUdjsq5cD',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/k3ai_project',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub K3ai',
                href: 'https://github.com/k3ai/k3ai',
              },
              {
                label: 'GitHub K3ai Plugins',
                href: 'https://github.com/k3ai/plugins',
              },
              {
                label: 'GitHub K3ai Docs',
                href: 'https://github.com/k3ai/k3ai.github.io',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} K3ai Project Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins: [ 
        [
          '@docusaurus/plugin-google-analytics',
          {
            googleAnalytics: {
              trackingID: 'UA-211572758-1',
    
              // Optional fields.
              anonymizeIP: true, // Should IPs be anonymized?
            },
          },
        ],
        [
          '@docusaurus/plugin-sitemap',
      {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      ],
      [
        '@docusaurus/plugin-google-gtag',
        {
          gtag: {
            // You can also use your "G-" Measurement ID here.
            trackingID: 'UA-211572758-1',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
          },
        }
      ]
    ]
    }),



};


module.exports = config;

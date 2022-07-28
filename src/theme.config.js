/* eslint-disable import/no-anonymous-default-export */
import Logo from './components/logo'

export default {
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' }
  ],
  github: 'https://github.com/qlAD/dotfiles',
  projectLink: 'https://github.com/qlAD/dotfiles',
  docsRepositoryBase:
    'https://github.com/qlAD/Doc/tree/main/src/pages',
  titleSuffix: ' - qlAD&s Arch Linux dotfiles',
  logo: <Logo />,
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="qlAD's Arch Linux dotfiles" />
      <meta name="apple-mobile-web-app-title" content="qlAD's Arch Linux dotfiles" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  search: true,
  font: false,
  unstable_flexsearch: true,
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  defaultMenuCollapsed: true,
  footerEditLink: ({ locale }) => locale === 'zh' ? '前往 GitHub 编辑此页' : 'Edit this page on GitHub',
  footerText: <>Built with {new Date().getFullYear()} © qlAD</>
}

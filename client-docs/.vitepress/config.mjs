import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Manual do Cliente - Nextgoup',
  description: 'Documentação oficial do sistema Nextgoup para clientes',
  lang: 'pt-BR',
  base: '/nextgoup/',
  
  head: [
    ['link', { rel: 'icon', href: '/nextgoup/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  themeConfig: {
    siteTitle: 'Nextgoup Docs',
    logo: '/logo.svg',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Primeiros Passos', link: '/getting-started/00-visao-geral' },
      { text: 'Tarefas', link: '/tasks/criar-usuario' },
      { text: 'Módulos', link: '/features/dashboard' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Notas de Versão', link: '/release-notes/v1.0.0' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Primeiros Passos',
          items: [
            { text: 'Visão Geral', link: '/getting-started/00-visao-geral' },
            { text: 'Login e Acesso', link: '/getting-started/01-login-acesso' },
            { text: 'Tour da Interface', link: '/getting-started/02-tour-da-interface' }
          ]
        }
      ],
      '/tasks/': [
        {
          text: 'Tarefas Principais',
          items: [
            { text: 'Criar Usuário', link: '/tasks/criar-usuario' },
            { text: 'Gerar Relatório', link: '/tasks/gerar-relatorio' },
            { text: 'Aprovar Solicitação', link: '/tasks/aprovar-solicitacao' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Módulos do Sistema',
          items: [
            { text: 'Dashboard', link: '/features/dashboard' },
            { text: 'Produtos', link: '/features/produtos' },
            { text: 'Relatórios', link: '/features/relatorios' }
          ]
        }
      ],
      '/roles/': [
        {
          text: 'Perfis de Usuário',
          items: [
            { text: 'Administrador', link: '/roles/administrador' },
            { text: 'Gestor', link: '/roles/gestor' },
            { text: 'Operador', link: '/roles/operador' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'Dúvidas Frequentes',
          items: [
            { text: 'FAQ Geral', link: '/faq/' }
          ]
        }
      ],
      '/release-notes/': [
        {
          text: 'Notas de Versão',
          items: [
            { text: 'v1.0.0', link: '/release-notes/v1.0.0' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          pt: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar busca',
                footer: {
                  selectText: 'para selecionar',
                  navigateText: 'para navegar'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: 'Manual do Cliente v1.0.0',
      copyright: 'Copyright © 2025 Nextgoup. Todos os direitos reservados.'
    },

    editLink: {
      pattern: 'https://github.com/trbonete/nextgoup/edit/main/client-docs/:path',
      text: 'Sugerir alterações'
    },

    lastUpdated: {
      text: 'Última atualização',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    // Mermaid será habilitado automaticamente pelo VitePress
  },
  
  mermaid: {
    // Habilitar Mermaid diagrams
  },

  // Configuração para i18n (comentada para uso futuro)
  // locales: {
  //   root: {
  //     label: 'Português (BR)',
  //     lang: 'pt-BR',
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en-US',
  //     link: '/en/',
  //     themeConfig: {
  //       nav: [
  //         { text: 'Home', link: '/en/' },
  //         { text: 'Getting Started', link: '/en/getting-started/' }
  //       ]
  //     }
  //   }
  // },

  outDir: 'dist-client-docs'
})

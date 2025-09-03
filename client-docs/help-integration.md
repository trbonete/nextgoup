# Client Documentation - VitePress Help Map

Este arquivo contém um mapeamento sugerido entre rotas da aplicação e URLs da documentação, para implementar botões "Ajuda" contextuais.

## Como implementar ajuda contextual

### 1. Criar o mapa de rotas

```vue
<script>
// helpMap.js - Mapeamento de rotas para URLs da documentação
export const helpMap = {
  // Dashboard
  '/dashboard': '/nextgoup/features/dashboard',
  '/': '/nextgoup/features/dashboard',
  
  // Usuários
  '/users': '/nextgoup/tasks/criar-usuario',
  '/users/new': '/nextgoup/tasks/criar-usuario',
  '/users/edit/:id': '/nextgoup/roles/administrador',
  
  // Produtos
  '/products': '/nextgoup/features/produtos',
  '/products/new': '/nextgoup/features/produtos#cadastro-de-produto',
  '/products/categories': '/nextgoup/features/produtos#organizando-seu-catalogo',
  
  // Relatórios
  '/reports': '/nextgoup/features/relatorios',
  '/reports/builder': '/nextgoup/features/relatorios#construtor-de-relatorios-personalizados',
  '/reports/schedule': '/nextgoup/tasks/gerar-relatorio#6-exportar-dados',
  
  // Solicitações
  '/requests': '/nextgoup/tasks/aprovar-solicitacao',
  '/requests/pending': '/nextgoup/tasks/aprovar-solicitacao#2-revisar-detalhes-da-solicitacao',
  '/requests/history': '/nextgoup/tasks/aprovar-solicitacao#auditoria-e-historico',
  
  // Configurações por perfil
  '/admin': '/nextgoup/roles/administrador',
  '/admin/users': '/nextgoup/tasks/criar-usuario',
  '/admin/system': '/nextgoup/roles/administrador#configuracoes-criticas',
  
  // Páginas genéricas
  '/login': '/nextgoup/getting-started/01-login-acesso',
  '/profile': '/nextgoup/getting-started/02-tour-da-interface#menu-do-usuario',
  '/help': '/nextgoup/faq/',
  '/settings': '/nextgoup/roles/administrador#ferramentas-administrativas'
}

// Função para obter URL de ajuda baseada na rota atual
export function getHelpUrl(currentRoute) {
  const baseUrl = 'https://trbonete.github.io/nextgoup'
  
  // Busca direta
  if (helpMap[currentRoute]) {
    return baseUrl + helpMap[currentRoute]
  }
  
  // Busca por padrão (para rotas dinâmicas)
  const pattern = Object.keys(helpMap).find(key => {
    if (key.includes(':')) {
      const regex = new RegExp(key.replace(/:[^/]+/g, '[^/]+'))
      return regex.test(currentRoute)
    }
    return false
  })
  
  if (pattern) {
    return baseUrl + helpMap[pattern]
  }
  
  // Fallback para FAQ geral
  return baseUrl + '/nextgoup/faq/'
}
</script>
```

### 2. Componente de ajuda contextual

```vue
<template>
  <button 
    @click="openHelp" 
    class="help-button"
    :title="\`Ajuda sobre: \${getPageTitle()}\`"
  >
    <QuestionIcon />
    Ajuda
  </button>
</template>

<script>
import { useRoute } from 'vue-router'
import { getHelpUrl } from './helpMap.js'

export default {
  name: 'ContextualHelp',
  setup() {
    const route = useRoute()
    
    const openHelp = () => {
      const helpUrl = getHelpUrl(route.path)
      window.open(helpUrl, '_blank', 'width=1200,height=800,scrollbars=yes')
    }
    
    const getPageTitle = () => {
      // Mapear rotas para títulos amigáveis
      const titles = {
        '/dashboard': 'Dashboard',
        '/users': 'Gestão de Usuários', 
        '/products': 'Produtos',
        '/reports': 'Relatórios',
        '/requests': 'Solicitações'
      }
      return titles[route.path] || 'Esta página'
    }
    
    return {
      openHelp,
      getPageTitle
    }
  }
}
</script>

<style scoped>
.help-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.375rem;
  color: #0369a1;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.help-button:hover {
  background: #e0f2fe;
  border-color: #0284c7;
}
</style>
```

### 3. Plugin global para ajuda

```javascript
// plugins/help.js
import { getHelpUrl } from '@/helpMap.js'

export default {
  install(app) {
    // Disponibilizar globalmente
    app.config.globalProperties.$help = {
      open: (route) => {
        const helpUrl = getHelpUrl(route)
        window.open(helpUrl, '_blank', 'width=1200,height=800,scrollbars=yes')
      },
      
      // Para usar em qualquer componente: this.$help.current()
      current: () => {
        const currentRoute = window.location.pathname
        const helpUrl = getHelpUrl(currentRoute)
        window.open(helpUrl, '_blank', 'width=1200,height=800,scrollbars=yes')
      }
    }
    
    // Atalho de teclado global F1
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F1') {
        e.preventDefault()
        app.config.globalProperties.$help.current()
      }
    })
  }
}
```

### 4. Uso em componentes

```vue
<template>
  <div class="page-header">
    <h1>{{ pageTitle }}</h1>
    
    <!-- Botão de ajuda contextual -->
    <ContextualHelp />
    
    <!-- Ou botão simples -->
    <button @click="$help.current()" class="help-btn">
      <HelpIcon /> F1
    </button>
  </div>
</template>
```

### 5. Configuração no main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import HelpPlugin from '@/plugins/help.js'

const app = createApp(App)
app.use(HelpPlugin)
app.mount('#app')
```

## Mapeamento detalhado por módulo

### Dashboard
- Rota: `/dashboard` → [Dashboard](/features/dashboard)
- Ajuda sobre widgets, personalização, interpretação de métricas

### Usuários  
- `/users` → [Gestão de Usuários](/roles/administrador#gestao-de-usuarios)
- `/users/new` → [Criar Usuário](/tasks/criar-usuario)
- `/users/:id/permissions` → [Perfis de Usuário](/roles/administrador#matriz-de-permissoes)

### Produtos
- `/products` → [Módulo Produtos](/features/produtos)
- `/products/import` → [Importação em Lote](/features/produtos#importacao-em-lote)
- `/products/categories` → [Organização do Catálogo](/features/produtos#organizando-seu-catalogo)

### Relatórios
- `/reports` → [Sistema de Relatórios](/features/relatorios)  
- `/reports/builder` → [Construtor Personalizado](/features/relatorios#construtor-de-relatorios-personalizados)
- `/reports/:id/schedule` → [Agendamento](/tasks/gerar-relatorio#recursos-avancados)

### Solicitações
- `/requests/pending` → [Aprovar Solicitação](/tasks/aprovar-solicitacao)
- `/requests/history` → [Histórico e Auditoria](/tasks/aprovar-solicitacao#auditoria-e-historico)

## Analytics de uso da ajuda

Para medir eficácia da documentação, adicione tracking:

```javascript
// Rastrear cliques na ajuda
const trackHelpUsage = (route, section) => {
  // Google Analytics, Mixpanel, etc.
  gtag('event', 'help_click', {
    'route': route,
    'help_section': section,
    'user_role': getCurrentUserRole()
  })
}

export function getHelpUrl(currentRoute) {
  const helpUrl = baseUrl + helpMap[currentRoute]
  
  // Track quando ajuda é acessada
  trackHelpUsage(currentRoute, helpMap[currentRoute])
  
  return helpUrl
}
```

## Feedback de documentação

Adicione widget de feedback em cada página da documentação:

```markdown
::: tip Essa página foi útil?
👍 Sim &nbsp;&nbsp; 👎 Não

<a href="mailto:docs@nextgoup.com?subject=Feedback sobre [Nome da Página]">Enviar feedback</a>
:::
```

Este sistema cria uma experiência de ajuda contextual completa, conectando diretamente as funcionalidades da aplicação com a documentação correspondente.

# Manual do Cliente - Nextgoup

Bem-vindo à documentação oficial do sistema Nextgoup. Este manual foi criado especialmente para nossos clientes, com o objetivo de facilitar o uso de todas as funcionalidades da plataforma.

## 📚 Como usar esta documentação

Esta documentação está organizada em seções para facilitar sua navegação:

- **[Primeiros Passos](/getting-started/00-visao-geral)** - Configure sua conta e conheça o sistema
- **[Tarefas](/tasks/criar-usuario)** - Guias passo a passo para ações específicas
- **[Módulos](/features/dashboard)** - Descrição detalhada de cada funcionalidade
- **[Perfis](/roles/administrador)** - Entenda as permissões de cada tipo de usuário
- **[FAQ](/faq/)** - Respostas para dúvidas frequentes
- **[Notas de Versão](/release-notes/v1.0.0)** - Novidades e atualizações

## 🚀 Começando rapidamente

Se você é um novo usuário, recomendamos começar pela [Visão Geral](/getting-started/00-visao-geral) para entender os conceitos básicos do sistema.

Para usuários experientes que precisam realizar uma tarefa específica, navegue diretamente para a seção [Tarefas](/tasks/criar-usuario).

## 🆘 Precisa de ajuda?

- Consulte nosso [FAQ](/faq/) para dúvidas comuns
- Entre em contato com o suporte técnico
- Solicite treinamento adicional através do seu gestor de conta

---

## 🔧 Para administradores da documentação

### Como rodar localmente

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run clientdocs:dev

# Build para produção
npm run clientdocs:build

# Preview do build
npm run clientdocs:preview
```

### Como publicar atualizações

1. Faça suas alterações nos arquivos markdown
2. Teste localmente com `npm run clientdocs:dev`
3. Faça commit e push das alterações
4. O deploy automático será executado via GitHub Actions

### Como criar nova versão

1. Atualize a versão no arquivo `config.mjs`
2. Crie um novo arquivo em `/release-notes/vX.X.X.md`
3. Atualize os links de navegação se necessário
4. Crie uma tag no Git: `git tag v1.1.0 && git push origin v1.1.0`

### Onde colocar imagens

- Crie uma pasta `public/images/` na raiz do projeto
- Referencie as imagens como `/nextgoup/images/nome-da-imagem.png`
- Sempre adicione texto alternativo para acessibilidade

::: tip Dica de SEO
Mantenha os títulos descritivos e use headings hierárquicos (H1 > H2 > H3) para melhor indexação.
:::

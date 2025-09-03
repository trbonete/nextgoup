# Criar Usuário

Esta página orienta administradores na criação de novos usuários no sistema Nextgoup.

## Quem pode executar esta tarefa?
- ✅ **Administrador:** Acesso completo
- ❌ **Gestor:** Sem permissão
- ❌ **Operador:** Sem permissão

**Tempo médio de execução:** 3-5 minutos

## Passo a passo

### 1. Acessar o módulo de usuários
1. No menu lateral, clique em **"Usuários"**
2. Você verá a lista de usuários existentes
3. Clique no botão **"+ Novo Usuário"** (canto superior direito)

### 2. Preencher informações básicas
**Campos obrigatórios:**
- **Nome completo:** Digite o nome real do usuário
- **E-mail:** Use o e-mail corporativo oficial
- **Perfil:** Selecione o nível de acesso apropriado
- **Departamento:** Escolha da lista pré-cadastrada

**Campos opcionais:**
- **Telefone:** Para contato direto
- **Cargo:** Posição na empresa
- **Observações:** Notas internas sobre o usuário

::: tip Escolhendo o perfil correto
- **Administrador:** Para TI e gestores de sistema
- **Gestor:** Para supervisores e coordenadores
- **Operador:** Para usuários finais básicos

Consulte [Perfis de Usuário](/roles/administrador) para detalhes completos.
:::

### 3. Definir configurações de acesso
- **Senha temporária:** O sistema gera automaticamente
- **Forçar troca no primeiro login:** Deixe marcado (recomendado)
- **Data de expiração:** Opcional, para contas temporárias
- **Status:** Mantenha como "Ativo"

### 4. Configurar permissões específicas
Dependendo do perfil escolhido, você pode:
- **Habilitar módulos específicos**
- **Definir limitações de acesso**
- **Configurar aprovações que o usuário pode fazer**

### 5. Salvar e enviar credenciais
1. Clique em **"Salvar Usuário"**
2. Confirme os dados na tela de revisão
3. Clique em **"Confirmar e Enviar E-mail"**

::: warning Validações do sistema
O sistema verificará:
- E-mail único (não pode haver duplicatas)
- Formato válido do e-mail
- Preenchimento dos campos obrigatórios
- Permissões do seu perfil para criar usuários
:::

## O que acontece após a criação?

### E-mail automático enviado
O novo usuário receberá um e-mail contendo:
- **Link de acesso ao sistema**
- **E-mail de login**
- **Senha temporária**
- **Instruções de primeiro acesso**
- **Link para este manual**

### Status do usuário
- **Status:** Pendente → Ativo (após primeiro login)
- **Última atividade:** Será registrada quando fizer login
- **Tentativas de login:** Contador zerado

## Erros comuns e soluções

### "E-mail já cadastrado"
**Causa:** Tentativa de criar usuário com e-mail existente
**Solução:** 
- Verifique se o usuário já existe na lista
- Use um e-mail alternativo
- Reative conta desabilitada se necessário

### "Permissão insuficiente"
**Causa:** Seu perfil não permite criar usuários
**Solução:** 
- Confirme que você é Administrador
- Contate outro administrador para fazer a criação

### "Erro no envio do e-mail"
**Causa:** Problema com servidor de e-mail
**Solução:** 
- Usuário foi criado, mas e-mail não foi enviado
- Envie credenciais manualmente ou reenvie pelo sistema
- Verifique configurações de SMTP com TI

## Pós-criação: acompanhamento

### Verificar se o usuário acessou
1. Vá em **Usuários > Lista de Usuários**
2. Procure pelo usuário criado
3. Verifique a coluna "Último Acesso"
4. Se necessário, entre em contato para auxiliar

### Solicitar feedback
- Confirme se o usuário recebeu o e-mail
- Verifique se conseguiu fazer login
- Pergunte se precisa de treinamento adicional

::: tip Boa prática
Crie uma checklist para novos usuários:
- [ ] Usuário recebeu credenciais
- [ ] Fez primeiro login com sucesso  
- [ ] Alterou senha temporária
- [ ] Conhece funcionalidades do seu perfil
- [ ] Sabe onde buscar ajuda
:::

## Próximos passos

Após criar o usuário:
1. **[Definir permissões específicas](/roles/administrador)** se necessário
2. **Orientar sobre [primeiros passos](/getting-started/01-login-acesso)**
3. **Agendar treinamento** conforme complexidade do perfil

**Dúvidas?** Consulte [FAQ sobre Gestão de Usuários](/faq/#gestao-de-usuarios).

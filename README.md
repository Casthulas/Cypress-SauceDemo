#  Projeto de Automação com Cypress

Este projeto efetua uma série de testes nos usuários disponíveis do https://www.saucedemo.com/ utilizando o **Cypress** para validação da aplicação.


## ▶️ Como executar os testes

### 1. Abra o projeto

Abra a pasta do projeto no **Visual Studio Code**.

### 2. Inicie o Cypress

Abra o terminal na raiz do projeto e execute:

```bash
npx cypress open
```

### 3. Selecione o navegador

Na tela do Cypress:

- Selecione **Chrome**.

### 4. Escolha o tipo de teste

- TestaEmError_user.cy.js // Falhar em todos os testes possíveis.
- TestaTodosUsuarios.cy.js // Revisa o login dos usuários.
- TestesEmLocked_out_user.cy.js // Login bloqueado.
- TestesEmPerformance_glitch_user.cy.js // Simula ações com latência alta
- TestesEmProblem_user.cy.js // Simula comportamento de compra e localiza alguns erros.
- TestesEmStandard_user.cy.js // Simula diversos testes de funcionamento para assegurar o comportamento correto da ferramenta.


### 5. Execute um teste

---


## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

---

## 📌 Observações

- Execute os comandos na raiz do projeto.
- Certifique-se de que todas as dependências foram instaladas antes da execução:

```bash
npm install
```

- Para executar os testes em modo headless:

```bash
npx cypress run
```

---

Projeto desenvolvido para estudos de automação de testes utilizando Cypress.

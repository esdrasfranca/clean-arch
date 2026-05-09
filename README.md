# Prática Orientação a Objetos e Clean Architecture

Este é um projeto de estudo desenvolvido como parte do curso de Programação Orientada a Objetos da FullCycle. O objetivo principal deste projeto é aplicar os conceitos de **Clean Architecture (Arquitetura Limpa)** e **Princípios SOLID** em uma aplicação prática utilizando TypeScript e Node.js.

## 🎯 Objetivo

Criar uma API simples para gerenciamento de usuários (CRUD completo), demonstrando a separação de responsabilidades em camadas bem definidas, garantindo que as regras de negócio sejam independentes de frameworks, banco de dados ou interfaces de usuário.

## 🏗️ Arquitetura

O projeto segue a estrutura da Clean Architecture, dividida nas seguintes camadas:

1. **Domain (Domínio):**
   - O núcleo da aplicação. Contém as regras de negócio puras.
   - **Entities:** Representam os objetos de negócio (ex: `User`).
   - **Repositories (Interfaces):** Contratos que definem como os dados devem ser acessados, sem conhecer a implementação real.

2. **Application (Aplicação):**
   - Orquestra as regras de negócio.
   - **Use Cases:** Casos de uso da aplicação (ex: `CreateUserUseCase`, `GetAllUsersUseCase`). Cada caso de uso tem uma responsabilidade única.
   - **DTOs (Data Transfer Objects):** Objetos utilizados para transferir dados entre as camadas, garantindo que o domínio não vaze para o mundo exterior.

3. **Infrastructure (Infraestrutura):**
   - A camada mais externa. Lida com detalhes técnicos e comunicação com o mundo externo.
   - **Controllers:** Recebem as requisições HTTP, repassam para os Use Cases e retornam a resposta.
   - **Routes:** Definição das rotas da API (Express).
   - **Repositories (Implementações):** Implementação concreta das interfaces definidas no Domínio (atualmente simulando um banco de dados em memória).

## 🛠️ Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Express.js** (Framework Web)
- **tsx** (Para execução de arquivos TypeScript)

## 📁 Estrutura de Diretórios

```text
src/
├── application/         # Casos de uso e DTOs
│   ├── dtos/
│   └── use-cases/
├── domain/              # Entidades e Interfaces (Regras de negócio)
│   ├── entity/
│   └── repository/
├── infrastructure/      # Implementações externas (Express, DB em memória)
│   ├── controllers/
│   ├── repository/
│   └── routes/
└── main.ts              # Ponto de entrada da aplicação
```

## 🚀 Como Executar o Projeto

1. **Clone o repositório** (se aplicável).
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie a aplicação:**
   ```bash
   npx tsx src/main.ts
   ```
   A aplicação será iniciada (verifique a porta configurada no `main.ts`, geralmente `3000`).

## 📚 Endpoints (Exemplo)

Como é um CRUD de usuários, a API expõe rotas similares a:
- `POST /users` - Cria um novo usuário
- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Busca um usuário por ID
- `PUT /users/:id` - Atualiza um usuário
- `DELETE /users/:id` - Deleta um usuário

---
*Projeto desenvolvido para fins educacionais - FullCycle.*

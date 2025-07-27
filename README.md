# 🌟 Projeto Horas Complementares: Gestão de Horas Complementares com Estilo! 🚀

![Node.js](https://img.shields.io/badge/Node.js-v18-3c873a?logo=node.js&style=for-the-badge)
![Express](https://img.shields.io/badge/Express-v4.18.2-000000?logo=express&style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v14-336791?logo=postgresql&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ed?logo=docker&style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-ff4500?logo=json-web-tokens&style=for-the-badge)

> **Chega de burocracia!** 💥 O **Projeto Horas Complementares** transforma o gerenciamento de horas complementares em algo moderno, seguro e descomplicado! 🎉

## 🔍 O Problema que Atacamos

Gerenciar **horas complementares** em faculdades é um caos! 😫 Planilhas confusas, processos manuais e falta de transparência criam:

- **😓 Burocracia Sem Fim**: Alunos e coordenadores perdem horas com papelada.
- **🤔 Falta de Visibilidade**: Difícil saber o status das horas (pendente? aprovado?).
- **🔓 Segurança Frágil**: Dados sensíveis em planilhas ou sistemas vulneráveis.
- **📉 Limitações de Escala**: Soluções manuais não acompanham o crescimento.

## 🎯 Nossa Solução Épica

O **Projeto Horas Complementares** é uma **API RESTful** desenvolvida com **Node.js**, **Express** e **PostgreSQL**, que **revoluciona** a gestão de horas complementares. Com autenticação **JWT** e suporte a **Docker**, oferecemos:

- **👨‍🎓 Alunos**: Registre e acompanhe horas com facilidade, em tempo real.
- **👩‍🏫 Coordenadores**: Aprove horas com um clique, com acesso ultra seguro.
- **🏫 Instituições**: Gestão centralizada, escalável e à prova de erros.

**Por que somos incríveis?** Porque tornamos a gestão de horas complementares rápida, segura e com um toque de estilo! 🔥

## 🌈 Funcionalidades que Brilham

- 🔐 **Autenticação de Nível Pro**:
  - Cadastro com senhas criptografadas (`bcryptjs`).
  - Login com tokens JWT para máxima segurança.
- 📊 **Gestão de Horas Complementares**:
  - Liste, cadastre, atualize e delete horas com facilidade.
  - Aprovação de horas exclusiva para coordenadores.
  - Cálculo automático de horas restantes.
- 🐳 **Docker na Veia**:
  - Deploy instantâneo com Docker e Docker Compose.
  - Banco PostgreSQL inicializado automaticamente.

## 🛠️ Tecnologias Top

- **Backend**: Node.js v18, Express
- **Banco de Dados**: PostgreSQL v14
- **Autenticação**: JWT, bcryptjs
- **Configuração**: dotenv (variáveis de ambiente)
- **Containerização**: Docker, Docker Compose

## 📂 Estrutura do Projeto

```
projeto-facul/
├── 🐳 Dockerfile                # Imagem Node.js, pronta para decolar
├── 🐳 docker-compose.yml        # Orquestra Node.js e PostgreSQL
├── 🗄️ init.sql                  # Script SQL para criar as tabelas
├── 📦 package.json              # Dependências do projeto
├── src/
│   ├── 🚀 index.js              # Ponto de entrada da API
│   ├── routes/
│   │   ├── routes.js            # Rotas para horas complementares
│   │   ├── authRoutes.js        # Rotas de autenticação
│   ├── middlewares/
│   │   ├── autenticarUsuario.js # Valida tokens JWT
│   │   ├── autorizarCoordenador.js # Restringe ações a coordenadores
│   │   ├── validacao.js         # Valida dados das requisições
│   │   ├── autenticarToken.js   # Middleware adicional de autenticação
│   ├── database/
│   │   ├── pool.js             # Conexão com o PostgreSQL
│   ├── controllers/
│   │   ├── controller.js       # Lógica de horas complementares
│   │   ├── authController.js   # Lógica de autenticação
```

## ⚙️ Pré-requisitos

- **Node.js** (v18+) – para rodar localmente sem Docker.
- **Docker** e **Docker Compose** – para um deploy épico! 🐳
- **PostgreSQL** (v14+) – se optar por execução local.
- **Insomnia** ou **Postman** – para testes fora do Docker.
- **curl** – para testes dentro do contêiner Docker.

## 📥 Instalação e Configuração

### 🖥️ Opção 1: Execução Local (Sem Docker)

1. **Clonar o Repositório** (se estiver em um Git):
   ```bash
   git clone <url-do-repositorio>
   cd projeto-facul
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar o Banco de Dados**:
   - Instale o PostgreSQL e crie o banco `faculdade`:
     ```bash
     psql -U postgres -c "CREATE DATABASE faculdade;"
     ```
   - Execute o script `init.sql`:
     ```bash
     psql -U postgres -d faculdade -f init.sql
     ```

4. **Configurar Variáveis de Ambiente**:
   - Crie um arquivo `.env` na raiz:
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=postgres
     DB_NAME=faculdade
     JWT_SECRET=segredo123
     ```

5. **Iniciar a Aplicação**:
   ```bash
   cd src
   node index.js
   ```
   - A API estará disponível em `http://localhost:3000`! 🌐

### 🐳 Opção 2: Execução com Docker

1. **Verificar o Docker**:
   - Certifique-se de que o **Docker Desktop** está rodando no Windows.
   - Confirme:
     ```bash
     docker --version
     docker-compose --version
     ```

2. **Construir as Imagens**:
   - Navegue até o projeto:
     ```bash
     cd "G:\learning\learning node\projeto-facul"
     ```
   - Execute:
     ```bash
     docker-compose build
     ```

3. **Iniciar os Contêineres**:
   ```bash
   docker-compose up -d
   ```
   - Levanta os serviços `app` (Node.js) e `db` (PostgreSQL).
   - O banco é inicializado com as tabelas de `init.sql`.

4. **Verificar os Logs**:
   ```bash
   docker-compose logs app
   ```
   - Veja: `Servidor rodando em http://localhost:3000`.
   - Para o banco:
     ```bash
     docker-compose logs db
     ```
     - Veja: `database system is ready to accept connections`.

5. **Parar os Contêineres**:
   ```bash
   docker-compose down
   ```
   - Para limpar os dados do banco:
     ```bash
     docker-compose down -v
     ```

## 🌐 Endpoints da API

| Método | Endpoint                                   | Descrição                              | Autenticação? |
|--------|--------------------------------------------|----------------------------------------|---------------|
| POST   | `/cadastro`                               | Cadastra um novo usuário              | Não           |
| POST   | `/login`                                  | Autentica e retorna JWT               | Não           |
| GET    | `/horas-complementares`                   | Lista horas complementares            | Sim (JWT)     |
| POST   | `/horas-complementares/horas`             | Cadastra horas complementares         | Sim (JWT)     |
| PUT    | `/horas-complementares/:id`               | Atualiza horas complementares         | Sim (JWT)     |
| PATCH  | `/horas-complementares/horas/:id/aprovar` | Aprova horas complementares           | Sim (JWT, coordenador) |
| DELETE | `/horas-complementares/:id`               | Exclui horas complementares           | Sim (JWT)     |

## 🧪 Como Testar

### 🎨 Teste com Insomnia/Postman (Fora do Docker)

1. **Configurar o Insomnia**:
   - Crie uma coleção e defina `base_url` como `http://localhost:3000`.
   - Salve os tokens JWT do `/login` em variáveis (ex.: `token_aluno`, `token_coordenador`).

2. **Testar Endpoints de Alunos**:
   - **Cadastrar Usuário**:
     - **Método**: POST
     - **URL**: `{{base_url}}/cadastro`
     - **Body** (JSON):
       ```json
       {
         "nome": "Ana Silva",
         "email": "ana@exemplo.com",
         "senha": "123456",
         "role": "aluno"
       }
       ```
     - **Resposta**: `201 Created`
       ```json
       {"mensagem":"Usuário cadastrado com sucesso!"}
       ```

   - **Login**:
     - **Método**: POST
     - **URL**: `{{base_url}}/login`
     - **Body** (JSON):
       ```json
       {
         "email": "ana@exemplo.com",
         "senha": "123456"
       }
       ```
     - **Resposta**: `200 OK`
       ```json
       {"mensagem":"Login realizado","token":"<token_aluno>"}
       ```
     - Salve o token em `token_aluno`.

   - **Cadastrar Horas**:
     - **Método**: POST
     - **URL**: `{{base_url}}/horas-complementares/horas`
     - **Headers**: `Authorization: Bearer {{token_aluno}}`
     - **Body** (JSON):
       ```json
       {
         "atividade": "Curso de Programação",
         "horas": 40
       }
       ```
     - **Resposta**: `201 Created`
       ```json
       {
         "mensagem": "Horas complementares cadastradas com sucesso!",
         "horasComplementares": {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "pendente"
         }
       }
       ```

   - **Listar Horas**:
     - **Método**: GET
     - **URL**: `{{base_url}}/horas-complementares`
     - **Headers**: `Authorization: Bearer {{token_aluno}}`
     - **Resposta**: `200 OK`
       ```json
       [
         {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "pendente"
         }
       ]
       ```

3. **Testar Endpoints de Coordenadores**:
   - **Cadastrar Coordenador**:
     - **Método**: POST
     - **URL**: `{{base_url}}/cadastro`
     - **Body** (JSON):
       ```json
       {
         "nome": "Prof. Carlos",
         "email": "carlos@exemplo.com",
         "senha": "123456",
         "role": "coordenador"
       }
       ```
     - **Resposta**: `201 Created`
       ```json
       {"mensagem":"Usuário cadastrado com sucesso!"}
       ```

   - **Login como Coordenador**:
     - **Método**: POST
     - **URL**: `{{base_url}}/login`
     - **Body** (JSON):
       ```json
       {
         "email": "carlos@exemplo.com",
         "senha": "segredo123"
       }
       ```
     - **Resposta**: `200 OK`
       ```json
       {"mensagem":"Login realizado","token":"<token_coordenador>"}
       ```
     - Salve o token em `token_coordenador`.

   - **Aprovar Horas**:
     - **Método**: PATCH
     - **URL**: `{{base_url}}/horas-complementares/horas/1/aprovar`
     - **Headers**: `Authorization: Bearer {{token_coordenador}}`
     - **Resposta**: `200 OK`
       ```json
       {
         "mensagem": "Horas complementares aprovadas com sucesso!",
         "horasComplementares": {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "aprovado"
         }
       }
       ```

   - **Erro de Permissão (Aluno Tentando Aprovar)**:
     - **Método**: PATCH
     - **URL**: `{{base_url}}/horas-complementares/horas/1/aprovar`
     - **Headers**: `Authorization: Bearer {{token_aluno}}`
     - **Resposta**: `403 Forbidden`
       ```json
       {"mensagem":"Acesso negado: apenas coordenadores podem aprovar horas"}
       ```

4. **Testar Casos de Erro**:
   - Token inválido (`401 Unauthorized`).
   - Permissões insuficientes (`403 Forbidden`).
   - ID inexistente (`404 Not Found`).
   - Dados inválidos (`400 Bad Request`).

### 🐳 Teste Dentro do Docker (com `curl`)

**Teste como um mestre diretamente no contêiner!** 💻 Use `curl` para enviar requisições e simular o Insomnia dentro do ambiente Docker. 🚀 Incluímos testes para endpoints de **alunos** e **coordenadores**.

1. **Acessar o Contêiner**:
   - Com os contêineres rodando (`docker-compose up -d`), acesse o contêiner `app`:
     ```bash
     docker exec -it projeto-facul_app sh
     ```

2. **Instalar `curl` (se necessário)**:
   - Verifique:
     ```bash
     curl --version
     ```
   - Se não estiver instalado:
     ```bash
     apk add curl
     ```

3. **Testar Endpoints de Alunos**:
   - **Cadastrar Usuário (Aluno)**:
     ```bash
     curl -X POST http://localhost:3000/cadastro \
     -H "Content-Type: application/json" \
     -d '{"nome":"Ana Silva","email":"ana@exemplo.com","senha":"123456","role":"aluno"}'
     ```
     - **Resposta**: `201 Created`
       ```json
       {"mensagem":"Usuário cadastrado com sucesso!"}
       ```

   - **Login (Aluno)**:
     ```bash
     curl -X POST http://localhost:3000/login \
     -H "Content-Type: application/json" \
     -d '{"email":"ana@exemplo.com","senha":"123456"}'
     ```
     - **Resposta**: `200 OK`
       ```json
       {"mensagem":"Login realizado","token":"<token_aluno>"}
       ```
     - Copie o `<token_aluno>`.

   - **Cadastrar Horas**:
     ```bash
     curl -X POST http://localhost:3000/horas-complementares/horas \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <token_aluno>" \
     -d '{"atividade":"Curso de Programação","horas":40}'
     ```
     - **Resposta**: `201 Created`
       ```json
       {
         "mensagem": "Horas complementares cadastradas com sucesso!",
         "horasComplementares": {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "pendente"
         }
       }
       ```

   - **Listar Horas**:
     ```bash
     curl -X GET http://localhost:3000/horas-complementares \
     -H "Authorization: Bearer <token_aluno>"
     ```
     - **Resposta**: `200 OK`
       ```json
       [
         {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "pendente"
         }
       ]
       ```

4. **Testar Endpoints de Coordenadores**:
   - **Cadastrar Usuário (Coordenador)**:
     ```bash
     curl -X POST http://localhost:3000/cadastro \
     -H "Content-Type: application/json" \
     -d '{"nome":"Prof. Carlos","email":"carlos@exemplo.com","senha":"segredo123","role":"coordenador"}'
     ```
     - **Resposta**: `201 Created`
       ```json
       {"mensagem":"Usuário cadastrado com sucesso!"}
       ```

   - **Login (Coordenador)**:
     ```bash
     curl -X POST http://localhost:3000/login \
     -H "Content-Type: application/json" \
     -d '{"email":"carlos@exemplo.com","senha":"segredo123"}'
     ```
     - **Resposta**: `200 OK`
       ```json
       {"mensagem":"Login realizado","token":"<token_coordenador>"}
       ```
     - Copie o `<token_coordenador>`.

   - **Aprovar Horas**:
     ```bash
     curl -X PATCH http://localhost:3000/horas-complementares/horas/1/aprovar \
     -H "Authorization: Bearer <token_coordenador>"
     ```
     - **Resposta**: `200 OK`
       ```json
       {
         "mensagem": "Horas complementares aprovadas com sucesso!",
         "horasComplementares": {
           "id": 1,
           "atividade": "Curso de Programação",
           "horas": 40,
           "status": "aprovado"
         }
       }
       ```

   - **Erro de Permissão (Aluno Tentando Aprovar)**:
     ```bash
     curl -X PATCH http://localhost:3000/horas-complementares/horas/1/aprovar \
     -H "Authorization: Bearer <token_aluno>"
     ```
     - **Resposta**: `403 Forbidden`
       ```json
       {"mensagem":"Acesso negado: apenas coordenadores podem aprovar horas"}
       ```

5. **Testar Outros Endpoints**:
   - **Atualizar Horas**:
     ```bash
     curl -X PUT http://localhost:3000/horas-complementares/1 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <token_aluno>" \
     -d '{"atividade":"Curso Atualizado","horas":50}'
     ```
   - **Excluir Horas**:
     ```bash
     curl -X DELETE http://localhost:3000/horas-complementares/1 \
     -H "Authorization: Bearer <token_aluno>"
     ```

6. **Testar Casos de Erro**:
   - Token inválido (`401 Unauthorized`).
   - Permissões insuficientes (`403 Forbidden`).
   - ID inexistente (`404 Not Found`).
   - Dados inválidos (`400 Bad Request`).

7. **Sair do Contêiner**:
   ```bash
   exit
   ```


## 🔧 Solução de Problemas

- **Erro de Conexão com o Docker** (`open //./pipe/dockerDesktopLinuxEngine`):
  - **Causa**: Docker Desktop não está rodando ou WSL 2 está mal configurado.
  - **Solução**:
    1. Verifique o Docker Desktop:
       ```bash
       docker version
       ```
    2. Confirme o WSL 2:
       ```powershell
       wsl --list --all
       ```
       - Deve listar `docker-desktop` e `docker-desktop-data` como `Running`.
    3. Reinicie o Docker Desktop ou reinstale:
       - **Settings > Troubleshoot > Reset to factory defaults**.
    4. Execute como administrador:
       ```bash
       docker-compose build
       ```

- **Erro no `npm install` durante a construção**:
  - Verifique o `package.json`:
    ```json
    {
      "dependencies": {
        "express": "^4.18.2",
        "pg": "^8.11.3",
        "jsonwebtoken": "^9.0.2",
        "bcryptjs": "^2.4.3",
        "dotenv": "^16.0.3"
      }
    }
    ```
  - Reconstrua sem cache:
    ```bash
    docker-compose build --no-cache
    ```

- **Erro de conexão com o banco**:
  - Confirme `DB_HOST=db` no `docker-compose.yml` (serviço `app`).
  - Verifique os logs:
    ```bash
    docker-compose logs db
    ```

- **Porta em uso (3000 ou 5432)**:
  - Identifique processos conflitantes:
    ```bash
    netstat -aon | findstr :3000
    netstat -aon | findstr :5432
    ```
  - Encerre os processos:
    ```bash
    taskkill /PID <pid> /F
    ```

- **Erro ao testar com `curl` no contêiner**:
  - Confirme que o contêiner `app` está rodando:
    ```bash
    docker ps
    ```
  - Verifique os logs:
    ```bash
    docker-compose logs app
    ```
  - Instale `curl` no contêiner:
    ```bash
    apk add curl
    ```

## 🌟 Por que o Projeto Facul é Incrível?

- **💨 Automatização Total**: Chega de papelada, tudo digital e rápido!
- **🔒 Segurança Máxima**: JWT e senhas criptografadas protegem seus dados.
- **🚀 Deploy Fácil**: Docker leva sua aplicação para qualquer lugar.
- **📊 Transparência Total**: Status das horas sempre ao alcance!

## 🤝 Contribua com a Revolução!

1. Faça um fork do repositório.
2. Crie uma branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona minha feature épica"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request e faça parte da mudança! 🌈

 modifique e compartilhe à vontade! 🚀

---

**Desenvolvido com 💻, ☕ e muita energia por Thiago Sousa**

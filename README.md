# English Vocab

<h1 align="center">English Vocab</h1>

<p align="center">
  Aplicação web para estudo de vocabulário em inglês, consumindo um BFF integrado com OpenAI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge" alt="Licença">
</p>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológica](#stack-tecnológica)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Deploy](#deploy)
- [Licença](#licença)

---

## 📖 Sobre o Projeto

O **English Vocab** é uma aplicação web desenvolvida como parte das atividades da disciplina de Front-End Engineering da FIAP. O projeto tem como objetivo auxiliar no estudo de inglês através da exposição a palavras do vocabulário, suas descrições e casos de uso práticos.

A aplicação consome um Backend For Frontend (BFF) que integra com a API da OpenAI para gerar conteúdo educativo. Caso o BFF esteja indisponível, a aplicação conta com um fallback que retorna uma lista predefinida de palavras.

---

## ⚡ Funcionalidades

- **Landing Page**: Interface inicial com navegação para as páginas de estudo
- **Página Única**: Exibe uma palavra por vez com navegação entre elas
- **Página Lista**: Apresenta todas as palavras em formato de grid
- **Fallback Inteligente**: Quando o BFF está indisponível, utiliza lista local de palavras
- **Design Responsivo**: Funciona em desktop e dispositivos móveis
- **Interface Moderna**: Visual minimalista com tema dark

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
|------------|-----------|
| **Vue.js 3** | Framework JavaScript progressivo para construção da interface |
| **Vue Router** | Roteamento oficial para SPA (Single Page Application) |
| **Tailwind CSS v4** | Framework CSS utilitário para estilização |
| **Vite** | Build tool e servidor de desenvolvimento |
| **JavaScript** | Linguagem de programação |

### Integrações

| Serviço | Descrição |
|---------|-----------|
| **BFF FIAP** | Backend For Frontend integrado com OpenAI |
| **Render** | Plataforma de hospedagem do BFF |

---

## 📦 Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** ou **yarn** como gerenciador de pacotes

---

## 🚀 Como Executar

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd english-vocab
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### 4. Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### 5. Pré-visualização do build

```bash
npm run preview
```

---

## 🌐 Deploy

### Deploy com Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure o projeto:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em "Deploy"

### Deploy com Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para a área de deploy
3. Ou conecte seu repositório GitHub

### Deploy com GitHub Pages

1. Adicione o pacote `gh-pages`:

```bash
npm install -D gh-pages
```

2. Adicione os scripts no `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Execute:

```bash
npm run deploy
```

### Deploy Estático

Como a aplicação é um SPA (Single Page Application), qualquer servidor web estático pode ser utilizado:
- Apache
- Nginx
- Amazon S3
- Google Cloud Storage

---

## 📂 Estrutura do Projeto

```
english-vocab/
├── public/
├── src/
│   ├── data/
│   │   └── words.js       # Dados e fallback de palavras
│   ├── pages/
│   │   ├── LandingPage.vue
│   │   ├── UnicaPage.vue
│   │   └── ListaPage.vue
│   ├── router/
│   │   └── index.js       # Configuração de rotas
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🔧 Configurações Adicionais

### Variáveis de Ambiente

A aplicação tenta consumir o BFF disponível em:

```
https://fiap-bff-2502.onrender.com/ask
```

Para utilizar um endpoint diferente, modifique o arquivo `src/data/words.js`.

### Rota do Vue Router

O sistema possui 3 rotas:
- `/` - Landing Page
- `/unica` - Página com palavra única
- `/lista` - Página com lista de palavras

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autores

Desenvolvido como parte da disciplina de Front-End Engineering da FIAP.

---

<p align="center">
  Feito com ❤️ para estudo de inglês
</p>

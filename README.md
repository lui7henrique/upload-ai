

## upload.ai ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Build Pending](https://img.shields.io/badge/build-pending-yellow.svg)

O upload.ai é um projeto que permite aos usuários carregar vídeos (.mp4) e convertê-los em áudio (.mp3). Além disso, ele é capaz de gerar transcrições do conteúdo dos vídeos e criar respostas com base em prompts predefinidos. Isso é útil para gerar títulos e descrições para vídeos no YouTube.

![Capa do Projeto](https://raw.githubusercontent.com/lui7henrique/upload-ai/main/cover.jpeg)

## Funcionalidades
- [x] Upload de vídeos e conversão para áudio
- [x] Geração automática de transcrições de áudio
- [x] Criação de respostas com base em prompts personalizados

## Estrutura do Projeto
O projeto está dividido em duas partes:
- Front-end (nomeado como "web")
- Back-end (nomeado como "api")

### Tecnologias Utilizadas (Front-end)

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [axios](https://axios-http.com/)
- [ffmpeg](https://ffmpeg.org/)
- [ai](https://github.com/fake/ai)

#### Como Executar o Front-end

1. Clone o repositório do front-end:

   ```shell
   $ git clone https://github.com/seu-usuario/upload.ai.git
   ```

2. Navegue até a pasta:

   ```shell
   $ cd upload-ai && cd upload web
   ```

3. Instale as dependências:

   ```shell
   $ pnpm install
   ```

4. Inicie a aplicação:

   ```shell
   $ pnpm run dev
   ```

### Tecnologias Utilizadas (Back-end)

- [Fastify](https://fastify.io/)
- [Prisma](https://www.prisma.io/)
- [OpenAI](https://openai.com/)
- [zod](https://github.com/colinhacks/zod)

#### Como Iniciar o Projeto Back-end

1. Navegue até a pasta:

   ```shell
   $ cd upload.ai-api
   ```

2. Instale as dependências:

   ```shell
   $ pnpm install
   ```

3. Configure as variáveis de ambiente em um arquivo `.env`.

   ```shell
   # Exemplo de variáveis de ambiente
   DATABASE_URL='sqlite://./database.db'
   OPENAI_API_KEY='sua-chave-de-api-openai'
   ```

3. Inicie o banco de dados: 

   ```shell
   # npx prisma migrate dev 
   ```

4. Popule a tabela de `prompts`

   ```shell
   # npx prisma db seed
   ```

5. Inicie o servidor:

   ```shell
   $ pnpm run dev
   ```

## Autor

Luiz Henrique - Software Engineer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)

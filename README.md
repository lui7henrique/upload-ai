## upload.ai ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Build Pending](https://img.shields.io/badge/build-pending-yellow.svg)

`upload.ai` is a project that allows users to upload videos (.mp4) and convert them to audio (.mp3). Additionally, it can generate transcriptions of video content and create responses based on predefined prompts. This is useful for generating titles and descriptions for YouTube videos.

![Project Cover](https://raw.githubusercontent.com/lui7henrique/upload-ai/main/cover.jpeg)

## Features
- [x] Video upload and conversion to audio
- [x] Automatic generation of audio transcriptions
- [x] Creation of responses based on custom prompts

## Technologies

**Front-end**: 
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [axios](https://axios-http.com/)
- [ffmpeg](https://ffmpeg.org/)
- [ai](https://www.npmjs.com/package/ai)

**Back-end**: 
- [Fastify](https://fastify.io/)
- [Prisma](https://www.prisma.io/)
- [OpenAI](https://openai.com/)
- [zod](https://github.com/colinhacks/zod)

## How to Run:

First of all, start the back-end (api) project, following these steps: 

1. Clone the repository:
   ```shell
   $ git clone https://github.com/your-username/upload.ai.git
   ```

2. Navigate to the folder:

   ```shell
   $ cd upload.ai-api
   ```

3. Install dependencies:

   ```shell
   $ pnpm install
   ```

4. Configure environment variables in a `.env` file.

   ```shell
   # Example environment variables
   DATABASE_URL='file:./dev.db'
   OPENAI_API_KEY='your-openai-api-key'
   ```

5. Start the database:

   ```shell
   # npx prisma migrate dev 
   ```

6. Populate the `prompts` table:

   ```shell
   # npx prisma db seed
   ```

7. Start the server:

   ```shell
   $ pnpm run dev
   ```

Now, with the back-end project running, run the front-end project in new terminal following these steps:

1. Navigate to the folder:

   ```shell
   $ cd upload-ai && cd upload web
   ```

2. Install dependencies:

   ```shell
   $ pnpm install
   ```

3. Start the application:

   ```shell
   $ pnpm run dev
   ```

## Author

Luiz Henrique - Software Developer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)

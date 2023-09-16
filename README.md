## upload.ai ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Build Pending](https://img.shields.io/badge/build-pending-yellow.svg)

`upload.ai` is a project that allows users to upload videos (.mp4) and convert them to audio (.mp3). Additionally, it can generate transcriptions of video content and create responses based on predefined prompts. This is useful for generating titles and descriptions for YouTube videos.

![Project Cover](https://raw.githubusercontent.com/lui7henrique/upload-ai/main/cover.jpeg)

## Features
- [x] Video upload and conversion to audio
- [x] Automatic generation of audio transcriptions
- [x] Creation of responses based on custom prompts

## Project Structure
The project is divided into two parts:
- Front-end (named "web")
- Back-end (named "api")

### Technologies Used (Front-end)

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [axios](https://axios-http.com/)
- [ffmpeg](https://ffmpeg.org/)
- [ai](https://github.com/fake/ai)

#### How to Run the Front-end

1. Clone the front-end repository:

   ```shell
   $ git clone https://github.com/your-username/upload.ai.git
   ```

2. Navigate to the folder:

   ```shell
   $ cd upload-ai && cd upload web
   ```

3. Install dependencies:

   ```shell
   $ pnpm install
   ```

4. Start the application:

   ```shell
   $ pnpm run dev
   ```

### Technologies Used (Back-end)

- [Fastify](https://fastify.io/)
- [Prisma](https://www.prisma.io/)
- [OpenAI](https://openai.com/)
- [zod](https://github.com/colinhacks/zod)

#### How to Start the Back-end Project

1. Navigate to the folder:

   ```shell
   $ cd upload.ai-api
   ```

2. Install dependencies:

   ```shell
   $ pnpm install
   ```

3. Configure environment variables in a `.env` file.

   ```shell
   # Example environment variables
   DATABASE_URL='file:./dev.db'
   OPENAI_API_KEY='your-openai-api-key'
   ```

4. Start the database:

   ```shell
   # npx prisma migrate dev 
   ```

5. Populate the `prompts` table:

   ```shell
   # npx prisma db seed
   ```

6. Start the server:

   ```shell
   $ pnpm run dev
   ```

## Author

Luiz Henrique - Software Developer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)

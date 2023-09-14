import 'dotenv/config'
import { OpenAI } from 'openai'

const apiKey = process.env.OPENAI_KEY

export const openAi = new OpenAI({
  apiKey,
})

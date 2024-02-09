import { sql } from '@vercel/postgres'

export default async function handler(request, response) {
  const { slug } = request.query
  try {
    increment(slug)

    const result = await sql`SELECT count FROM views WHERE slug = ${slug}`
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json({ error })
  }
}

async function increment(slug) {
  await sql`
  INSERT INTO views (slug, count)
  VALUES (${slug}, 1)
  ON CONFLICT (slug)
  DO UPDATE SET count = views.count + 1
  `
}

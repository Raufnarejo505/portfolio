export type GithubRepo = {
  id: string
  name: string
  description: string | null
  stars: number
  language: string | null
  url: string
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Raufnarejo505"
const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN

type GitHubApiRepo = {
  id: number
  name: string
  description: string | null
  stargazers_count: number
  language: string | null
  html_url: string
}

export async function fetchPinnedRepos(): Promise<GithubRepo[]> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
  }

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers,
        next: { revalidate: 60 * 60 },
      }
    )

    if (!response.ok) {
      console.warn("Unable to load GitHub repositories", await response.text())
      return []
    }

    const data = (await response.json()) as GitHubApiRepo[]

    return data.map((repo) => ({
      id: repo.id?.toString() ?? repo.name,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count ?? 0,
      language: repo.language,
      url: repo.html_url,
    }))
  } catch (error) {
    console.error("GitHub fetch failed", error)
    return []
  }
}


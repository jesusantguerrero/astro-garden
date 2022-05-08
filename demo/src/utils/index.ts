export const getBackLinks = async (allSeeds: Record<string, () => Promise<{
    [key: string]: any;
}>>, { pageTitle, seedPath, seedUrl }) => {
    const seeds = await Promise.all(
        Object.entries(allSeeds).map(async ([key, seed]) => {
            const url = key.replace(seedPath, seedUrl).replace('.md', '/')
            return seed().then(async content => {
              const source = await content.default()
              return {
                  ...source.frontmatter,
                  url
              }
            })
        })
    )
    return seeds.filter(seed => {
    return seed.astro.source.toLowerCase().includes(pageTitle.toLowerCase())
  });
  }
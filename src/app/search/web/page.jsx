const WebSearch = async ({ searchParams }) => {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
`)
  const data = await res.json()
  const results = data.items

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.cacheId}>{result.title}</h1>)}
    </>
  )
}
export default WebSearch

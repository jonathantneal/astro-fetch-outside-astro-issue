const fetched_metadata = fetch('http://localhost:3000/metadata.json').then(
	response => response.json()
)

export { fetched_metadata }
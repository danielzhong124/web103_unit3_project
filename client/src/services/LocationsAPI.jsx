const getAllLocations = async () => {
  try {
    const response = await fetch('/api/locations')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching locations:', error)
  }
}

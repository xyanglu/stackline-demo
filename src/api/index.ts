export async function fetchProductData() {
  try {
    const response = await fetch(
      '/data/stackline_frontend_assessment_data_2021.json'
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching product data:', error)
    throw error
  }
}

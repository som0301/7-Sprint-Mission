export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString()

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const body = await response.json()
    return body
  } catch (error) {
    console.error('상품 데이터를 불러오는데 실패했습니다: ', error)
    throw error
  }
}

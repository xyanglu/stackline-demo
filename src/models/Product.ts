export interface Product {
  brand: string
  details: string
  id: string
  image: string
  retailer: string
  reviews: string
  subtitle: string
  tags: string
  title: string
  sales: {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
  }[]
}

export interface ProductArray {
  products: Product[]
}

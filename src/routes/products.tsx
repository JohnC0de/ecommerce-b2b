import { Component, For, Show } from "solid-js"
import { createRouteData } from "solid-start"
import { Product } from "./api/products"

const ProductsPage: Component = () => {
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5173/api/products")
    return (await res.json()) as Product[]
  }

  const products = createRouteData(fetchProducts)

  return (
    <div class="container mx-auto">
      <h1 class="text-3xl text-center">Products</h1>
      <Show when={products()} fallback={<div>Loading...</div>}>
        <table class="table-auto">
          <thead class="bg-gray-100">
            <tr class="text-left">
              <th class="px-4 py-2">Id</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <For each={products()}>
              {product => (
                <tr class="border-t">
                  <td class="px-4 py-2">{product.id}</td>
                  <td class="px-4 py-2">{product.name}</td>
                  <td class="px-4 py-2">{product.price}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </Show>
    </div>
  )
}
export default ProductsPage

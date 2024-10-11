import { DataTable } from "@/components/data-table"
import { columns } from "./columns"

export default function InventoryPage() {
  const data = [
    { id: 1, name: "Product A", sku: "SKU001", quantity: 100, price: 19.99 },
    { id: 2, name: "Product B", sku: "SKU002", quantity: 75, price: 24.99 },
    { id: 3, name: "Product C", sku: "SKU003", quantity: 50, price: 14.99 },
    // Add more sample data as needed
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
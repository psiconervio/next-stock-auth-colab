import { DataTable } from "@/components/data-table"
import { columns } from "./columns"

export default function OrdersPage() {
  const data = [
    { id: 1, orderNumber: "ORD001", customer: "John Doe", total: 99.99, status: "Shipped" },
    { id: 2, orderNumber: "ORD002", customer: "Jane Smith", total: 149.99, status: "Processing" },
    { id: 3, orderNumber: "ORD003", customer: "Bob Johnson", total: 74.99, status: "Delivered" },
    // Add more sample data as needed
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Orders</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
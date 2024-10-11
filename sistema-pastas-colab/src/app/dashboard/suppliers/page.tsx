import { DataTable } from "@/components/data-table"
import { columns } from "./columns"

export default function SuppliersPage() {
  const data = [
    { id: 1, name: "Supplier A", contact: "John Smith", email: "john@suppliera.com", phone: "123-456-7890" },
    { id: 2, name: "Supplier B", contact: "Jane Doe", email: "jane@supplierb.com", phone: "987-654-3210" },
    { id: 3, name: "Supplier C", contact: "Bob Johnson", email: "bob@supplierc.com", phone: "456-789-0123" },
    // Add more sample data as needed
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Suppliers</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
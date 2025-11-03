import { columns, Category } from "./columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      categoryName: "Food",
      isActive: true,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
        <h3 className="my-4 text-2xl font-semibold">Category List</h3>

        <DataTable columns={columns} data={data} />
    </div>
  )
}
"use client"

import { ColumnDef } from "@tanstack/react-table"

import EditCategory from "@/components/form/(edit)/category"
import DeleteCategory from "@/components/form/(delete)/category"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Category = {
  id: string
  categoryName: string
  isActive: boolean
}

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "categoryName",
    header: "Category Name",
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
        return (
            <p>{ row.getValue("isActive") ? "Active" : "Inactive" }</p>
        )
    }
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
        return (
            <div className="flex justify-center gap-x-2">
                {EditCategory(row.getValue("id"))}
                {DeleteCategory(row.getValue("id"))}
            </div>
        )
    }
  }
]
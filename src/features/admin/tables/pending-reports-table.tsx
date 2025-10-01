'use client'
import GlobalTable from "@/components/tables/global-table"
import { StolenReportProps, StolenReportsProps } from "@/types"
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import Image from "next/image"
import { format } from "date-fns"

export default function PendingReportsTable({ reports }: StolenReportsProps) {
  const data = reports || []

  const columnHelper = createColumnHelper<StolenReportProps>()

  const columns = [
    columnHelper.accessor("image", {
      cell: (info) => <Image src={info.getValue()} alt="Stolen Item Image" width={30} height={30} />
    }),
    columnHelper.accessor("item", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("registration", {
      cell: (info) => info.getValue !== null ? info.getValue() : 'N/A'
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('contactNumber', {
      header: 'Contact Number',
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('found', {
      cell: (info) => info.getValue() ? 'Yes' : 'No'
    }),
    columnHelper.accessor('featured', {
      cell: (info) => info.getValue() ? 'Yes' : 'No'
    }),
    columnHelper.accessor('published', {
      cell: (info) => info.getValue() ? 'Yes' : 'No'
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => format(info.getValue(), "dd-MM-yy hh:mm"),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 10
      }
    }
  })
  return (
    <>
      <GlobalTable table={table} />
    </>
  )
}


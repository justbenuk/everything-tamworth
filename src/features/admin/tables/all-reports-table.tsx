'use client'
import GlobalTable from "@/components/tables/global-table"
import { StolenReportProps, StolenReportsProps } from "@/types"
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import Image from "next/image"
import { format } from "date-fns"
import { CheckIcon, Trash2Icon, X } from "lucide-react"
import GlobalTableSearch from "@/components/tables/global-table-search"
import { Button } from "@/components/ui/button"
import GlobalTablePagination from "@/components/tables/global-table-pagination"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { deleteStolenReportAction, updateStolenReportFeaturedAction, updateStolenReportFoundAction, updateStolenReportPublishedAction } from "../admin-crime-actions"
import toast from "react-hot-toast"

export default function AllReportsTable({ reports }: StolenReportsProps) {
  const data = reports || []
  const columnHelper = createColumnHelper<StolenReportProps>()

  async function deleteReport(id: string) {
    const { success, message } = await deleteStolenReportAction(id)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }
  async function updateReportAsfeatured(id: string, featured: boolean) {
    await updateStolenReportFeaturedAction(id, featured)
  }

  async function updateReportAsPublished(id: string, published: boolean) {
    await updateStolenReportPublishedAction(id, published)
  }
  async function updateReportAsfound(id: string, found: boolean) {
    await updateStolenReportFoundAction(id, found)
  }

  const columns = [
    columnHelper.accessor("image", {
      cell: (info) => <Image src={info.getValue()} alt="Stolen Item Image" width={30} height={30} />
    }),
    columnHelper.accessor("make", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("model", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("registration", {
      cell: (info) => info.getValue !== null ? info.getValue() : 'N/A'
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue !== null ? info.getValue() : 'N/A'
    }),
    columnHelper.accessor('found', {
      cell: (info) => info.getValue() ? (
        <Button onClick={() => updateReportAsfound(info.row.original.id, false)} variant={'ghost'}>
          <CheckIcon className="text-green-500" />
        </Button>
      ) : (
        <Button onClick={() => updateReportAsfound(info.row.original.id, true)} variant={'ghost'}>
          <X className="text-red-500" />
        </Button>
      )
    }),
    columnHelper.accessor('featured', {
      cell: (info) => info.getValue() ? (
        <Button onClick={() => updateReportAsfeatured(info.row.original.id, false)} variant={'ghost'}>
          <CheckIcon className="text-green-500" />
        </Button>
      ) : (
        <Button onClick={() => updateReportAsfeatured(info.row.original.id, true)} variant={'ghost'}>
          <X className="text-red-500" />
        </Button>
      )
    }),
    columnHelper.accessor('published', {
      cell: (info) => info.getValue() ? (
        <Button onClick={() => updateReportAsPublished(info.row.original.id, false)} variant={'ghost'}>
          <CheckIcon className="text-green-500" />
        </Button>
      ) : (
        <Button onClick={() => updateReportAsPublished(info.row.original.id, true)} variant={'ghost'}>
          <X className="text-red-500" />
        </Button>
      )
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => format(info.getValue(), "dd-MM-yy hh:mm"),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: info => {
        return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={'outline'} size={'icon'} >
                <Trash2Icon className="text-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the report
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteReport(info.row.original.id)}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      }
    })
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
      <GlobalTableSearch table={table} />
      <GlobalTable table={table} />
      <GlobalTablePagination table={table} />
    </>
  )
}


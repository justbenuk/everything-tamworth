import { Table as TanstackTable } from '@tanstack/react-table'
import { Input } from '../ui/input'

type GlobalSearchProps<T> = {
  table: TanstackTable<T>
}

export default function GlobalTableSearch<T>({ table }: GlobalSearchProps<T>) {

  const globalFilter = table.getState().globalFilter ?? ""
  const onGlobalFilterChange = table.setGlobalFilter


  return (
    <div className='lg:max-w-xl pb-4'>
      <Input type='text' value={globalFilter} onChange={(e) => onGlobalFilterChange(e.target.value)} placeholder='Search Table' className="border px-3 py-1 rounded-md" />
    </div>
  )
}


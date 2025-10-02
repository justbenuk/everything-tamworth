import { Table as TanstackTable } from "@tanstack/react-table";
import { Button } from "../ui/button";

type PaginationProps<T> = {
  table: TanstackTable<T>;
};

export default function GlobalTablePagination<T>({ table }: PaginationProps<T>) {
  return (
    <div className="flex items-center justify-center space-x-8 py-4">
      <Button variant={"outline"} size={"sm"} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        Previous
      </Button>
      <span className="flex items-center gap-1 text-xs">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <Button variant={"outline"} size={"sm"} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        Next
      </Button>
    </div>
  );
}

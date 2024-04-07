import * as React from "react";
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef, useReactTable, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Input } from "@/app/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Link } from 'next/link';
import axios from "axios";

const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                style={{ border: "1px solid #000" }}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                style={{ border: "1px solid #000" }}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
        showOnMobile: true, // Added this property to show on mobile
    },
    {
        accessorKey: "source",
        header: "Source",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("source")}</div>
        ),
        showOnMobile: false, // Hide on mobile
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="hidden md:flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase hidden md:block">{row.getValue("email")}</div>,
        showOnMobile: false, // Hide on mobile
    },
    {
        accessorKey: "phone",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="hidden md:block"
                >
                    Phone
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase hidden md:block">{row.getValue("phone")}</div>,
    },
];

export default function DataTableDemo() {
    const FetchData = async () => {
        try {
            let employeeid;
            if (typeof window !== "undefined") {
                employeeid = JSON.parse(localStorage.getItem("userData"))
            }
            const response = await axios.get(`http://localhost:8080/api/leads/${employeeid.userID}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const FinalData = response.data.map((Item) => {
                return {
                    id: Item._id,
                    name: Item.name,
                    email: Item.email,
                    source: Item.source,
                    phone: Item.phone
                }
            })
            setData(FinalData);
        } catch (err) {
            console.error(err);
        }
    }
    React.useEffect(() => {
        console.log('fetching')
        FetchData();
    }, [])
    const [data, setData] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data: data,
        columns: columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting: sorting,
            columnFilters: columnFilters,
            columnVisibility: columnVisibility,
            rowSelection: rowSelection,
        },
    });

    const handleSelectLeads = () => {
        setOpen1(!open1);
        const selectedLeads = table.getFilteredSelectedRowModel().rows.map(row => row.original);
        setSelectedLeads(selectedLeads)
        console.log(selectedLeads);
    }

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter name..."
                    value={(table.getColumn("name")?.getFilterValue() || "")}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="hidden md:flex">
                        <Button variant="outline" className="ml-auto">
                            Columns
                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
    {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
            <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                as={Link} // Make each row a Link component
                to={`/${row.original.id}`} // Redirect to route based on ID
            >
                {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                ))}
            </TableRow>
        ))
    ) : (
        <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
            </TableCell>
        </TableRow>
    )}
</TableBody>

                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground hidden md:block">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

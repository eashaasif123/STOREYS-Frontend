'use client'

import * as React from "react";
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
    ColumnDef,
    useReactTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from "axios"

const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                style={{border: "1px solid #000"}}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                style={{border: "1px solid #000"}}
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
    },
    {
        accessorKey: "source",
        header: "Source",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("source")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase hidden md:block">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => (
            <div className="capitalize hidden md:block">{row.getValue("phone")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default function DataTableDemo({ fetchDataAgain }) {
    const FetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/api/leads`, {
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
        }catch(err){
            console.error(err);
        }
    }
    React.useEffect(()=>{
        FetchData();
    }, [fetchDataAgain])
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

    return (
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: "flex items-center py-4" },
                React.createElement(Input, {
                    placeholder: "Filter emails...",
                    value: (table.getColumn("email")?.getFilterValue() || ""),
                    onChange: (event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value),
                    className: "max-w-sm",
                }),
                React.createElement(DropdownMenu, null,
                    React.createElement(DropdownMenuTrigger, { asChild: true },
                        React.createElement(Button, { variant: "outline", className: "ml-auto" },
                            "Columns ",
                            React.createElement(ChevronDownIcon, { className: "ml-2 h-4 w-4" }))),

                    React.createElement(DropdownMenuContent, { align: "end" },
                        table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    React.createElement(DropdownMenuCheckboxItem, {
                                        key: column.id,
                                        className: "capitalize",
                                        checked: column.getIsVisible(),
                                        onCheckedChange: (value) =>
                                            column.toggleVisibility(!!value),
                                    },
                                        column.id
                                    )
                                );
                            })))
            ),
            React.createElement("div", { className: "rounded-md border" },
                React.createElement(Table, null,
                    React.createElement(TableHeader, null,
                        table.getHeaderGroups().map((headerGroup) =>
                            React.createElement(TableRow, { key: headerGroup.id },
                                headerGroup.headers.map((header) => {
                                    return (
                                        React.createElement(TableHead, { key: header.id },
                                            header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                ))
                                    );
                                })
                            )
                        )
                    ),
                    React.createElement(TableBody, null,
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) =>
                                React.createElement(TableRow, {
                                    key: row.id,
                                    "data-state": row.getIsSelected() && "selected",
                                },
                                    row.getVisibleCells().map((cell) =>
                                        React.createElement(TableCell, { key: cell.id },
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            ))
                                    )
                                )
                            )
                        ) : (
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, {
                                    colSpan: columns.length,
                                    className: "h-24 text-center",
                                },
                                    "No results."
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement("div", { className: "flex items-center justify-end space-x-2 py-4" },
                React.createElement("div", { className: "flex-1 text-sm text-muted-foreground" },
                    table.getFilteredSelectedRowModel().rows.length, " of ",
                    table.getFilteredRowModel().rows.length, " row(s) selected."
                ),
                React.createElement("div", { className: "space-x-2" },
                    React.createElement(Button, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => table.previousPage(),
                        disabled: !table.getCanPreviousPage(),
                    },
                        "Previous"
                    ),
                    React.createElement(Button, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => table.nextPage(),
                        disabled: !table.getCanNextPage(),
                    },
                        "Next"
                    )
                )
            )
        )
    );
}

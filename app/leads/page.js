'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"
import { Button } from "@/app/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Input } from "@/app/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/app/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/app/components/ui/tooltip"
import DataTableDemo from "./table"
import UploadDialog from './UploadDialog'
import AssignLeadsDialog from './AssignLead'
import LeadsDetails from './leadsDetail'

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [selectedLeads, setSelectedLeads] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {
        const box = document.querySelector('.animated-box');
        box.classList.add('animate');
        // Cleanup function to remove animation class on unmount
        return () => box.classList.remove('animate');
      }, []);

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="bg-blue-500 text-white font-semibold fixed inset-y-0 left-0 z-10 hidden w-14 flex-col shadow-md border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <TooltipProvider>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/admin"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Orders</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Orders</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Package className="h-5 w-5" />
                                <span className="sr-only">Leads</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Leads</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                <Users2 className="h-5 w-5" />
                                <span className="sr-only">Customers</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Customers</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <LineChart className="h-5 w-5" />
                                <span className="sr-only">Analytics</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Analytics</TooltipContent>
                    </Tooltip>
                                </TooltipProvider>
                    
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                    </TooltipProvider>

                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header style={{zIndex: 12}} className="z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 bg-slate-300">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Leads
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/dashboard/admin">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/leads">Leads</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <img
                                    src="https://ui.shadcn.com/placeholder-user.jpg"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-10" align="end">
                            <DropdownMenuLabel>
                                <Link href="/">Logout</Link>    
                            </DropdownMenuLabel>
                            {/* <DropdownMenuSeparator /> */}
                            {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
                            {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
                            {/* <DropdownMenuSeparator /> */}
                            {/* <DropdownMenuItem>Logout</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger className="bg-green-400 text-white p-2 font-semibold rounded-md mx-1" value="all">All</TabsTrigger>
                                <TabsTrigger className="bg-green-400 text-white p-2 font-semibold rounded-md mx-1" value="unassigned">Unassigned Leads</TabsTrigger>
                                <TabsTrigger className="bg-green-400 text-white p-2 font-semibold rounded-md mx-1" value="assigned">Assigned Leads</TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    {/* <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-7 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger> */}
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Active
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {/* <Button size="sm" variant="outline" className="h-7 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button> */}
                                <Button onClick={()=>{setOpen(true)}} size="sm" className="h-7 gap-1 bg-blue-400 text-white p-2 font-semibold">
                                    <PlusCircle className="h-4 w-4 font-semibold" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Add Leads
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent className="animated-box" value="all">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Leads</CardTitle>
                                    <CardDescription>
                                        Manage your Leads and view their performance.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <DataTableDemo fetchDataAgain={fetchData} open1={open1} setOpen1={setOpen1} setSelectedLeads={setSelectedLeads} leadsDeatils={open2} setleadsDetails={setOpen2} leadsType={"all"}/>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="unassigned">
                            <Card>
                                <CardHeader>
                                    <CardTitle >Unassigned Leads</CardTitle>
                                    <CardDescription>
                                        Manage your Leads and view their performance.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <DataTableDemo fetchDataAgain={fetchData} open1={open1} setOpen1={setOpen1} setSelectedLeads={setSelectedLeads} leadsType={"unassigned"}/>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="assigned">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Assigned Leads</CardTitle>
                                    <CardDescription>
                                        Manage your Leads and view their performance.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <DataTableDemo fetchDataAgain={fetchData} open1={open1} setOpen1={setOpen1} setSelectedLeads={setSelectedLeads} leadsType={"assigned"}/>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
            <UploadDialog fetchData={fetchData} setFetchData={setFetchData} open={open} setOpen={setOpen}/>
            <AssignLeadsDialog fetchData={fetchData} setFetchData={setFetchData} open={open1} setOpen={setOpen1} selectedLeads={selectedLeads}/>
            <div className="h-[100%]">
                <LeadsDetails open={open2} setOpen={setOpen2}/>
            </div>
        </div>
    )
}

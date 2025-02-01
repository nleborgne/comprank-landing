"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Invoice = {
  id: string;
  invoiceNumber: string;
  status: "Sent" | "Overdue" | "Paid";
  dueDate: string;
  amount: number;
  customer: string;
};

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoiceNumber",
    header: "N°",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => (
      <div
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          cell.getValue() === "Sent"
            ? "bg-blue-100 text-blue-800"
            : cell.getValue() === "Overdue"
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {cell.getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
];

export const data: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    status: "Sent",
    dueDate: "2023-07-15",
    amount: 1500.0,
    customer: "Acme Corp",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    status: "Overdue",
    dueDate: "2023-06-30",
    amount: 2750.5,
    customer: "Globex Inc",
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    status: "Paid",
    dueDate: "2023-07-05",
    amount: 900.25,
    customer: "Initech LLC",
  },
  {
    id: "4",
    invoiceNumber: "INV-004",
    status: "Sent",
    dueDate: "2023-07-20",
    amount: 3200.0,
    customer: "Umbrella Corp",
  },
  {
    id: "5",
    invoiceNumber: "INV-005",
    status: "Overdue",
    dueDate: "2023-06-25",
    amount: 1875.75,
    customer: "Hooli",
  },
];

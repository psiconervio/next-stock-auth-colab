import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/inventory"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Inventory
      </Link>
      <Link
        href="/orders"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Orders
      </Link>
      <Link
        href="/suppliers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Suppliers
      </Link>
      <Link
        href="/reports"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Overview
            </Link>
            <Link href="/inventory" className="text-sm font-medium transition-colors hover:text-primary">
              Inventory
            </Link>
            <Link href="/orders" className="text-sm font-medium transition-colors hover:text-primary">
              Orders
            </Link>
            <Link href="/suppliers" className="text-sm font-medium transition-colors hover:text-primary">
              Suppliers
            </Link>
            <Link href="/reports" className="text-sm font-medium transition-colors hover:text-primary">
              Reports
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
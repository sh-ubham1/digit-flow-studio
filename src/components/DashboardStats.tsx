import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, FolderOpen, DollarSign, Target } from "lucide-react"

const stats = [
  {
    title: "Total Clients",
    value: "142",
    change: "+12%",
    trend: "up",
    icon: Users,
    description: "Active clients"
  },
  {
    title: "Active Projects",
    value: "38",
    change: "+5%",
    trend: "up",
    icon: FolderOpen,
    description: "In progress"
  },
  {
    title: "Monthly Revenue",
    value: "$84,250",
    change: "+18%",
    trend: "up",
    icon: DollarSign,
    description: "This month"
  },
  {
    title: "Campaign Performance",
    value: "94.2%",
    change: "-2%",
    trend: "down",
    icon: Target,
    description: "Success rate"
  }
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge 
                variant={stat.trend === "up" ? "default" : "destructive"}
                className="gap-1"
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change}
              </Badge>
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
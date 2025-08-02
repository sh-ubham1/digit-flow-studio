import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, MapPin, MoreHorizontal } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "TechCorp Inc.",
    contact: "John Smith",
    email: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    status: "active",
    projects: 3,
    revenue: "$45,000"
  },
  {
    id: 2,
    name: "ShopFlow Ltd.",
    contact: "Sarah Johnson",
    email: "sarah@shopflow.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    status: "active",
    projects: 2,
    revenue: "$32,500"
  },
  {
    id: 3,
    name: "FoodieSpot",
    contact: "Mike Chen",
    email: "mike@foodiespot.com",
    phone: "+1 (555) 456-7890",
    location: "Los Angeles, CA",
    status: "inactive",
    projects: 1,
    revenue: "$18,750"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success text-success-foreground"
    case "inactive":
      return "bg-muted text-muted-foreground"
    case "pending":
      return "bg-warning text-warning-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ClientList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Clients</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${client.name}`} />
                  <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">{client.name}</h4>
                    <Badge className={getStatusColor(client.status)}>
                      {client.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {client.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {client.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {client.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right text-xs">
                  <div className="font-medium">{client.revenue}</div>
                  <div className="text-muted-foreground">{client.projects} projects</div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
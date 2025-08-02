import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, User } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "TechCorp Rebranding",
    client: "TechCorp Inc.",
    status: "active",
    progress: 75,
    deadline: "Dec 15, 2024",
    team: ["John D.", "Sarah M.", "Mike R."]
  },
  {
    id: 2,
    name: "E-commerce Launch Campaign",
    client: "ShopFlow Ltd.",
    status: "review",
    progress: 90,
    deadline: "Dec 10, 2024",
    team: ["Anna K.", "Tom W."]
  },
  {
    id: 3,
    name: "Social Media Strategy",
    client: "FoodieSpot",
    status: "active",
    progress: 45,
    deadline: "Jan 5, 2025",
    team: ["Lisa P.", "David H.", "Emma L."]
  },
  {
    id: 4,
    name: "Website Optimization",
    client: "HealthPlus",
    status: "planning",
    progress: 20,
    deadline: "Jan 20, 2025",
    team: ["Alex C.", "Nina T."]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-primary text-primary-foreground"
    case "review":
      return "bg-warning text-warning-foreground"
    case "planning":
      return "bg-info text-info-foreground"
    case "completed":
      return "bg-success text-success-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function RecentProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">{project.name}</h4>
                  <p className="text-xs text-muted-foreground">{project.client}</p>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.deadline}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {project.team.length} members
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageCircle, FileText, CheckCircle, AlertCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "project_update",
    title: "Project milestone completed",
    description: "TechCorp Rebranding - Phase 2 completed",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    id: 2,
    type: "client_message",
    title: "New client message",
    description: "ShopFlow Ltd. approved the campaign designs",
    time: "4 hours ago",
    icon: MessageCircle,
    color: "text-primary"
  },
  {
    id: 3,
    type: "deadline_warning",
    title: "Upcoming deadline",
    description: "E-commerce Launch Campaign due in 2 days",
    time: "6 hours ago",
    icon: AlertCircle,
    color: "text-warning"
  },
  {
    id: 4,
    type: "document_upload",
    title: "Document uploaded",
    description: "Brand guidelines for HealthPlus project",
    time: "1 day ago",
    icon: FileText,
    color: "text-info"
  },
  {
    id: 5,
    type: "project_created",
    title: "New project created",
    description: "Website Optimization for HealthPlus",
    time: "2 days ago",
    icon: CheckCircle,
    color: "text-success"
  }
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <div className={`mt-1 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
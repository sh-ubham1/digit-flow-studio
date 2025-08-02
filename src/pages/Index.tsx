import { DashboardStats } from "@/components/DashboardStats"
import { RecentProjects } from "@/components/RecentProjects"
import { ActivityFeed } from "@/components/ActivityFeed"
import { ClientList } from "@/components/ClientList"

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your agency today.
        </p>
      </div>
      
      <DashboardStats />
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentProjects />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
      
      <ClientList />
    </div>
  );
};

export default Index;

import { MessageSquare } from "lucide-react"

export function EmptyChatState() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-muted/20">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
          <MessageSquare className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-medium">Select a conversation</h3>
          <p className="text-muted-foreground text-sm">
            Choose a chat from the sidebar to start messaging
          </p>
        </div>
      </div>
    </div>
  )
}
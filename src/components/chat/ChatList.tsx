import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"
import { Chat } from "@/pages/Messages"
import { formatDistanceToNow } from "date-fns"

interface ChatListProps {
  chats: Chat[]
  selectedChat: Chat | null
  onSelectChat: (chat: Chat) => void
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  const formatTime = (date: Date) => {
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-semibold mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-10"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="divide-y divide-border">
          {chats.map((chat) => (
            <div
              key={chat.wa_id}
              onClick={() => onSelectChat(chat)}
              className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                selectedChat?.wa_id === chat.wa_id ? 'bg-muted' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback>
                    {chat.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-sm truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(chat.lastMessageTime)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate flex-1">
                      {chat.lastMessage}
                    </p>
                    {chat.unreadCount > 0 && (
                      <Badge 
                        variant="default" 
                        className="ml-2 h-5 min-w-5 text-xs flex items-center justify-center bg-primary"
                      >
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-1">
                    {chat.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
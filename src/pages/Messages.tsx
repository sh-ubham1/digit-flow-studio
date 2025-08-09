import { useState } from "react"
import { ChatList } from "@/components/chat/ChatList"
import { ChatWindow } from "@/components/chat/ChatWindow"
import { EmptyChatState } from "@/components/chat/EmptyChatState"

export interface Message {
  id: string
  content: string
  timestamp: Date
  type: 'sent' | 'received'
  status: 'sent' | 'delivered' | 'read'
}

export interface Chat {
  wa_id: string
  name: string
  phone: string
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
  avatar?: string
  messages: Message[]
}

// Mock data for demonstration
const mockChats: Chat[] = [
  {
    wa_id: "1234567890",
    name: "John Smith",
    phone: "+1 (555) 123-4567",
    lastMessage: "Thanks for the proposal! When can we schedule a meeting?",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    unreadCount: 2,
    messages: [
      {
        id: "1",
        content: "Hi there! I'm interested in your digital marketing services.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        type: 'received',
        status: 'read'
      },
      {
        id: "2",
        content: "Hello John! Thanks for reaching out. I'd be happy to help you with your digital marketing needs. Let me send you our service proposal.",
        timestamp: new Date(Date.now() - 1000 * 60 * 55), // 55 minutes ago
        type: 'sent',
        status: 'read'
      },
      {
        id: "3",
        content: "Thanks for the proposal! When can we schedule a meeting?",
        timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        type: 'received',
        status: 'delivered'
      }
    ]
  },
  {
    wa_id: "0987654321",
    name: "Sarah Johnson",
    phone: "+1 (555) 987-6543",
    lastMessage: "Perfect! I'll send the assets by tomorrow.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    unreadCount: 0,
    messages: [
      {
        id: "4",
        content: "Hi Sarah! How's the social media campaign coming along?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
        type: 'sent',
        status: 'read'
      },
      {
        id: "5",
        content: "Going great! We've seen a 40% increase in engagement. Need some new creative assets though.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3.5), // 3.5 hours ago
        type: 'received',
        status: 'read'
      },
      {
        id: "6",
        content: "Perfect! I'll send the assets by tomorrow.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
        type: 'received',
        status: 'read'
      }
    ]
  },
  {
    wa_id: "1122334455",
    name: "Mike Chen",
    phone: "+1 (555) 456-7890",
    lastMessage: "Sounds good, let's do it!",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    unreadCount: 0,
    messages: [
      {
        id: "7",
        content: "Hey Mike! Ready to launch the new SEO campaign?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
        type: 'sent',
        status: 'read'
      },
      {
        id: "8",
        content: "Sounds good, let's do it!",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        type: 'received',
        status: 'read'
      }
    ]
  }
]

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [chats] = useState<Chat[]>(mockChats)

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      {/* Chat List */}
      <div className="w-full md:w-80 border-r border-border">
        <ChatList 
          chats={chats} 
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
        />
      </div>
      
      {/* Chat Window */}
      <div className="flex-1 hidden md:flex">
        {selectedChat ? (
          <ChatWindow chat={selectedChat} />
        ) : (
          <EmptyChatState />
        )}
      </div>
      
      {/* Mobile Chat Window */}
      {selectedChat && (
        <div className="absolute inset-0 bg-background md:hidden z-10">
          <ChatWindow 
            chat={selectedChat} 
            onBack={() => setSelectedChat(null)}
          />
        </div>
      )}
    </div>
  )
}
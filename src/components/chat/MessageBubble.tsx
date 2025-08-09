import { Check, CheckCheck } from "lucide-react"
import { Message } from "@/pages/Messages"
import { formatDistanceToNow } from "date-fns"

interface MessageBubbleProps {
  message: Message
  showTime?: boolean
}

export function MessageBubble({ message, showTime }: MessageBubbleProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent':
        return <Check className="h-3 w-3" />
      case 'delivered':
        return <CheckCheck className="h-3 w-3" />
      case 'read':
        return <CheckCheck className="h-3 w-3 text-primary" />
      default:
        return null
    }
  }

  return (
    <div className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[70%]">
        {showTime && (
          <div className="text-center text-xs text-muted-foreground mb-2">
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </div>
        )}
        
        <div
          className={`rounded-lg px-3 py-2 max-w-full ${
            message.type === 'sent'
              ? 'bg-primary text-primary-foreground ml-auto'
              : 'bg-muted text-foreground'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap break-words">
            {message.content}
          </p>
          
          <div className={`flex items-center justify-end gap-1 mt-1 ${
            message.type === 'sent' ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}>
            <span className="text-xs">
              {formatTime(message.timestamp)}
            </span>
            {message.type === 'sent' && (
              <div className="flex items-center">
                {getStatusIcon(message.status)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import { Moon, Sun, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, UserPlus, Settings, Mic, X, CheckSquare, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from '@/components/sidebar'
import Chatheader from './chatheader'
import Chatmessage from './chatmessage'


const Chatarea = ({ selectedContact, toggleSidebar, toggleTaskList, toggleRecording, isRecording }) => {
    return (

        <div className="flex-grow flex flex-col bg-white dark:bg-gray-900">
            {selectedContact ? (
                <>
                    <Chatheader selectedContact={selectedContact} toggleSidebar={toggleSidebar} toggleTaskList={toggleTaskList} />

                    {/* Chat messages */}
                    <Chatmessage selectedContact={selectedContact} />

                    {/* Message input */}
                    <div
                        className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Paperclip className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Attach file</p>
                            </TooltipContent>
                        </Tooltip>
                        <Input className="flex-grow" placeholder="Type a message..." />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Smile className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add emoji</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={toggleRecording}>
                                    <Mic className={`h-5 w-5 ${isRecording ? 'text-red-500' : ''}`} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{isRecording ? 'Stop recording' : 'Start voice message'}</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <Send className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Send message</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </>
            ) : (
                <div
                    className="flex-grow flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="sm:hidden absolute top-4 left-4"
                        onClick={toggleSidebar}>
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                    Select a contact to start chatting
                </div>
            )}
        </div>
    )
}

export default Chatarea
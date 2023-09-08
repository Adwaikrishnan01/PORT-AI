"use client";
import axios from "axios";
import { MessageCircle, MessageSquare,Send } from "lucide-react"
import { Heading } from "../../../../components/heading"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {useForm} from "react-hook-form"
import {formSchema} from "./constants"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button";
import { ChatCompletionRequestMessage } from "openai";
import { cn } from "../../../../lib/utils";
import { useState } from "react";
const ConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
           prompt: "",
          },
        })
const isLoading = form.formState.isSubmitting;
const onSubmit = async (values: z.infer<typeof formSchema>) =>{
          try {
            const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
            const newMessages = [...messages, userMessage];
            
            const response = await axios.post('/api/conversation', { messages: newMessages });
            setMessages((current) => [...current, userMessage, response.data]);
            
            form.reset();
          } catch (error: any) {
           console.log(error)
            }
        }
     

   return (<><div>
      <Heading title="conversation"
      description="AI conversation model"
      Icon={MessageSquare}
      iconcolor="text-violet-500"
      bgcolor="bg-purple-400"></Heading>

    </div>
    <div className="my-3 flex-1 items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="
                grid
                p-4 
                px-3
                md:px-6 
                focus-within:shadow-sm
               grid-cols-12
               w-full 
               
                ">
        <FormField   control={form.control}
           name="prompt"
          render={({ field }) => (
            <FormItem className="col-span-10 lg:col-span-10 flex items-center">
              <FormControl>
                <Input placeholder="Type something to search" 
                className="border-slate-300 outline-none border shadow-sm focus-visible:ring-0 focus-visible:ring-transparent rounded-e-none h-10 bg-grey-200 p-1
                 " disabled={isLoading} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-s-none ml-none w-10 p-1 h-10 border-grey-900 border shadow-sm" variant="outline"><Send/></Button>  
      </form>
    </Form></div>

    <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div 
                key={message.content} 
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
                )}
              >
                {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
                <p className="text-sm">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
    </>
    
  )
}

export default ConversationPage

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1540555230793-6d5018ED0343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiZWF1dHklMjBzYWxvbiUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzQ4ODAwMzg5fDA&ixlib=rb-4.1.0&q=80&w=1920"
        alt="Subtle background of beauty products"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        data-ai-hint="beauty products"
        quality={75}
      />
      <div className="absolute inset-0 bg-background/90 z-10" />
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 md:p-10 rounded-xl shadow-xl">
            <h3 className="font-headline text-3xl text-primary mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/90">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" {...field} 
                          className="bg-background/80 border-border focus:ring-primary focus:border-primary transition-all" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/90">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" {...field} 
                          className="bg-background/80 border-border focus:ring-primary focus:border-primary transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/90">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/80 border-border focus:ring-primary focus:border-primary transition-all">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-popover text-popover-foreground">
                          <SelectItem value="hair-styling">Hair Styling</SelectItem>
                          <SelectItem value="makeup-artistry">Makeup Artistry</SelectItem>
                          <SelectItem value="nail-care">Nail Care</SelectItem>
                          <SelectItem value="spa-treatments">Spa Treatments</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/90">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your needs..."
                          className="resize-none bg-background/80 border-border focus:ring-primary focus:border-primary transition-all h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 text-base font-semibold shadow-md transition-transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8">
             <div className="bg-card p-8 rounded-xl shadow-xl">
                <h3 className="font-headline text-3xl text-primary mb-6">Visit Us</h3>
                <div className="space-y-4 text-foreground/80">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                        <p>indore,madhya pradesh</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-accent shrink-0" />
                        <p> +91 84354 94781</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-accent shrink-0" />
                        <p>patidarjalaj934@gmail.com</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

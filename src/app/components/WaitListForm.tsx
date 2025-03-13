"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/app/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/Form";
import { Input } from "@/app/components/ui/Input";
import { useState } from "react";

const FormSchema = z.object({
  emailAddress: z.string().min(1, {
    message: "Project Name must be at least 1 character.",
  }),
  firstName: z.string(),
  lastName: z.string(),
});

export default function WaitListForm() {
  const [showThanks, setShowThanks] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailAddress: "",
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 409) {
          throw new Error(errorData.error);
        } else {
          throw new Error(errorData.error || "An unknown error occured");
        }
      }
      setShowThanks(true);
    } catch (error: any) {
      setShowError(true);
      setErrorMessage(`Sorry: ${error.message}`);
      
    }
  }

  if (showThanks) {
    return <p>Thank you for signing up!</p>;
  }

  if (showError) {
    return <p>{errorMessage}</p>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-4'>
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder='First Name (optional)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Last Name (optional)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='emailAddress'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type='email' placeholder='Email Address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size='small' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
}

'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { updateProfileSchema } from "../update-profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type UserProps = {
  user: {
    id: string
    name: string
    email: string
    image: string | null
  }
}

export default function UpdateProfileDetailsForm({ user }: UserProps) {

  const [editForm, setEditForm] = useState(false)
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    }
  })

  async function handleForm(values: z.infer<typeof updateProfileSchema>) {
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} id="update-profile" className="pr-10">
        <div className="grid gap-6">
          <div>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!editForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!editForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          {!editForm ?
            (
              <Button className="bg-teal-500" size={'sm'} onClick={() => setEditForm(!editForm)}>Edit Profile</Button>
            ) : (
              <div className="flex flex-row gap-4 items-center">
                <Button onClick={() => setEditForm(!editForm)} variant={'secondary'}>Cancel</Button>
                <Button className="bg-teal-500" size={'sm'} type="submit" form="update-profile">Update</Button>
              </div>
            )}</div>
      </form>
    </Form>
  )
}


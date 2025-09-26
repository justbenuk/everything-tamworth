"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { loginFormSchema } from "../auth-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserAction } from "../auth-actions";
import toast from "react-hot-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginUserForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { success, message } = await loginUserAction(values);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold">Access your account</h1>
          <p className="text-muted-foreground text-sm text-balance">Use your email to login to your account</p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex w-full">
          <Button type="submit" variant={"default"} className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-2">
          <p className="text-center text-xs">
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className="font-semibold">
              Register
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}

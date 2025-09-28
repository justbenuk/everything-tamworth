import PageContainer from "@/components/page-container";
import ContactForm from "@/features/contact/forms/contact-form";
import { FacebookIcon, MailIcon, MessageCircle, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contact The Team',
  description: 'We would love to hear from you. This community portal is built by and for the people of Tamworth. We want your voice to be a part of that'
}

export default function ContactPage() {
  return (
    <PageContainer className="space-y-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium text-teal-500 md:text-center">Get in touch with us</h1>
        <p className="lg:w-2/3 md:text-center mt-2">Do you have any questions about this community portal, or do you have any ideas you would like to see added. reach out to us and let is know what your thoughts are.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-4">
          <div>
            <h2 className="font-medium text-2xl md:text-4xl">Have Questions? We&apos;re just a Message Away</h2>
            <p className="text-muted-foreground text-sm">Fill out the form below and one of our team members will get back to you as soon as possible</p>
          </div>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-6">
          <Link href={'mailto:justbenuk@pm.me'} className="overflow-hidden">
            <div className="flex flex-row gap-6 bg-teal-500/20 py-4 px-6 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2">
                  <MailIcon className="font-medium text-teal-500" />
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <h1 className="font-semibold">Email</h1>
                <span className="text-muted-foreground">justbenuk@om.me</span>
              </div>
            </div>
          </Link>
          <Link href={'tel:07916019809'} className="overflow-hidden">
            <div className="flex flex-row gap-6 bg-teal-500/20 py-4 px-6 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2">
                  <PhoneCallIcon className="font-medium text-teal-500" />
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <h1 className="font-semibold">Call</h1>
                <span className="text-muted-foreground">07916 019 809</span>
              </div>
            </div>
          </Link>
          <Link href={'/'} className="overflow-hidden">
            <div className="flex flex-row gap-6 bg-teal-500/20 py-4 px-6 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2">
                  <FacebookIcon className="font-medium text-teal-500" />
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <h1 className="font-semibold">Facebook</h1>
                <span className="text-muted-foreground">@everything-tamworth</span>
              </div>
            </div>
          </Link>
          <Link href={'/'} className="overflow-hidden">
            <div className="flex flex-row gap-6 bg-teal-500/20 py-4 px-6 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="font-medium text-teal-500" />
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <h1 className="font-semibold">Discord</h1>
                <span className="text-muted-foreground">@community-tamworth</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}


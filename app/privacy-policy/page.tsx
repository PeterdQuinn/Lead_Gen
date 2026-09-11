import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Quinn Consulting',
  description: 'Privacy Policy for Quinn Consulting.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#061a12] text-white px-6 py-16 md:py-24">
      <article className="article max-w-3xl mx-auto">
        <a href="/" className="text-[#d6bd72] no-underline">← Quinn Consulting</a>
        <h1 className="mt-8">Privacy Policy</h1>
        <p className="lead">Effective date: September 11, 2026</p>
        <p>Quinn Consulting (“Quinn Consulting,” “we,” or “us”) respects your privacy. This policy explains how we collect, use, and protect information submitted through this website.</p>
        <h2>Information we collect</h2>
        <p>We may collect your name, email address, phone number, and information you choose to provide in an assessment, chat, booking request, or other inquiry. We also receive basic technical information such as browser and device details needed to operate and secure the site.</p>
        <h2>How we use information</h2>
        <p>We use submitted information to respond to inquiries, schedule consultations, prepare for requested reviews, provide requested resources, and improve our website and services. We do not sell or rent personal information or leads.</p>
        <h2>Service providers</h2>
        <p>We use service providers such as GoHighLevel/LeadConnector, Calendly, and Web3Forms to provide chat, scheduling, and form delivery. Those providers process information according to their own privacy terms and our instructions.</p>
        <h2>Text messages and email</h2>
        <p>If you separately opt in to receive text messages or email communications, we will use that permission for the purposes described at the time of collection. Message frequency varies. Consent is not a condition of purchasing any service. You can opt out of texts by replying STOP and request help by replying HELP. Message and data rates may apply.</p>
        <h2>Security and retention</h2>
        <p>We use reasonable administrative and technical safeguards. No internet transmission is guaranteed to be completely secure. We retain information only as long as reasonably needed for the purposes described here, legal obligations, and legitimate business records.</p>
        <h2>Your choices</h2>
        <p>You may request access, correction, or deletion of information you submitted, subject to legal and operational limits. To make a request, use the contact options on our website or schedule a consultation.</p>
        <h2>Contact</h2>
        <p>Quinn Consulting is an independent insurance broker serving clients from Mesa, Arizona. Questions about this policy can be raised through our <a href="https://calendly.com/peter-quinn-alliance/30min">consultation booking page</a>.</p>
        <p>We may update this policy from time to time by posting a revised effective date on this page.</p>
      </article>
    </main>
  )
}

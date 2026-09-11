import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Quinn Consulting',
  description: 'Terms and Conditions for Quinn Consulting.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#061a12] text-white px-6 py-16 md:py-24">
      <article className="article max-w-3xl mx-auto">
        <a href="/" className="text-[#d6bd72] no-underline">← Quinn Consulting</a>
        <h1 className="mt-8">Terms &amp; Conditions</h1>
        <p className="lead">Effective date: September 11, 2026</p>
        <p>By using this website, you agree to these Terms &amp; Conditions. If you do not agree, please do not use the site.</p>
        <h2>Informational use</h2>
        <p>Website content is for general educational and informational purposes only. It is not financial, tax, legal, or insurance advice and does not create an advisor client, broker client, or other professional relationship.</p>
        <h2>Insurance services</h2>
        <p>Any insurance product, rate, illustration, or benefit discussed is subject to carrier underwriting, policy terms, eligibility, suitability, licensing, and state availability. No result or approval is guaranteed. Applications are not complete until accepted by the applicable carrier.</p>
        <h2>Appointments and communications</h2>
        <p>Booking a consultation does not obligate you to purchase anything. If you provide contact information, you authorize us to respond about your request. Separate consent is required for recurring marketing texts or calls where required by law. Text opt-in is optional and is not required to purchase a product or service.</p>
        <h2>Third party services</h2>
        <p>This site may link to or use third party services including Calendly, GoHighLevel and Web3Forms. Their terms and privacy policies apply to their services.</p>
        <h2>Acceptable use</h2>
        <p>You agree not to misuse the site, interfere with its operation, submit unlawful or misleading information, or attempt to access systems or data without authorization.</p>
        <h2>Limitation of liability</h2>
        <p>To the extent permitted by law, Quinn Consulting is not liable for indirect, incidental, or consequential losses arising from use of this website or reliance on its general content.</p>
        <h2>Contact</h2>
        <p>Quinn Consulting is an independent insurance broker serving clients from Mesa, Arizona. Questions can be raised through our <a href="https://calendly.com/peter-quinn-alliance/30min">consultation booking page</a>.</p>
      </article>
    </main>
  )
}

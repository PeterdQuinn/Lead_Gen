import type { Metadata } from 'next'
import ArticleLayout from '../../../components/seo/ArticleLayout'
import ArticleSchema from '../../../components/seo/ArticleSchema'
import AuthorByline from '../../../components/seo/AuthorByline'
import Faq from '../../../components/seo/Faq'

const SLUG = '/iul/policy-loans'
const PUBLISHED = '2026-06-22'
const MODIFIED = '2026-06-22'

export const metadata: Metadata = {
  title: 'How IUL Policy Loans Work | Quinn Consulting',
  description:
    'How policy loans against indexed universal life cash value work, loan types, tax treatment, interest, impact on the death benefit, and the lapse risk to avoid. Educational, not advice.',
  alternates: { canonical: SLUG },
  openGraph: {
    title: 'How IUL Policy Loans Work',
    description:
      'Loan types, tax treatment, interest, death-benefit impact, and the lapse risk to avoid when borrowing against cash value.',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'How do IUL policy loans work?',
    a: 'You borrow against your policy’s cash value, using the policy as collateral. The insurer advances the money; your cash value generally keeps earning interest depending on the loan type. The loan accrues interest, and any unpaid balance plus interest is deducted from the death benefit when you pass. While the policy stays in force and properly funded, a loan is generally not a taxable event.',
  },
  {
    q: 'Do you have to pay back a policy loan?',
    a: 'You are not on a fixed repayment schedule the way you would be with a bank loan, but the loan does not disappear. Unpaid principal and accrued interest reduce the death benefit, and an unmanaged loan can erode the policy and cause it to lapse. Most well-run strategies still plan to repay or carefully manage loans.',
  },
  {
    q: 'Is a policy loan taxable?',
    a: 'Generally not while the policy remains in force and is not a Modified Endowment Contract (MEC). The risk is if the policy lapses or is surrendered with a loan outstanding, gains can then become taxable, sometimes on money you no longer have. This is why loan management matters. Confirm your situation with a tax professional.',
  },
  {
    q: 'What is the difference between a fixed and a participating (indexed) loan?',
    a: 'With a standard/fixed loan, the borrowed amount is typically moved to a fixed account and charged a set interest rate. With a participating (or indexed) loan, the borrowed amount can stay in the indexed account and continue to earn index-linked interest, while you pay loan interest, creating potential positive or negative arbitrage. Participating loans add upside potential and additional risk.',
  },
  {
    q: 'What happens to my death benefit when I take a loan?',
    a: 'Any outstanding loan balance plus accrued interest is subtracted from the death benefit paid to your beneficiaries. Repaying the loan restores it. This is one of the trade-offs to weigh before borrowing.',
  },
  {
    q: 'Can a policy loan cause my IUL to lapse?',
    a: 'Yes, this is the main risk. If loans and interest grow faster than the cash value supporting them, the policy can lapse, which may trigger taxes. Avoiding over-borrowing and monitoring the policy regularly are the standard safeguards.',
  },
]

export default function PolicyLoans() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'IUL Guide', href: '/iul' },
        { name: 'Policy Loans', href: SLUG },
      ]}
    >
      <ArticleSchema
        headline="How IUL Policy Loans Work"
        description="Loan types, tax treatment, interest, death-benefit impact, and lapse risk when borrowing against IUL cash value."
        slug={SLUG}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
      />

      <h1>How IUL Policy Loans Work</h1>
      <AuthorByline updated="June 2026" readTime="6 min read" />

      <p className="lead">
        The ability to access cash value through policy loans is a big part of why high earners review
        indexed universal life (IUL) in the first place. Used well, loans offer liquidity without the
        early-withdrawal penalties of qualified accounts. Used carelessly, they are also the most common
        way these strategies fail. Here is how they actually work.
      </p>

      <h2>What a Policy Loan Is</h2>
      <p>
        A policy loan lets you borrow money using your policy&rsquo;s cash value as collateral. The
        insurer advances the funds, you are not withdrawing your own cash value directly, you are
        borrowing against it. That distinction is what allows the loan to be tax-efficient while the
        policy stays in force.
      </p>

      <h2>How It Differs From a Bank Loan</h2>
      <ul>
        <li>
          <strong>No credit check or approval.</strong> The cash value secures the loan, so there is no
          underwriting.
        </li>
        <li>
          <strong>No fixed repayment schedule.</strong> You set the pace, but the balance and interest
          still accrue, and ignoring them has consequences.
        </li>
        <li>
          <strong>Your cash value may keep growing.</strong> Depending on the loan type, the borrowed
          amount can continue earning interest inside the policy.
        </li>
        <li>
          <strong>Unpaid balances reduce the death benefit.</strong> Anything outstanding at death comes
          out of what your beneficiaries receive.
        </li>
      </ul>

      <h2>Two Loan Types</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Fixed / Standard Loan</th>
              <th>Participating / Indexed Loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">How borrowed funds are treated</th>
              <td>Typically moved to a fixed account</td>
              <td>Can stay in the indexed account, still earning index-linked interest</td>
            </tr>
            <tr>
              <th scope="row">Interest dynamic</th>
              <td>Predictable, lower variability</td>
              <td>Potential positive or negative arbitrage</td>
            </tr>
            <tr>
              <th scope="row">Risk profile</th>
              <td>Lower</td>
              <td>Higher, more upside and more downside</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Tax Picture</h2>
      <p>
        While the policy is in force and is not a{' '}
        <strong>Modified Endowment Contract (MEC)</strong>, loans are generally not treated as taxable
        income. The danger is at the edges: if a policy lapses or is surrendered with a large loan
        outstanding, previously untaxed gains can become taxable, potentially a tax bill on money you
        have already spent. This is the scenario careful loan management exists to prevent. Always
        confirm tax specifics with a qualified professional.
      </p>

      <h2>The Risk to Respect: Lapse</h2>
      <p>
        The single most important rule with policy loans is to avoid over-borrowing. If outstanding
        loans and accruing interest outpace the cash value supporting them, the policy can lapse. A
        well-structured, adequately funded policy with disciplined loan use is a very different animal
        from an over-leveraged one. Reviewing the policy regularly is part of doing this correctly.
      </p>

      <p>
        Policy loans are one feature of the broader strategy, see the{' '}
        <a href="/iul">IUL guide</a> for the full picture, or compare IUL against the accounts you
        already use in <a href="/iul/iul-vs-roth-ira">IUL vs Roth IRA</a> and{' '}
        <a href="/iul/iul-vs-401k">IUL vs 401(k)</a>.
      </p>

      <Faq items={faqs} />
    </ArticleLayout>
  )
}

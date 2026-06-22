import type { Metadata } from 'next'
import ArticleLayout from '../../../components/seo/ArticleLayout'
import ArticleSchema from '../../../components/seo/ArticleSchema'
import AuthorByline from '../../../components/seo/AuthorByline'
import Faq from '../../../components/seo/Faq'

const SLUG = '/tax-diversification/after-maxing-401k'
const PUBLISHED = '2026-06-22'
const MODIFIED = '2026-06-22'

export const metadata: Metadata = {
  title: 'What to Do After You Max Out Your 401(k) | Quinn Consulting',
  description:
    'Maxed your 401(k)? Here are the options high earners weigh next, HSA, backdoor and mega backdoor Roth, taxable brokerage, cash value life insurance, and more. Educational, not advice.',
  alternates: { canonical: SLUG },
  openGraph: {
    title: 'What to Do After You Max Out Your 401(k)',
    description:
      'The options high earners weigh after maxing their 401(k), and how to think about tax diversification.',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'What should I do after maxing out my 401(k)?',
    a: 'There is no single answer, but a common sequence for high earners is: capture any HSA eligibility, use a backdoor Roth (and a mega backdoor Roth if your plan allows), then deploy remaining surplus into a taxable brokerage account and/or other vehicles such as cash value life insurance or real estate, depending on goals. The right order depends on your income, cash flow, and what you are optimizing for.',
  },
  {
    q: 'What is tax diversification and why does it matter?',
    a: 'Tax diversification means holding money across different tax treatments, taxable, tax-deferred, and tax-free, so you have flexibility to manage your tax bill in retirement. Many high earners are heavily concentrated in tax-deferred accounts, which all get taxed as ordinary income later. Spreading across buckets gives you more control over future taxes.',
  },
  {
    q: 'Is a backdoor Roth still allowed?',
    a: 'As of this writing, the backdoor Roth (a nondeductible traditional IRA contribution converted to Roth) remains a widely used strategy for high earners above the Roth income limits. Rules can change, and the pro-rata rule can complicate it if you hold other pre-tax IRA balances. Confirm current rules with a tax professional.',
  },
  {
    q: 'Where does cash value life insurance fit after maxing my 401(k)?',
    a: 'For some high earners with surplus cash flow, a properly structured cash value policy (such as an IUL) can add a differently taxed, accessible bucket with a death benefit. It is one option among several, not a default, and it carries costs and complexity. It is usually considered only after lower-cost tax-advantaged options are exhausted.',
  },
  {
    q: 'Should I just use a taxable brokerage account?',
    a: 'A taxable brokerage account is simple, flexible, and liquid, and it is a perfectly good home for surplus savings, especially for long-term investments taxed at capital-gains rates. Many high earners use it alongside other vehicles. Whether to add tax-deferred or tax-free structures on top depends on your goals.',
  },
]

export default function AfterMaxing401k() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tax Diversification', href: '/tax-diversification' },
        { name: 'After Maxing Your 401(k)', href: SLUG },
      ]}
    >
      <ArticleSchema
        headline="What to Do After You Max Out Your 401(k)"
        description="The options high earners weigh after maxing their 401(k), and how to think about tax diversification."
        slug={SLUG}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
      />

      <h1>What to Do After You Max Out Your 401(k)</h1>
      <AuthorByline updated="June 2026" readTime="7 min read" />

      <p className="lead">
        Maxing out your 401(k) is a milestone, and for high earners, it is also where the planning
        actually gets interesting. The contribution limit caps how much you can shelter, and a balance
        sitting almost entirely in one tax treatment quietly creates a future problem. Here are the
        options high earners weigh next, and how to think about the order.
      </p>

      <h2>The Real Issue: Tax Concentration</h2>
      <p>
        Most high earners are concentrated in <strong>tax-deferred</strong> accounts. Every dollar in a
        traditional 401(k) or IRA gets taxed as ordinary income when withdrawn, at unknown future
        rates. The goal after maxing out is usually not just &ldquo;save more,&rdquo; but to build across
        the <strong>three tax buckets</strong>:
      </p>
      <ul>
        <li>
          <strong>Taxable</strong>, brokerage accounts; flexible, taxed on gains and income as they
          occur.
        </li>
        <li>
          <strong>Tax-deferred</strong>, 401(k), traditional IRA; taxed later as ordinary income.
        </li>
        <li>
          <strong>Tax-free</strong>, Roth accounts and, when properly structured, certain cash value
          life insurance.
        </li>
      </ul>
      <p>Holding all three gives you control over your tax bill in retirement instead of being at its mercy.</p>

      <h2>The Options, Roughly in Order</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Option</th>
              <th>Tax bucket</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">HSA (if eligible)</th>
              <td>Tax-free (triple-advantaged)</td>
              <td>Anyone with a qualifying high-deductible health plan</td>
            </tr>
            <tr>
              <th scope="row">Backdoor Roth IRA</th>
              <td>Tax-free</td>
              <td>High earners above Roth income limits</td>
            </tr>
            <tr>
              <th scope="row">Mega backdoor Roth</th>
              <td>Tax-free</td>
              <td>Those whose 401(k) plan allows after-tax contributions + conversions</td>
            </tr>
            <tr>
              <th scope="row">Taxable brokerage</th>
              <td>Taxable</td>
              <td>Flexible, liquid long-term investing at capital-gains rates</td>
            </tr>
            <tr>
              <th scope="row">Cash value life insurance (e.g. IUL)</th>
              <td>Tax-deferred / potentially tax-efficient access</td>
              <td>Surplus cash flow + desire for a death benefit and liquidity</td>
            </tr>
            <tr>
              <th scope="row">Real estate / other</th>
              <td>Varies</td>
              <td>Investors seeking income, appreciation, and depreciation benefits</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        This is a general framework, not a prescription. HSAs and Roth strategies are usually low-cost
        and come first; vehicles like cash value life insurance are typically considered later, once the
        cheaper tax-advantaged room is used up.
      </p>

      <h2>Where Cash Value Life Insurance Comes In</h2>
      <p>
        Once the lower-cost options are exhausted, some high earners look at a properly structured cash
        value policy for additional tax-diversified capacity with a death benefit. It is one tool among
        several, with real costs and complexity, worth understanding before assuming it fits. If you
        are exploring it, start with the <a href="/iul">IUL guide</a>, then compare it directly against
        the accounts you already use in <a href="/iul/iul-vs-roth-ira">IUL vs Roth IRA</a> and{' '}
        <a href="/iul/iul-vs-401k">IUL vs 401(k)</a>.
      </p>

      <h2>The Point Is Flexibility</h2>
      <p>
        The high earners who do this well are not chasing one perfect account. They are building options
       , across tax treatment, across liquidity, across time, so that future decisions stay in their
        control. Which sequence is right for you depends on your full picture.
      </p>

      <Faq items={faqs} />
    </ArticleLayout>
  )
}

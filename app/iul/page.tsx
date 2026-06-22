import type { Metadata } from 'next'
import ArticleLayout from '../../components/seo/ArticleLayout'
import ArticleSchema from '../../components/seo/ArticleSchema'
import AuthorByline from '../../components/seo/AuthorByline'
import Faq from '../../components/seo/Faq'

const SLUG = '/iul'
const PUBLISHED = '2026-06-22'
const MODIFIED = '2026-06-22'

export const metadata: Metadata = {
  title: 'Indexed Universal Life (IUL): A Guide for High-Income Earners | Quinn Consulting',
  description:
    'How indexed universal life (IUL) works, what it costs, the risks, and where it may fit for high earners who have maxed out traditional retirement accounts. Educational, not advice.',
  alternates: { canonical: SLUG },
  openGraph: {
    title: 'Indexed Universal Life (IUL): A Guide for High-Income Earners',
    description:
      'How IUL works, what it costs, the risks, and where it may fit for high earners exploring tax diversification and liquidity.',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'What is an indexed universal life (IUL) policy?',
    a: 'An IUL is a type of permanent life insurance that combines a death benefit with a cash value account. The cash value earns interest based on the performance of a market index (such as the S&P 500), typically subject to a floor that limits losses and a cap or participation rate that limits gains. It is insurance first, with a tax-advantaged savings component.',
  },
  {
    q: 'Is an IUL a good investment?',
    a: 'An IUL is a life insurance product, not an investment, and it is not right for everyone. It may be worth reviewing for high earners who have already maxed out tax-advantaged accounts and want additional tax diversification and liquidity. Whether it fits depends on your health, time horizon, budget, and how the policy is structured and funded. A suitability review with a licensed professional is the right starting point.',
  },
  {
    q: 'How is the cash value in an IUL taxed?',
    a: 'Cash value generally grows tax-deferred. When structured correctly (and the policy is not a Modified Endowment Contract), funds can often be accessed through policy loans and withdrawals up to basis without triggering income tax while the policy stays in force. Tax treatment depends on how the policy is designed and maintained, confirm specifics with a qualified tax professional.',
  },
  {
    q: 'What are the main risks of an IUL?',
    a: 'Costs (including the cost of insurance) can rise as you age, caps and participation rates can be lowered by the carrier, and an underfunded policy can lapse, which may create a tax bill. Illustrated, non-guaranteed values are projections, not promises. These are the same issues we review before anyone considers a policy.',
  },
  {
    q: 'Who should consider an IUL?',
    a: 'IULs are most often considered by high-income households that have already captured employer matches and maxed pre-tax and Roth options, have stable cash flow to fund the policy for the long term, and want a death benefit plus tax-diversified, accessible cash value. It is generally not a fit for someone who only needs low-cost death benefit coverage, term life usually serves that better.',
  },
]

export default function IulPillar() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'IUL Guide', href: '/iul' },
      ]}
    >
      <ArticleSchema
        headline="Indexed Universal Life (IUL): A Guide for High-Income Earners"
        description="How IUL works, what it costs, the risks, and where it may fit for high earners exploring tax diversification and liquidity."
        slug={SLUG}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
      />

      <h1>Indexed Universal Life (IUL): A Guide for High-Income Earners</h1>
      <AuthorByline updated="June 2026" readTime="8 min read" />

      <p className="lead">
        If you earn $150,000+ and have already maxed out your 401(k) and other tax-advantaged
        accounts, you have probably run into the same wall many high earners hit: contribution limits,
        future tax exposure, and money you cannot touch until 59½. Indexed universal life (IUL) is one
        tool some high earners review at that point. This guide explains how it works, what it costs,
        and where it may, and may not, fit.
      </p>

      <h2>What an IUL Actually Is</h2>
      <p>
        An IUL is a form of <strong>permanent life insurance</strong>. Like any life policy, it pays a
        death benefit. What sets it apart is the <strong>cash value</strong> component, which earns
        interest linked to the performance of a market index such as the S&amp;P 500, without your
        money being invested directly in the market.
      </p>
      <p>Two features define how that interest works:</p>
      <ul>
        <li>
          <strong>A floor</strong> (often 0%) that limits losses in a down year. You generally do not
          lose cash value to negative index performance, though policy costs still apply.
        </li>
        <li>
          <strong>A cap or participation rate</strong> that limits the upside. If the index returns
          20% and your cap is 9%, your credited interest is capped accordingly.
        </li>
      </ul>
      <p>
        In short: less downside, but also less upside than being directly invested. It is a trade-off,
        not a free lunch.
      </p>

      <h2>Why High Earners Look at IUL</h2>
      <p>
        The interest in IUL usually shows up <em>after</em> the standard tax-advantaged accounts are
        full. Common reasons high earners explore it:
      </p>
      <ul>
        <li>
          <strong>Tax diversification.</strong> Most retirement savings sit in tax-deferred accounts
          that get taxed as ordinary income later. Cash value access can add a differently taxed bucket
          alongside them. (More on this in{' '}
          <a href="/tax-diversification/after-maxing-401k">what to do after maxing your 401(k)</a>.)
        </li>
        <li>
          <strong>No IRS contribution cap.</strong> Funding is limited by IRS rules tied to the death
          benefit, not by the low annual caps on IRAs and 401(k)s.
        </li>
        <li>
          <strong>Liquidity before 59½.</strong> Cash value can generally be accessed through{' '}
          <a href="/iul/policy-loans">policy loans</a> without the early-withdrawal penalties that
          apply to qualified accounts.
        </li>
        <li>
          <strong>A death benefit.</strong> Unlike a brokerage account, the policy includes life
          insurance protection for your family or estate.
        </li>
      </ul>

      <h2>How It Compares</h2>
      <p>
        IUL is frequently compared against accounts high earners already use. The honest answer is that
        these are different tools, an IUL is not a replacement for an employer match or a Roth:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>IUL</th>
              <th>Roth IRA</th>
              <th>401(k)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Annual contribution cap</th>
              <td>No fixed IRS dollar cap (limited by policy design)</td>
              <td>Low fixed cap; income limits exclude many high earners</td>
              <td>Moderate fixed cap</td>
            </tr>
            <tr>
              <th scope="row">Growth taxation</th>
              <td>Tax-deferred</td>
              <td>Tax-free (qualified)</td>
              <td>Tax-deferred</td>
            </tr>
            <tr>
              <th scope="row">Access before 59½</th>
              <td>Via loans/withdrawals, no IRS penalty</td>
              <td>Contributions anytime; earnings restricted</td>
              <td>Generally penalized</td>
            </tr>
            <tr>
              <th scope="row">Market risk</th>
              <td>Floor limits downside; cap limits upside</td>
              <td>Full market exposure</td>
              <td>Full market exposure</td>
            </tr>
            <tr>
              <th scope="row">Death benefit</th>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For the full breakdowns, see <a href="/iul/iul-vs-roth-ira">IUL vs Roth IRA</a> and{' '}
        <a href="/iul/iul-vs-401k">IUL vs 401(k)</a>.
      </p>

      <h2>The Costs and Risks (Read This Part)</h2>
      <p>
        IULs are not simple, and they are not for everyone. Before considering one, understand the
        downsides:
      </p>
      <ul>
        <li>
          <strong>Cost of insurance rises with age.</strong> If a policy is underfunded, those rising
          internal costs can erode cash value.
        </li>
        <li>
          <strong>Caps and participation rates can change.</strong> The carrier can adjust them, which
          affects future credited interest.
        </li>
        <li>
          <strong>Lapse risk.</strong> A policy that is over-borrowed or underfunded can lapse, which
          may create a taxable event. This is one of the most common ways these strategies fail.
        </li>
        <li>
          <strong>Illustrations are not guarantees.</strong> Non-guaranteed projections assume rates of
          return that may not materialize.
        </li>
      </ul>
      <p>
        Properly structured and adequately funded, many of these risks are manageable, but
        &ldquo;properly structured&rdquo; is doing a lot of work in that sentence. Design matters enormously.
      </p>

      <h2>Who an IUL Is, and Isn&rsquo;t, For</h2>
      <p>
        It may be worth reviewing if you have maxed your tax-advantaged accounts, have reliable cash
        flow to fund a policy for the long term, and want tax diversification plus a death benefit. It
        is usually <strong>not</strong> the right tool if you only need affordable death benefit
        coverage (term life typically does that for far less) or if you cannot commit to funding it
        consistently.
      </p>

      <Faq items={faqs} />
    </ArticleLayout>
  )
}

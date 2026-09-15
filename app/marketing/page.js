import GuideList from '@/components/GuideList';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'Marketing',
  description: 'Buying guides for email, SEO, social media, advertising and lead generation software for small business.',
};

const SUBCATEGORIES = ['Email', 'SEO', 'Social Media', 'Advertising', 'Lead Generation'];

const GUIDES = [
  { title: 'Best Email Marketing Software', note: 'Compare providers by deliverability and automation, not just price.' },
  { title: 'Best Email Marketing Software for Small Business', note: 'The shortlist built for small-list senders, not enterprise volume.' },
  { title: 'Best SEO Tools', note: 'Keyword and content research tools for planning what you publish.' },
  { title: 'Best SEO Tools for Small Business', note: "Budget-friendly options that don't require an in-house specialist." },
  { title: 'Best Social Media Management Tools', note: 'Schedule and plan a week of posts in under an hour.' },
  { title: 'Best Lead Generation Software', note: 'Capture and qualify leads before your sales process ever sees them.' },
  { title: 'Best Marketing Automation Software', note: "Follow-up sequences that run whether you're online or not." },
  { title: 'Best Landing Page Builders', note: 'Pages built to convert, without a developer.' },
  { title: 'Best Marketing Tools for Startups', note: 'The starter marketing stack before you can justify a full team.' },
  { title: 'Best Digital Marketing Tools for Small Business', note: 'The general shortlist across every marketing category on this page.' },
];

export default function MarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Marketing</h1>
          <p className="lede">
            The tools that get a small business in front of the right people — email,
            content, social and paid — without needing an agency retainer.
          </p>
          <div className="tag-row">
            {SUBCATEGORIES.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">The marketing tool guides on the runway for this category.</p>
          <GuideList items={GUIDES} />
        </div>
      </section>

      <PinStrip />
    </>
  );
                               }

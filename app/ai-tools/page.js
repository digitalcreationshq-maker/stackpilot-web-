import GuideList from '@/components/GuideList';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'AI Tools',
  description: 'Buying guides for AI writing, video, image, marketing, productivity and automation tools for small business.',
};

const SUBCATEGORIES = ['Writing', 'Video', 'Image', 'Marketing', 'Productivity', 'Automation'];

const GUIDES = [
  { title: '5 Best AI Tools for Small Businesses', note: "The starting shortlist if you're only going to adopt one or two tools this year." },
  { title: 'Best AI Writing Tools', note: "For blog posts, ad copy and emails that don't read like they came from a template." },
  { title: 'Best AI Tools for Marketing', note: 'Campaign planning, copy and creative, without hiring an agency.' },
  { title: 'Best AI Tools for Entrepreneurs', note: 'The tools solo founders actually lean on day to day.' },
  { title: 'Best AI Tools for Startups', note: 'What to adopt in year one before your stack gets bloated.' },
  { title: 'Best AI Productivity Tools', note: 'Scheduling, note-taking and task management that saves real hours.' },
  { title: 'Best AI Automation Tools', note: 'Connect the apps you already use so less falls through the cracks.' },
  { title: 'Best AI Customer Service Tools', note: 'Support tickets and chat handled without a full support team.' },
  { title: 'Best AI Meeting Assistants', note: 'Notes, summaries and action items, without anyone typing during the call.' },
  { title: 'Best AI Research Tools', note: 'Faster market and competitor research than manual searching.' },
  { title: 'Best AI SEO Tools', note: 'Keyword and content research tools that speed up planning, not replace it.' },
  { title: 'Best AI Email Marketing Tools', note: 'Subject lines, sequences and send-time optimization that lift open rates.' },
  { title: 'Best AI Social Media Tools', note: 'Caption writing and scheduling for teams posting on more than one platform.' },
  { title: 'Best AI Video Generators for Business', note: 'Turn a script into a usable video without a camera crew.' },
  { title: 'Best AI Image Generators for Business', note: 'Product shots, social graphics and ad creative on a small budget.' },
  { title: 'Best AI Presentation Makers', note: 'Pitch decks and client presentations built in minutes, not a weekend.' },
  { title: 'Best AI Chatbots for Small Business', note: 'Website chat that actually answers the common questions.' },
  { title: 'Best AI Website Builders', note: 'Sites that write and design themselves from a short brief.' },
  { title: 'Best AI Tools for Content Creation', note: 'Blog, video and social content from a single content pipeline.' },
  { title: 'Best AI Tools for Freelancers', note: 'The tools that make one person work like a small team.' },
];

export default function AIToolsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>AI Tools</h1>
          <p className="lede">
            For solo founders and small teams deciding which AI tools are actually worth a
            subscription, and which ones you can replace with the free plan.
          </p>
          <div className="tag-row">
            {SUBCATEGORIES.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">The AI tool guides on the runway for this category.</p>
          <GuideList items={GUIDES} />
        </div>
      </section>

      <PinStrip />
    </>
  );
    }

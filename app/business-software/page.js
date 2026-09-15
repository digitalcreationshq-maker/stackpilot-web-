import PillarSection from '@/components/PillarSection';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'Business Software',
  description: 'Buying guides for accounting, CRM, project management, invoicing, HR/payroll and support software for small business.',
};

const SUBCATEGORIES = ['Accounting', 'CRM', 'Project Management', 'Invoicing', 'HR/Payroll', 'Support'];

const ACCOUNTING = [
  { title: 'Best Accounting Software for Small Business', note: "Where to start if you haven't picked a system yet." },
  { title: 'Best Free Accounting Software for Small Business', note: "What's actually usable at $0, and where the free plans stop being enough." },
  { title: 'Best Accounting Software for Freelancers', note: 'Simple enough to run solo, without missing tax features.' },
  { title: 'Best Accounting Software for Startups', note: 'Built to scale past your first hire and first round.' },
  { title: 'Best Accounting Software for Consultants', note: 'Time tracking and invoicing that matches how consultants actually bill.' },
  { title: 'Best Accounting Software for Agencies', note: 'Client billing and project profitability in one view.' },
  { title: 'Best Accounting Software for Contractors', note: 'Job costing and estimates built for project-based work.' },
  { title: 'Best Bookkeeping Software for Small Business', note: 'Day-to-day bookkeeping without hiring a bookkeeper yet.' },
  { title: 'Best Invoicing Software for Small Business', note: 'Get paid faster with invoices clients actually open.' },
  { title: 'Best Expense Tracking Software', note: 'Receipts and spending categorized automatically, not by hand.' },
  { title: 'Best Accounting Software With Payroll', note: 'Run payroll and books from the same login.' },
  { title: 'Best Cloud Accounting Software', note: 'Your books, accessible from anywhere, always backed up.' },
  { title: 'Best Accounting Software for Ecommerce', note: 'Built for the sales tax and inventory side of selling online.' },
  { title: 'QuickBooks Alternatives', note: "If QuickBooks feels like overkill, or the price finally caught up with you." },
  { title: 'Xero Alternatives', note: "Other options if Xero's pricing or features aren't quite fitting." },
  { title: 'QuickBooks vs Xero', note: 'Same job, two very different workflows — which one matches how you work.' },
  { title: 'QuickBooks vs FreshBooks', note: 'Full accounting suite versus a simpler, freelancer-first tool.' },
  { title: 'Xero vs FreshBooks', note: 'Two lighter-weight options compared side by side.' },
  { title: 'Best Accounting Software for Self-Employed People', note: 'Built around one person, one tax return, and irregular income.' },
  { title: "Accounting Software Buyer's Guide", note: 'The questions to ask before you commit to a plan.' },
];

const CRM = [
  { title: 'Best CRM for Small Business', note: "A working shortlist for teams that don't need enterprise Salesforce complexity." },
  { title: 'Best Free CRM for Small Business', note: "What's usable at $0, and where you'll outgrow it." },
  { title: 'Best CRM for Startups', note: 'Simple enough to set up in a day, built to scale later.' },
  { title: 'Best CRM for Freelancers', note: 'Track clients and follow-ups without a sales team.' },
  { title: 'Best CRM for Agencies', note: 'Manage client pipelines and project handoffs in one place.' },
  { title: 'Best CRM for Consultants', note: 'Relationship tracking built for long sales cycles.' },
  { title: 'Best CRM for Real Estate', note: 'Listings, leads and follow-ups built for property sales.' },
  { title: 'Best CRM for Ecommerce', note: 'Customer data connected to your store, not a separate system.' },
  { title: 'Best CRM for Lead Generation', note: 'Capture, score and route leads before they go cold.' },
  { title: 'Best CRM With AI', note: 'Auto-logged calls, summarized deals, and suggested next steps.' },
  { title: 'Best CRM With Email Marketing', note: 'Contacts and campaigns without syncing two separate tools.' },
  { title: 'Best CRM for Sales Teams', note: 'Pipeline visibility for teams bigger than just you.' },
  { title: 'Best CRM for Customer Support', note: 'Support history tied to the same customer record as sales.' },
  { title: 'HubSpot Alternatives', note: "Other options if HubSpot's pricing tiers are outgrowing your budget." },
  { title: 'Zoho CRM Alternatives', note: "What to try if Zoho isn't the right fit." },
  { title: 'Salesforce Alternatives', note: "Lighter-weight CRMs for teams that don't need Salesforce's complexity." },
  { title: 'HubSpot vs Zoho', note: 'Polished all-in-one platform versus flexible, budget-friendly suite.' },
  { title: 'HubSpot vs Salesforce', note: 'Ease of use versus enterprise-grade customization.' },
  { title: 'Zoho vs Salesforce', note: 'Two very different price points for a similar job.' },
  { title: "CRM Buyer's Guide", note: 'What to check before you sign a CRM contract.' },
];

const PROJECT_MANAGEMENT = [
  { title: 'Best Project Management Software', note: 'The general shortlist before you narrow down by team size.' },
  { title: 'Best Free Project Management Software', note: "What's usable at $0 for a small team." },
  { title: 'Best Project Management Software for Small Business', note: 'Built for teams without a dedicated project manager.' },
  { title: 'Best Project Management Software for Startups', note: 'Flexible enough to change as your process changes.' },
  { title: 'Best Project Management Software for Agencies', note: 'Client projects, deadlines and billable hours in one view.' },
  { title: 'Best Project Management Software for Freelancers', note: 'Lightweight enough for one person managing several clients.' },
  { title: 'Best Project Management Software With AI', note: 'Auto-scheduling and status updates that write themselves.' },
  { title: 'Best Team Collaboration Software', note: 'Where the conversation and the task list live together.' },
  { title: 'Best Task Management Software', note: 'Simple to-do tracking without the extra project-management overhead.' },
  { title: 'Best Project Tracking Software', note: "Visibility into what's actually on track and what's slipping." },
  { title: 'ClickUp Alternatives', note: "Other options if ClickUp's feature set feels like too much." },
  { title: 'Asana Alternatives', note: "Simpler or cheaper options if Asana isn't the right fit." },
  { title: 'Monday.com Alternatives', note: "What to try if Monday's pricing is the sticking point." },
  { title: 'ClickUp vs Asana', note: 'All-in-one flexibility versus clean, guided simplicity.' },
  { title: 'Monday.com vs ClickUp', note: 'Visual, colorful boards versus deep customization.' },
];

export default function BusinessSoftwarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Business Software</h1>
          <p className="lede">
            The systems a small business runs on: accounting, sales, and getting projects
            out the door. Organized by what you're trying to solve, not by feature list.
          </p>
          <div className="tag-row">
            {SUBCATEGORIES.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">Grouped by pillar so you can jump to the part of your stack you're actually deciding on.</p>
          <PillarSection heading="Accounting & Finance" items={ACCOUNTING} />
          <PillarSection heading="CRM & Sales" items={CRM} />
          <PillarSection heading="Project Management" items={PROJECT_MANAGEMENT} />
        </div>
      </section>

      <PinStrip />
    </>
  );
  }

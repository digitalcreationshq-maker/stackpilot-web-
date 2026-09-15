import PillarSection from '@/components/PillarSection';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'Comparisons',
  description: 'Head-to-head software comparisons and alternative-tool roundups across accounting, CRM, project management and ecommerce.',
};

const ACCOUNTING = [
  { title: 'QuickBooks Alternatives', note: "If QuickBooks feels like overkill, or the price finally caught up with you." },
  { title: 'Xero Alternatives', note: "Other options if Xero's pricing or features aren't quite fitting." },
  { title: 'QuickBooks vs Xero', note: 'Same job, two very different workflows — which one matches how you work.' },
  { title: 'QuickBooks vs FreshBooks', note: 'Full accounting suite versus a simpler, freelancer-first tool.' },
  { title: 'Xero vs FreshBooks', note: 'Two lighter-weight options compared side by side.' },
];

const CRM = [
  { title: 'HubSpot Alternatives', note: "Other options if HubSpot's pricing tiers are outgrowing your budget." },
  { title: 'Zoho CRM Alternatives', note: "What to try if Zoho isn't the right fit." },
  { title: 'Salesforce Alternatives', note: "Lighter-weight CRMs for teams that don't need Salesforce's complexity." },
  { title: 'HubSpot vs Zoho', note: 'Polished all-in-one platform versus flexible, budget-friendly suite.' },
  { title: 'HubSpot vs Salesforce', note: 'Ease of use versus enterprise-grade customization.' },
  { title: 'Zoho vs Salesforce', note: 'Two very different price points for a similar job.' },
];

const PROJECT_MANAGEMENT = [
  { title: 'ClickUp Alternatives', note: "Other options if ClickUp's feature set feels like too much." },
  { title: 'Asana Alternatives', note: "Simpler or cheaper options if Asana isn't the right fit." },
  { title: 'Monday.com Alternatives', note: "What to try if Monday's pricing is the sticking point." },
  { title: 'ClickUp vs Asana', note: 'All-in-one flexibility versus clean, guided simplicity.' },
  { title: 'Monday.com vs ClickUp', note: 'Visual, colorful boards versus deep customization.' },
];

const WEBSITE_ECOMMERCE = [
  { title: 'Shopify Alternatives', note: "Other platforms if Shopify's fees are eating your margin." },
  { title: 'Shopify vs Wix', note: 'Ecommerce-first platform versus general-purpose builder.' },
  { title: 'Wix vs Squarespace', note: 'Two of the most popular general builders, compared directly.' },
];

export default function ComparisonsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Comparisons</h1>
          <p className="lede">
            For when you're stuck between two tools. Every head-to-head and
            alternatives guide on Stack Pilot, gathered in one place.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">Grouped by the category they belong to.</p>
          <PillarSection heading="Accounting & Finance" items={ACCOUNTING} />
          <PillarSection heading="CRM & Sales" items={CRM} />
          <PillarSection heading="Project Management" items={PROJECT_MANAGEMENT} />
          <PillarSection heading="Website & Ecommerce" items={WEBSITE_ECOMMERCE} />
        </div>
      </section>

      <PinStrip />
    </>
  );
    }

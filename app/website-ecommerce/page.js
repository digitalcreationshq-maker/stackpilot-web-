import GuideList from '@/components/GuideList';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'Website & Ecommerce',
  description: 'Buying guides for website builders, hosting, ecommerce platforms, domains and business email for small business.',
};

const SUBCATEGORIES = ['Builders', 'Hosting', 'Ecommerce', 'Domains', 'Business Email'];

const GUIDES = [
  { title: 'Best Website Builders for Small Business', note: 'What to use if you need a site live this month, not a six-month build.' },
  { title: 'Best Free Website Builders', note: "What's actually usable at $0, and where the free plans start limiting you." },
  { title: 'Best Ecommerce Platforms', note: 'The full shortlist before you narrow down by store size.' },
  { title: 'Best Ecommerce Platforms for Small Business', note: 'Platforms sized for a first store, not an enterprise catalog.' },
  { title: 'Best Website Builder for Ecommerce', note: 'Builders that double as a storefront, not just a brochure site.' },
  { title: 'Best Website Builder for Freelancers', note: 'Fast to launch for one-person portfolios and service pages.' },
  { title: 'Best Website Builder for Agencies', note: 'Client-friendly builders agencies can hand off without a headache.' },
  { title: 'Best Website Builder With AI', note: 'Sites that draft themselves from a short brief.' },
  { title: 'Best Hosting for Small Business', note: "Hosting that won't buckle the day your traffic spikes." },
  { title: 'Best Web Hosting for WordPress', note: 'Managed WordPress hosting worth the extra cost.' },
  { title: 'Best Domain Registrars', note: 'Where to actually register your domain, and what to avoid.' },
  { title: 'Best Business Email Services', note: 'Professional @yourbusiness.com email without running your own server.' },
  { title: 'Shopify Alternatives', note: "Other platforms if Shopify's fees are eating your margin." },
  { title: 'Shopify vs Wix', note: 'Ecommerce-first platform versus general-purpose builder.' },
  { title: 'Wix vs Squarespace', note: 'Two of the most popular general builders, compared directly.' },
];

export default function WebsiteEcommercePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Website &amp; Ecommerce</h1>
          <p className="lede">
            Everything it takes to get a business online: the builder, the store, the
            hosting, the domain, and the inbox that goes with it.
          </p>
          <div className="tag-row">
            {SUBCATEGORIES.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">The website and ecommerce guides on the runway for this category.</p>
          <GuideList items={GUIDES} />
        </div>
      </section>

      <PinStrip />
    </>
  );
}

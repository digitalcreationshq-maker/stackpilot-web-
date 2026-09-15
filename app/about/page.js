import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'About',
  description: 'Why Stack Pilot exists, who writes it, and how we evaluate the software we recommend.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>About Stack Pilot</h1>
          <p className="lede">
            Software buying advice for people who don&apos;t have time to trial ten apps
            to find one that fits.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {/*
            Replace the bracketed placeholders below with your own story.
            A named, specific founder story builds more trust than a generic
            "our team" page — especially on a monetized site where readers
            are deciding whether to trust your recommendation over a review
            they found elsewhere.
          */}
          <h2>Why I started this</h2>
          <p>
            I&apos;m [your name], and I started Stack Pilot after [the specific
            moment that made you want to do this — e.g. wasting money on a CRM
            that didn&apos;t fit, or spending a weekend trying to compare accounting
            tools with no straight answer anywhere online]. Every guide here comes
            out of that same problem: too many options, not enough plain, specific
            advice about which one is actually right for a business like yours.
          </p>
          <p>
            [A sentence or two of background — your own experience running a
            business, working in software, or whatever gives you standing to make
            these calls.]
          </p>

          <h2>How we evaluate software</h2>
          <p>
            Every recommendation on Stack Pilot is based on hands-on use of the
            product, not just a spec sheet. Before a tool makes it into a guide,
            we look at:
          </p>
          <ul className="value-list">
            <li>Actual pricing at the tiers a small business would realistically buy</li>
            <li>How long it takes to get from signup to doing real work in the tool</li>
            <li>Where it breaks down as a team grows past a handful of people</li>
            <li>What competitors do better, and who each tool is genuinely wrong for</li>
          </ul>
          <p>
            Guides are revisited as pricing and features change — a recommendation
            from six months ago isn&apos;t assumed to still be correct today.
          </p>

          <h2>How Stack Pilot makes money</h2>
          <p>
            Some links on this site are affiliate links — if you sign up for a tool
            through one, we may earn a commission at no extra cost to you. It never
            changes which tool we&apos;d recommend or how we rank it; if the best tool
            for a job doesn&apos;t have an affiliate program, it still gets recommended.
            Full detail is on the <a href="/privacy-policy">Privacy Policy</a> page.
          </p>

          <h2>Get in touch</h2>
          <p>
            Questions, corrections, or a tool you think deserves a guide? Visit the{' '}
            <a href="/contact">Contact page</a> — I read everything that comes through.
          </p>
        </div>
      </section>

      <PinStrip />
    </>
  );
              }

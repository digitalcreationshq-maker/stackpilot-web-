import Link from 'next/link';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function GuideList({ items }) {
  return (
    <ul className="guide-list">
      {items.map((item) => {
        const slug = item.slug || slugify(item.title);
        const published = item.published !== false;

        return (
          <li key={item.title}>
            {published ? (
              <Link
                href={`/article?slug=${slug}`}
                className="guide-title"
              >
                {item.title}
              </Link>
            ) : (
              <span className="guide-title">
                {item.title}
              </span>
            )}

            <span className="guide-note">
              {item.note}
            </span>

            {published ? (
              <Link
                href={`/article?slug=${slug}`}
                className="guide-read"
              >
                Read Guide →
              </Link>
            ) : (
              <span className="guide-coming">
                Coming soon
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

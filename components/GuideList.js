import Link from "next/link";
import { getArticleByTitle } from "@/content/articles";

export default function GuideList({ items }) {
  return (
    <ul className="guide-list">
      {items.map((item) => {
        const article = getArticleByTitle(item.title);

        return (
          <li key={item.title}>
            {article ? (
              <Link
                href={`/${article.category}/${article.slug}`}
                className="guide-link"
              >
                <span className="guide-title">{item.title}</span>
                <span className="guide-note">{item.note}</span>
                <span className="guide-read">Read guide →</span>
              </Link>
            ) : (
              <>
                <span className="guide-title">{item.title}</span>
                <span className="guide-note">{item.note}</span>
                <span className="guide-coming-soon">
                  Full guide coming soon
                </span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

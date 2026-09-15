import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/content/articles";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const article = getArticleBySlug(category, slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: article.heroImage
        ? [
            {
              url: article.heroImage,
              alt: article.heroAlt || article.title,
            },
          ]
        : [],
    },
  };
}

function ArticleImage({ src, alt, caption }) {
  if (!src) return null;

  return (
    <figure className="article-image">
      <img
        src={src}
        alt={alt || ""}
        loading="lazy"
      />

      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}

function ComparisonTable({ comparison }) {
  if (!comparison) return null;

  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            {comparison.columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {comparison.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const article = getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="article-page">
      <article className="article-container">

        <div className="article-breadcrumb">
          <Link href={`/${article.category}`}>
            ← Back to {article.category.replaceAll("-", " ")}
          </Link>
        </div>

        <header className="article-header">

          <p className="article-category">
            {article.category.replaceAll("-", " ")}
          </p>

          <h1>{article.title}</h1>

          <p className="article-description">
            {article.description}
          </p>

          <div className="article-meta">
            Updated {article.updated}
          </div>
        </header>

        <ArticleImage
          src={article.heroImage}
          alt={article.heroAlt}
          caption={article.heroCaption}
        />

        <div className="article-body">

          {article.intro && (
            <p className="article-intro">
              {article.intro}
            </p>
          )}

          {article.sections?.map((section, index) => (
            <section
              key={`${section.heading}-${index}`}
              className="article-section"
            >
              <h2>{section.heading}</h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}

              <ArticleImage
                src={section.image}
                alt={section.imageAlt}
                caption={section.imageCaption}
              />

              <ComparisonTable
                comparison={section.comparison}
              />
            </section>
          ))}

        </div>

        <div className="article-cta">
          <h2>Need help choosing the right software?</h2>

          <p>
            Explore more StackPilot buying guides and software
            comparisons before making your decision.
          </p>

          <Link href="/" className="article-cta-button">
            Explore StackPilot →
          </Link>
        </div>

      </article>
    </main>
  );
    }

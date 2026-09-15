import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/content/articles";
import { getToolBySlug } from "@/content/tools";

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
      <img src={src} alt={alt || ""} loading="lazy" />

      {caption && <figcaption>{caption}</figcaption>}
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

function ToolCard({ slug }) {
  const tool = getToolBySlug(slug);

  if (!tool) return null;

  return (
    <div className="tool-card">

      <div className="tool-card-image">
        {tool.image ? (
          <img src={tool.image} alt={tool.imageAlt || tool.name} />
        ) : (
          <div className="tool-image-placeholder">
            {tool.name}
          </div>
        )}
      </div>

      <div className="tool-card-content">

        <div className="tool-card-top">
          <div>
            <p className="tool-category">
              {tool.category}
            </p>

            <h3>{tool.name}</h3>
          </div>

          {tool.rating && (
            <div className="tool-rating">
              {tool.rating}
            </div>
          )}
        </div>

        <p className="tool-tagline">
          {tool.tagline}
        </p>

        <div className="tool-best-for">
          <strong>Best for:</strong> {tool.bestFor}
        </div>

        <p className="tool-verdict">
          {tool.verdict}
        </p>

        <div className="tool-pros-cons">

          <div>
            <h4>Pros</h4>

            <ul>
              {tool.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Cons</h4>

            <ul>
              {tool.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="tool-card-footer">

          <span className="tool-price">
            {tool.price}
          </span>

          <a
            href={tool.website}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="tool-button"
          >
            Visit Website →
          </a>

        </div>

      </div>
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

        <div className="article-disclosure">
          <strong>Editorial disclosure:</strong> StackPilot may earn a
          commission if you purchase or sign up through certain links.
          Our recommendations are based on our editorial assessment.
        </div>

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

              {section.paragraphs?.map(
                (paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                )
              )}

              <ArticleImage
                src={section.image}
                alt={section.imageAlt}
                caption={section.imageCaption}
              />

              {section.tool && (
                <ToolCard slug={section.tool} />
              )}

              {section.tools?.map((toolSlug) => (
                <ToolCard
                  key={toolSlug}
                  slug={toolSlug}
                />
              ))}

              <ComparisonTable
                comparison={section.comparison}
              />

            </section>
          ))}

        </div>

        <div className="article-cta">

          <h2>
            Need help choosing the right software?
          </h2>

          <p>
            Explore more StackPilot buying guides and software
            comparisons before making your decision.
          </p>

          <Link
            href="/"
            className="article-cta-button"
          >
            Explore StackPilot →
          </Link>

        </div>

      </article>
    </main>
  );
    }

export default function GuideList({ items }) {
  return (
    <ul className="guide-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="guide-title">{item.title}</span>
          <span className="guide-note">{item.note}</span>
        </li>
      ))}
    </ul>
  );
}

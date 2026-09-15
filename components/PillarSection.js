import GuideList from './GuideList';

export default function PillarSection({ heading, items }) {
  return (
    <>
      <h3 className="pillar-heading">{heading}</h3>
      <GuideList items={items} />
    </>
  );
}

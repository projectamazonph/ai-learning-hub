interface PathCardProps {
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  hours: string;
  modules: number;
  outcome: string;
}

export function PathCard({
  eyebrow,
  title,
  description,
  audience,
  hours,
  modules,
  outcome,
}: PathCardProps) {
  return (
    <article className="path-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="path-card__description">{description}</p>
      <dl className="path-card__meta">
        <div>
          <dt>For</dt>
          <dd>{audience}</dd>
        </div>
        <div>
          <dt>Effort</dt>
          <dd>{hours}</dd>
        </div>
        <div>
          <dt>Modules</dt>
          <dd>{modules}</dd>
        </div>
      </dl>
      <div className="path-card__outcome">
        <span>Proof you build</span>
        <p>{outcome}</p>
      </div>
    </article>
  );
}


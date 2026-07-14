import Link from 'next/link';

interface LabCardProps {
  number: string;
  title: string;
  description: string;
  skill: string;
  scenarios: number;
  status: 'AVAILABLE' | 'SPECIFIED' | 'PLANNED';
  href: '/labs/prompt-workbench' | null;
}

export function LabCard({ number, title, description, skill, scenarios, status, href }: LabCardProps) {
  const content = (
    <>
      <div className="lab-card__topline">
        <span className="mono">LAB {number}</span>
        <span className={`status status--${status.toLowerCase()}`}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="lab-card__footer">
        <span>{skill}</span>
        <span>{scenarios} scenarios</span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link className="lab-card lab-card--interactive" href={href}>
        {content}
      </Link>
    );
  }

  return <article className="lab-card">{content}</article>;
}


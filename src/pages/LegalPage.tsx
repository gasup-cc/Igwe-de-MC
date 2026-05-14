import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { Mail, Phone, MapPin } from "lucide-react";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: { heading: string; paragraphs?: string[]; list?: string[] }[];
}

export interface LegalContact {
  heading: string;
  intro?: string;
  email?: string;
  phone?: string;
  location?: string;
}

interface LegalProps {
  title: string;
  goldTitle: string;
  subtitle?: string;
  effectiveDate?: string;
  sections?: LegalSection[];
  contact?: LegalContact;
  body?: string;
}

const SectionBlock = ({ s }: { s: LegalSection }) => (
  <div className="mb-10">
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{s.heading}</h2>
    {s.paragraphs?.map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
    ))}
    {s.list && (
      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 marker:text-gold">
        {s.list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {s.subsections?.map((sub, i) => (
      <div key={i} className="mt-6">
        <h3 className="font-display text-xl text-gold/90 mb-3">{sub.heading}</h3>
        {sub.paragraphs?.map((p, j) => (
          <p key={j} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
        ))}
        {sub.list && (
          <ul className="list-disc list-inside space-y-2 text-muted-foreground marker:text-gold">
            {sub.list.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const LegalPage = ({ title, goldTitle, subtitle, effectiveDate, sections, contact, body }: LegalProps) => {
  return (
    <>
      <PageHero title={title} goldTitle={goldTitle} eyebrow="Legal" breadcrumb={[{ label: goldTitle }]} subtitle={subtitle} size="narrow" />
      <section className="py-20">
        <div className="container-x max-w-3xl mx-auto">
          <GlassCard padding="p-10 md:p-14" goldAccentTop hoverable={false}>
            {effectiveDate && (
              <div className="inline-flex items-center mb-8">
                <span className="bg-gold/15 text-gold text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-gold/30">
                  Effective Date: {effectiveDate}
                </span>
              </div>
            )}
            <article className="max-w-none">
              {sections ? (
                sections.map((s, i) => <SectionBlock key={i} s={s} />)
              ) : (
                <>
                  <p className="text-muted-foreground leading-relaxed">{body || "Detailed policy content coming soon. For any immediate questions, please contact us at info@igwedemc.com."}</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">Last updated: 2026.</p>
                </>
              )}

              {contact && (
                <div className="mt-12 p-6 md:p-8 rounded-xl border border-gold/25 bg-gold/[0.04]">
                  <h3 className="font-display text-xl text-gold mb-2">{contact.heading}</h3>
                  {contact.intro && <p className="text-muted-foreground mb-4">{contact.intro}</p>}
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {contact.email && (
                      <li className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-gold mt-0.5" />
                        <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a>
                      </li>
                    )}
                    {contact.phone && (
                      <li className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-gold mt-0.5" />
                        <span>{contact.phone}</span>
                      </li>
                    )}
                    {contact.location && (
                      <li className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gold mt-0.5" />
                        <span>{contact.location}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </article>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default LegalPage;

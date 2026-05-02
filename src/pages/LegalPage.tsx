import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";

interface LegalProps {
  title: string;
  goldTitle: string;
  body?: string;
}

const LegalPage = ({ title, goldTitle, body }: LegalProps) => {
  return (
    <>
      <PageHero title={title} goldTitle={goldTitle} eyebrow="Legal" breadcrumb={[{ label: goldTitle }]} size="narrow" />
      <section className="py-20">
        <div className="container-x max-w-3xl mx-auto">
          <GlassCard padding="p-10 md:p-14" goldAccentTop hoverable={false}>
            <article className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-gold">
              <p className="text-muted-foreground leading-relaxed">{body || "Detailed policy content coming soon. For any immediate questions, please contact us at info@igwedemc.com."}</p>
              <p className="text-muted-foreground leading-relaxed">
                This page will be updated with the full policy text. In the meantime, by using this site you agree to our standard terms covering bookings, deposits, cancellations and the handling of your personal information in accordance with UK GDPR.
              </p>
              <p className="text-muted-foreground leading-relaxed">Last updated: 2026.</p>
            </article>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default LegalPage;

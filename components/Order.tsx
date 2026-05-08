import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./HowItWorks";

export function Order() {
  return (
    <section
      id="order"
      className="border-b border-bone-100/[0.06] py-28 sm:py-36"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Start an order"
            title="Tell us about your frames."
            lede="Submit the details below. We'll confirm fit, send a prepaid label, and walk you through how to pack your glasses safely."
          />

          <div className="mt-12 space-y-6 border-t border-bone-100/[0.08] pt-8 text-sm text-bone-300">
            <ContactItem
              label="Email"
              value="orders@veiloptics.com"
              href="mailto:orders@veiloptics.com"
            />
            <ContactItem
              label="Hours"
              value="Mon – Fri, 9am – 6pm ET"
            />
            <ContactItem
              label="Workshop"
              value="By appointment only"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <span className="text-xs uppercase tracking-[0.14em] text-bone-400">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-right text-sm text-bone-100 transition hover:text-champagne-300"
        >
          {value}
        </a>
      ) : (
        <span className="text-right text-sm text-bone-100">{value}</span>
      )}
    </div>
  );
}

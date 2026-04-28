import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationAwardsSection } from "@/components/EducationAwardsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Nav } from "@/components/Nav";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { profile, projects, siteUrl } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: profile.name.split(" ")[0],
  familyName: profile.name.split(" ").slice(-1)[0],
  alternateName: profile.shortName,
  email: `mailto:${profile.email}`,
  telephone: `+1${profile.phone.replace(/-/g, "")}`,
  url: siteUrl,
  description: profile.summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Crescenta",
    addressRegion: "CA",
    addressCountry: "US",
  },
  knowsLanguage: ["English", "Korean", "American Sign Language"],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Crescenta Valley High School" },
    { "@type": "EducationalOrganization", name: "Glendale Community College" },
  ],
  worksFor: [
    { "@type": "Organization", name: "Next Generation Advocates" },
    { "@type": "Organization", name: "Academy of Science and Medicine" },
  ],
  award: [
    "President's Gold Award for Community Impact (2024)",
    "KAFLA Community Impact Award (2024)",
  ],
  sameAs: projects
    .filter((p) => p.url)
    .map((p) => p.url as string),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ImpactStats />
        <ExperienceSection />
        <SkillsSection />
        <EducationAwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

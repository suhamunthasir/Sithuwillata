import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "si";

/**
 * All user-facing copy lives here so the whole site can switch between
 * English (default) and Sinhala with the navbar language toggle.
 * `en` defines the canonical shape; `si` must mirror it exactly.
 */
export const translations = {
  en: {
    nav: {
      links: [
        { label: "Our Impact" },
        { label: "Projects" },
        { label: "About Us" },
        { label: "Gallery" },
      ],
      getInvolved: [
        { title: "Donate", desc: "Fund books, supplies and learning support." },
        { title: "Volunteer", desc: "Join school visits and packing days." },
        {
          title: "Sponsor School Supplies",
          desc: "Give a child a ready-to-learn kit.",
        },
        {
          title: "Partner With Us",
          desc: "Schools, companies and community groups.",
        },
      ],
      cta: "Get Involved",
      megaTagline: "Your small step, a child's future",
      donateNow: "Donate Now",
      donateToday: "Donate Today",
      getInvolvedHeading: "Get Involved",
    },
    hero: {
      badge: "For Sri Lankan school children",
      titlePre: "From Small Acts of Kindness to ",
      titleAccent: "Brighter Futures.",
      subtitle:
        "We support Sri Lankan children with education, school supplies, and community care.",
      donate: "Donate",
      volunteer: "Volunteer",
      scroll: "Scroll",
    },
    supportedBy: {
      heading: "Supported by kind hearts across Sri Lanka",
      supporters: [
        "Local Donors",
        "Volunteers",
        "Schools",
        "Communities",
        "Teachers",
        "Families",
      ],
    },
    coreProcess: {
      eyebrow: "How we work",
      heading: "We Turn Kindness Into Real Educational Support",
      intro:
        "A simple, transparent process, from finding the children who need help most, to placing real resources in their hands.",
      steps: [
        {
          title: "Identify Children & Schools in Need",
          text: "We connect with local schools and communities to understand what children need most.",
        },
        {
          title: "Collect Donations & Resources",
          text: "We gather books, school supplies, funds, and volunteer support through trusted local campaigns.",
        },
        {
          title: "Deliver Support With Care",
          text: "We visit schools and communities directly to distribute support and create meaningful impact.",
        },
      ],
    },
    impactModel: {
      eyebrow: "Two ways we create change",
      heading: "One mission, two hands working together.",
      cards: [
        {
          label: "Our Model",
          title: "Education Support",
          text: "School supplies, books, learning materials, and student support, delivered straight to the children who need them.",
          cta: "View Projects",
        },
        {
          label: "Our Model",
          title: "Community Care",
          text: "Donation drives, volunteer visits, and on-the-ground support for families and rural communities in need.",
          cta: "Get Involved",
        },
      ],
    },
    featuredStory: {
      eyebrow: "A story of hope",
      quote:
        "Receiving school supplies gave me confidence to begin the new term with hope.",
      name: "A Student",
      place: "Sri Lanka",
      body: "Through the support of kind donors and volunteers, children receive the tools they need to continue learning with dignity.",
      badge: "A hand for learning",
    },
    impactNumbers: {
      eyebrow: "Our impact so far",
      heading: "Kindness, measured in real change.",
      stats: [
        "Students Supported",
        "Schools Reached",
        "Volunteers",
        "Projects Completed",
        "Districts Reached",
      ],
    },
    partner: {
      eyebrow: "Be part of it",
      heading: "Lend a hand. Change a future.",
      intro:
        "Every contribution, big or small, helps a Sri Lankan child learn with dignity.",
      cards: [
        {
          title: "Donate",
          text: "Help provide school supplies and learning support for children.",
          cta: "Donate Today",
        },
        {
          title: "Volunteer",
          text: "Join school visits, packing days, and community support activities.",
          cta: "Join Us",
        },
        {
          title: "Partner",
          text: "Work with us as a school, company, or community group.",
          cta: "Partner With Us",
        },
      ],
    },
    newsletter: {
      heading: "Follow Our Journey",
      intro:
        "Get updates about our projects, donation drives, and school visits.",
      thanksTitle: "Thank you!",
      thanksBody: "Thank you for joining our journey.",
      firstName: "First Name",
      email: "Email Address",
      subscribe: "Subscribe",
    },
    footer: {
      ctaPre: "We can't do it ",
      ctaAccent: "without you.",
      getInvolved: "Get Involved",
      columns: [
        { title: "Meet Us", links: ["About Us", "Team", "Contact"] },
        {
          title: "Learn More",
          links: ["Impact", "Projects", "Gallery", "Stories"],
        },
        {
          title: "Get Involved",
          links: ["Donate", "Volunteer", "Sponsor Supplies", "Partner With Us"],
        },
      ],
      tagline:
        "From small acts of kindness to brighter futures, supporting Sri Lankan school children with education, supplies and community care.",
      madeWith: "Made with kindness in Sri Lanka.",
    },
    logo: {
      title: "Sithuwillata Athwalak",
      sub: "සිතුවිල්ලට අත්වැලක්",
    },
  },

  si: {
    nav: {
      links: [
        { label: "අපගේ බලපෑම" },
        { label: "ව්‍යාපෘති" },
        { label: "අප ගැන" },
        { label: "ගැලරිය" },
      ],
      getInvolved: [
        {
          title: "පරිත්‍යාග කරන්න",
          desc: "පොත්, උපකරණ සහ ඉගෙනුම් සහාය සපයන්න.",
        },
        {
          title: "ස්වේච්ඡා සේවය",
          desc: "පාසල් චාරිකා සහ ඇසුරුම් දිනවලට එක්වන්න.",
        },
        {
          title: "පාසල් උපකරණ අනුග්‍රහය",
          desc: "දරුවෙකුට ඉගෙනීමට සූදානම් කට්ටලයක් දෙන්න.",
        },
        {
          title: "අප සමඟ හවුල් වන්න",
          desc: "පාසල්, සමාගම් සහ ප්‍රජා කණ්ඩායම්.",
        },
      ],
      cta: "සම්බන්ධ වන්න",
      megaTagline: "ඔබේ කුඩා පියවරක්, දරුවෙකුගේ අනාගතයක්",
      donateNow: "දැන් පරිත්‍යාග කරන්න",
      donateToday: "අද පරිත්‍යාග කරන්න",
      getInvolvedHeading: "සම්බන්ධ වන්න",
    },
    hero: {
      badge: "ශ්‍රී ලාංකික පාසල් දරුවන් සඳහා",
      titlePre: "කුඩා කරුණා ක්‍රියාවන්ගේ සිට ",
      titleAccent: "දීප්තිමත් අනාගතයන් දක්වා.",
      subtitle:
        "අපි ශ්‍රී ලාංකික දරුවන්ට අධ්‍යාපනය, පාසල් උපකරණ සහ ප්‍රජා රැකවරණය සපයමු.",
      donate: "පරිත්‍යාග කරන්න",
      volunteer: "ස්වේච්ඡා සේවය",
      scroll: "පහළට",
    },
    supportedBy: {
      heading: "ශ්‍රී ලංකාව පුරා කරුණාවන්ත හදවත් වලින් සහාය ලැබේ",
      supporters: [
        "දේශීය පරිත්‍යාගශීලීන්",
        "ස්වේච්ඡා සේවකයින්",
        "පාසල්",
        "ප්‍රජාවන්",
        "ගුරුවරුන්",
        "පවුල්",
      ],
    },
    coreProcess: {
      eyebrow: "අපි ක්‍රියා කරන ආකාරය",
      heading: "අපි කරුණාව සැබෑ අධ්‍යාපනික සහයක් බවට පත් කරමු",
      intro:
        "වැඩිම උදව් අවශ්‍ය දරුවන් සොයා ගැනීමේ සිට ඔවුන්ගේ අතට සැබෑ සම්පත් ලබා දීම දක්වා සරල, විනිවිද පෙනෙන ක්‍රියාවලියකි.",
      steps: [
        {
          title: "අවශ්‍යතා ඇති දරුවන් සහ පාසල් හඳුනා ගැනීම",
          text: "වැඩිම අවශ්‍යතාව කුමක්දැයි තේරුම් ගැනීමට අපි දේශීය පාසල් සහ ප්‍රජාවන් සමඟ සම්බන්ධ වෙමු.",
        },
        {
          title: "පරිත්‍යාග සහ සම්පත් එක්රැස් කිරීම",
          text: "විශ්වාසනීය දේශීය ව්‍යාපාර හරහා පොත්, පාසල් උපකරණ, අරමුදල් සහ ස්වේච්ඡා සහාය එක්රැස් කරමු.",
        },
        {
          title: "සැලකිල්ලෙන් සහාය ලබා දීම",
          text: "සහාය බෙදා දීමට සහ අර්ථවත් බලපෑමක් ඇති කිරීමට අපි පාසල් සහ ප්‍රජාවන් කෙලින්ම බැලීමට යමු.",
        },
      ],
    },
    impactModel: {
      eyebrow: "අපි වෙනසක් ඇති කරන ක්‍රම දෙකක්",
      heading: "එක මෙහෙවරක්, එකට වැඩ කරන අත් දෙකක්.",
      cards: [
        {
          label: "අපගේ ආකෘතිය",
          title: "අධ්‍යාපන සහාය",
          text: "පාසල් උපකරණ, පොත්, ඉගෙනුම් ද්‍රව්‍ය සහ ශිෂ්‍ය සහාය, ඒවා අවශ්‍ය දරුවන්ට කෙලින්ම ලබා දේ.",
          cta: "ව්‍යාපෘති බලන්න",
        },
        {
          label: "අපගේ ආකෘතිය",
          title: "ප්‍රජා රැකවරණය",
          text: "පරිත්‍යාග මෙහෙයුම්, ස්වේච්ඡා චාරිකා සහ අවශ්‍යතා ඇති පවුල් සහ ග්‍රාමීය ප්‍රජාවන් සඳහා භූමියේ සහාය.",
          cta: "සම්බන්ධ වන්න",
        },
      ],
    },
    featuredStory: {
      eyebrow: "බලාපොරොත්තුවේ කතාවක්",
      quote:
        "පාසල් උපකරණ ලැබීම නව වාරය බලාපොරොත්තුවෙන් ආරම්භ කිරීමට මට විශ්වාසය ලබා දුන්නා.",
      name: "ශිෂ්‍යයෙක්",
      place: "ශ්‍රී ලංකාව",
      body: "කරුණාවන්ත පරිත්‍යාගශීලීන් සහ ස්වේච්ඡා සේවකයින්ගේ සහාය හරහා, දරුවන්ට ගෞරවයෙන් ඉගෙනීම දිගටම කරගෙන යාමට අවශ්‍ය මෙවලම් ලැබේ.",
      badge: "ඉගෙනීමට අත්වැලක්",
    },
    impactNumbers: {
      eyebrow: "මෙතෙක් අපගේ බලපෑම",
      heading: "කරුණාව, සැබෑ වෙනසකින් මනිනු ලැබේ.",
      stats: [
        "සහාය ලැබූ ශිෂ්‍යයින්",
        "ළඟා වූ පාසල්",
        "ස්වේච්ඡා සේවකයින්",
        "සම්පූර්ණ කළ ව්‍යාපෘති",
        "ළඟා වූ දිස්ත්‍රික්ක",
      ],
    },
    partner: {
      eyebrow: "මෙහි කොටසක් වන්න",
      heading: "අතක් දෙන්න. අනාගතයක් වෙනස් කරන්න.",
      intro:
        "කුඩා හෝ විශාල සෑම දායකත්වයක්ම ශ්‍රී ලාංකික දරුවෙකුට ගෞරවයෙන් ඉගෙන ගැනීමට උපකාර කරයි.",
      cards: [
        {
          title: "පරිත්‍යාග කරන්න",
          text: "දරුවන්ට පාසල් උපකරණ සහ ඉගෙනුම් සහාය සැපයීමට උදව් කරන්න.",
          cta: "අද පරිත්‍යාග කරන්න",
        },
        {
          title: "ස්වේච්ඡා සේවය",
          text: "පාසල් චාරිකා, ඇසුරුම් දින සහ ප්‍රජා සහාය ක්‍රියාකාරකම්වලට එක්වන්න.",
          cta: "අප හා එක්වන්න",
        },
        {
          title: "හවුල්කරු",
          text: "පාසලක්, සමාගමක් හෝ ප්‍රජා කණ්ඩායමක් ලෙස අප සමඟ වැඩ කරන්න.",
          cta: "අප සමඟ හවුල් වන්න",
        },
      ],
    },
    newsletter: {
      heading: "අපගේ ගමන අනුගමනය කරන්න",
      intro:
        "අපගේ ව්‍යාපෘති, පරිත්‍යාග මෙහෙයුම් සහ පාසල් චාරිකා පිළිබඳ යාවත්කාලීන ලබා ගන්න.",
      thanksTitle: "ස්තූතියි!",
      thanksBody: "අපගේ ගමනට එක්වීම ගැන ස්තූතියි.",
      firstName: "මුල් නම",
      email: "විද්‍යුත් තැපැල් ලිපිනය",
      subscribe: "දායක වන්න",
    },
    footer: {
      ctaPre: "ඔබ නොමැතිව අපට ",
      ctaAccent: "මෙය කළ නොහැක.",
      getInvolved: "සම්බන්ධ වන්න",
      columns: [
        { title: "අපව හමුවන්න", links: ["අප ගැන", "කණ්ඩායම", "සම්බන්ධ වන්න"] },
        {
          title: "තව දැනගන්න",
          links: ["බලපෑම", "ව්‍යාපෘති", "ගැලරිය", "කතා"],
        },
        {
          title: "සම්බන්ධ වන්න",
          links: [
            "පරිත්‍යාග",
            "ස්වේච්ඡා සේවය",
            "උපකරණ අනුග්‍රහය",
            "අප සමඟ හවුල් වන්න",
          ],
        },
      ],
      tagline:
        "කුඩා කරුණා ක්‍රියාවන්ගේ සිට දීප්තිමත් අනාගතයන් දක්වා, ශ්‍රී ලාංකික පාසල් දරුවන්ට අධ්‍යාපනය, උපකරණ සහ ප්‍රජා රැකවරණය සපයමින්.",
      madeWith: "ශ්‍රී ලංකාවේ කරුණාවෙන් සාදන ලදී.",
    },
    logo: {
      title: "සිතුවිල්ලට අත්වැලක්",
      sub: "Sithuwillata Athwalak",
    },
  },
} as const;

export type Translation = (typeof translations)["en"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "sithuwillata-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // English is the default; remember the visitor's choice across visits.
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "si" ? "si" : "en";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const toggle = () => setLang(lang === "en" ? "si" : "en");

  // Keep <html lang> and a body class in sync so Sinhala uses its own font.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-si", lang === "si");
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang] as Translation }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "si";

/**
 * Renders a translation string where phrases wrapped in **double asterisks**
 * are shown bold. Keeps the surrounding text (and colour) intact.
 */
export function renderRich(text: string): ReactNode {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

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
      badge: "For rural Sri Lankan children",
      titlePre: "Empowering Rural Children Through ",
      titleAccent: "Education.",
      subtitle:
        "We improve rural children's access to quality **education, learning resources, and personal development opportunities**.",
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
      eyebrow: "Our objective",
      heading: "Reducing educational inequality in rural communities",
      intro:
        "Through school donation projects, educational seminars, awareness programmes, and community support, we aim to **reduce educational inequality** and help every child build the confidence, knowledge, and skills for a brighter future.",
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
      eyebrow: "What we stand for",
      heading: "Our vision and mission.",
      cards: [
        {
          label: "Vision",
          title: "Our Vision",
          text: "A future where every rural child is educated, empowered, and equipped to transform their life and community.",
          cta: "Get Involved",
        },
        {
          label: "Mission",
          title: "Our Mission",
          text: "To bridge the educational gap in rural communities by supporting children with learning resources, school donation projects, educational seminars, awareness programmes, and community-based initiatives that **strengthen their knowledge, confidence, and opportunities for success.**",
          cta: "Support Us",
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
        "Empowering rural children through education, with learning resources, school donation projects, seminars, and community support.",
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
      badge: "ග්‍රාමීය ශ්‍රී ලාංකික දරුවන් සඳහා",
      titlePre: "අධ්‍යාපනය තුළින් ග්‍රාමීය දරුවන් ",
      titleAccent: "සවිබල ගැන්වීම.",
      subtitle:
        "**ගුණාත්මක අධ්‍යාපනය, ඉගෙනුම් සම්පත් සහ පෞද්ගලික සංවර්ධන අවස්ථා** සඳහා ග්‍රාමීය දරුවන්ගේ ප්‍රවේශය අපි වැඩිදියුණු කරමු.",
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
      eyebrow: "අපගේ පරමාර්ථය",
      heading: "ග්‍රාමීය ප්‍රජාවන්හි අධ්‍යාපන අසමානතාව අඩු කිරීම",
      intro:
        "පාසල් පරිත්‍යාග ව්‍යාපෘති, අධ්‍යාපනික සම්මන්ත්‍රණ, දැනුවත් කිරීමේ වැඩසටහන් සහ ප්‍රජා සහාය තුළින් අපි **අධ්‍යාපන අසමානතාව අඩු කිරීමට** උත්සාහ කරමු; සෑම දරුවෙකුටම දීප්තිමත් අනාගතයක් සඳහා විශ්වාසය, දැනුම සහ කුසලතා ගොඩනඟා ගැනීමට උපකාර කරමු.",
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
      eyebrow: "අප වෙනුවෙන් පෙනී සිටින දේ",
      heading: "අපගේ දැක්ම සහ මෙහෙවර.",
      cards: [
        {
          label: "දැක්ම",
          title: "අපගේ දැක්ම",
          text: "සෑම ග්‍රාමීය දරුවෙකුම අධ්‍යාපනය ලබා, සවිබල ගැන්වී, තම ජීවිතය හා ප්‍රජාව පරිවර්තනය කිරීමට සූදානම් වූ අනාගතයක්.",
          cta: "සම්බන්ධ වන්න",
        },
        {
          label: "මෙහෙවර",
          title: "අපගේ මෙහෙවර",
          text: "ඉගෙනුම් සම්පත්, පාසල් පරිත්‍යාග ව්‍යාපෘති, අධ්‍යාපනික සම්මන්ත්‍රණ, දැනුවත් කිරීමේ වැඩසටහන් සහ ප්‍රජා මූලික වැඩසටහන් මගින් දරුවන්ට සහාය වෙමින් ග්‍රාමීය ප්‍රජාවන්හි අධ්‍යාපන පරතරය අඩු කිරීම; **ඔවුන්ගේ දැනුම, විශ්වාසය සහ ජයග්‍රහණය සඳහා අවස්ථා ශක්තිමත් කිරීම.**",
          cta: "සහාය වන්න",
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
        "ඉගෙනුම් සම්පත්, පාසල් පරිත්‍යාග ව්‍යාපෘති, සම්මන්ත්‍රණ සහ ප්‍රජා සහාය සමඟ අධ්‍යාපනය තුළින් ග්‍රාමීය දරුවන් සවිබල ගැන්වීම.",
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

import { Fragment, type ReactNode } from "react";

/**
 * Renders a copy string where phrases wrapped in **double asterisks** are shown
 * bold. Keeps the surrounding text and colour intact.
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

export const translations = {
  nav: {
    links: [
      { label: "Home" },
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
    intro: "Get updates about our projects, donation drives, and school visits.",
    thanksTitle: "Thank you!",
    thanksBody: "Thank you for joining our journey.",
    firstName: "First Name",
    email: "Email Address",
    subscribe: "Subscribe",
  },
  pages: {
    impact: {
      eyebrow: "Our impact",
      title: "The change we measure together.",
      subtitle:
        "Every book delivered and every school reached is a step toward a more equal future for rural Sri Lankan children.",
    },
    about: {
      eyebrow: "About us",
      title: "Who we are and why we do this.",
      subtitle:
        "Sithuwillata Athwalak is a community movement working to reduce educational inequality in rural Sri Lanka.",
    },
    projects: {
      eyebrow: "Our work",
      title: "Projects bringing learning to life.",
      subtitle:
        "From school supply drives to learning seminars, here is where your support goes.",
      items: [
        {
          tag: "Ongoing",
          title: "School Supply Drive",
          place: "Pettah Market, Colombo",
          text: "Sourcing books, stationery, and colour pencils in bulk to assemble ready-to-learn kits for children starting the new term.",
          image: "/images/prep/prep-sorting-supplies.jpg",
        },
        {
          tag: "Ongoing",
          title: "Packing & Wrapping Days",
          place: "Volunteer Hub",
          text: "Volunteers gather to count, wrap, and label every parcel by hand so each child receives a complete, personal kit.",
          image: "/images/prep/prep-wrapping-parcels.jpg",
        },
        {
          tag: "Completed",
          title: "Stationery Sourcing Run",
          place: "Pettah, Colombo",
          text: "A full day in the market choosing the right supplies — crayons, exercise books, and pencil cases the children love.",
          image: "/images/prep/prep-market-counter.jpg",
        },
        {
          tag: "Completed",
          title: "Overnight Packing Marathon",
          place: "Volunteer Hub",
          text: "The team worked late into the night sorting donations into hundreds of boxes ready for delivery to rural schools.",
          image: "/images/prep/prep-night-packing.jpg",
        },
        {
          tag: "Upcoming",
          title: "Rural School Delivery",
          place: "Outstation Districts",
          text: "Transporting the prepared kits and supplies directly to schools and handing them to children with care.",
          image: "/images/prep/prep-trolley-supplies.jpg",
        },
        {
          tag: "Upcoming",
          title: "Volunteer School Visits",
          place: "Nationwide",
          text: "Regular visits where volunteers mentor students, run activities, and deliver donated supplies in person.",
          image: "/images/prep/prep-packing-green.jpg",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments from the field.",
      subtitle:
        "Real glimpses from our preparation days — sourcing supplies in the Pettah market and packing them with care for rural schools.",
      images: [
        { src: "/images/prep/prep-sorting-supplies.jpg", caption: "Sorting school supplies for each child" },
        { src: "/images/prep/prep-night-packing.jpg", caption: "Packing late into the night" },
        { src: "/images/prep/prep-market-counter.jpg", caption: "Sourcing stationery in the Pettah market" },
        { src: "/images/prep/prep-wrapping-parcels.jpg", caption: "Wrapping parcels by hand" },
        { src: "/images/prep/prep-packing-green.jpg", caption: "Every kit checked and counted" },
        { src: "/images/prep/prep-trolley-supplies.jpg", caption: "Books and supplies ready to move" },
        { src: "/images/prep/prep-market-stall.jpg", caption: "Choosing the right supplies" },
        { src: "/images/prep/prep-pettah-street.jpg", caption: "Carrying donations through Colombo" },
        { src: "/images/prep/prep-boy-wrapping.jpg", caption: "A volunteer wraps the finished parcels" },
        { src: "/images/prep/prep-books-box.jpg", caption: "Boxed and labelled for delivery" },
        { src: "/images/prep/prep-shopping.jpg", caption: "Picking out colour pencils and crayons" },
        { src: "/images/prep/prep-pencil-cases.jpg", caption: "Pencil cases the children love" },
      ],
    },
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
    sub: "Empowering rural children through education",
  },
} as const;

export type Translation = typeof translations;

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useLanguage() {
  return { t: translations };
}

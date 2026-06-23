import PageHeader from "../components/PageHeader";
import CoreProcess from "../components/CoreProcess";
import ImpactModel from "../components/ImpactModel";
import { useLanguage } from "../i18n";

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t.pages.about.eyebrow}
        title={t.pages.about.title}
        subtitle={t.pages.about.subtitle}
      />
      <CoreProcess />
      <ImpactModel />
    </>
  );
}

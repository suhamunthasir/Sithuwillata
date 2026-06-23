import PageHeader from "../components/PageHeader";
import ImpactNumbers from "../components/ImpactNumbers";
import FeaturedStory from "../components/FeaturedStory";
import { useLanguage } from "../i18n";

export default function Impact() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t.pages.impact.eyebrow}
        title={t.pages.impact.title}
        subtitle={t.pages.impact.subtitle}
      />
      <ImpactNumbers />
      <FeaturedStory />
    </>
  );
}

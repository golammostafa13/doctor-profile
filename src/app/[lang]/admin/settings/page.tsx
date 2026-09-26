import { PageHeader } from "@/components/admin/ui";
import { SettingsForm } from "@/components/admin/settings-form";
import { getSettings } from "@/lib/data/settings";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

export default async function AdminSettings(props: PageProps<"/[lang]/admin/settings">) {
  const { lang } = await props.params;
  const g = getDictionary(lang as Locale).dash.settings;
  const settings = await getSettings();
  return (
    <>
      <PageHeader kicker={g.kicker} title={g.title} description={g.description} />
      <SettingsForm settings={settings} />
    </>
  );
}

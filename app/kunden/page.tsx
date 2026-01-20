import { createSupabaseServerClient } from "@/lib/supabaseClient";

export default async function KundenPage() {
  const supabase = createSupabaseServerClient();

  const { data: kunden, error } = await supabase
    .from("kunden")
    .select("*")
    .order("nachname");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kunden</h1>

      <a
        href="/kunden/neu"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Neuer Kunde
      </a>

      <pre className="mt-6 bg-gray-100 p-4 rounded">
        {error && "Fehler: " + error.message}
        {kunden ? JSON.stringify(kunden, null, 2) : "Keine Kunden gefunden"}
      </pre>
    </div>
  );
}

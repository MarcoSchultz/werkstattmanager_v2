export default function KundenTable({ kunden }: { kunden: any[] }) {
  return (
    <table className="w-full mt-6 border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 text-left">Vorname</th>
          <th className="p-2 text-left">Nachname</th>
          <th className="p-2 text-left">E-Mail</th>
          <th className="p-2 text-left">Telefon</th>
          <th className="p-2 text-left">Aktionen</th>
        </tr>
      </thead>
      <tbody>
        {kunden.map((k) => (
          <tr key={k.id} className="border-b">
            <td className="p-2">{k.vorname}</td>
            <td className="p-2">{k.nachname}</td>
            <td className="p-2">{k.email}</td>
            <td className="p-2">{k.telefon}</td>
            <td className="p-2">
              <a
                href={`/kunden/${k.id}`}
                className="text-blue-600 hover:underline"
              >
                Bearbeiten
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
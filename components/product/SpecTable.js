export default function SpecTable({ product }) {
  const rows = [
    { label: "SKU / Model", value: product.sku },
    { label: "Material", value: product.material },
    { label: "Capacity / Size", value: product.capacity },
    { label: "Rod Specs", value: product.rod },
    { label: "Included", value: product.included },
    { label: "MOQ", value: `${product.moq} units` },
    { label: "Made In", value: "India" },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50" : ""}>
              <td className="w-2/5 px-4 py-3 font-medium text-[var(--color-muted)]">
                {row.label}
              </td>
              <td className="px-4 py-3 font-medium text-[var(--color-navy)]">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

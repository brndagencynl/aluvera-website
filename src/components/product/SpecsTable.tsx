import type { ProductSpec } from '@/data/products';

interface SpecsTableProps {
  specs: ProductSpec[];
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <table className="w-full">
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.label}
              className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
            >
              <td className="px-6 py-4 text-sm font-medium text-slate-900 w-1/3">
                {spec.label}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

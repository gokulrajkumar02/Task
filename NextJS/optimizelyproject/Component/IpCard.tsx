
const IpCard = ({ label, value, border = false }: { label: string; value: string; border?: boolean }) => {
  return (
    <div className={`px-6 py-3 text-left ${border ? 'border-l border-gray-200' : ''}`}>
      <p className="text-[10px] font-bold  uppercase text-gray-700 mb-2">{label}</p>
      <p className="text-[16px] font-semibold text-gray-900">{value}</p>
    </div>
  )
}

export default IpCard
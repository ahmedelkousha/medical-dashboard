export default function Modal({open, onClose, title, children}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded p-4 w-11/12 max-w-lg">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

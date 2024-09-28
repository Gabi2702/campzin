export default function Card({ className, children , onClick }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`relative bg-primary-dark rounded-2xl shadow-lg p-1 ${className}`} onClick={onClick}>
        {children}
      </div>
    </div>
  );
}

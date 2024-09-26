export default function Card({ className, children }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`relative bg-primary-dark rounded-lg shadow-lg p-1 ${className}`}>
        {children}
      </div>
    </div>
  );
}

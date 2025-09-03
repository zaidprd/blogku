// components/wide-container.tsx
export default function WideContainer({ children }) {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {children}
    </div>
  );
}
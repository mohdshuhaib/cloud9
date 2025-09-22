// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer id="footer" className="bg-background-light border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        {/* 1. Translated heading with new font */}
        <h3 className="text-2xl font-bold text-accent-gold mb-4 font-heading">Cloud9</h3>
        {/* 2. Translated copyright text */}
        <div className="mt-6 text-xs">
          © {new Date().getFullYear()} Cloud9. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
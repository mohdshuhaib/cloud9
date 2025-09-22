// app/components/Footer.tsx

// Change the id from "contact" to "footer"
export default function Footer() {
  return (
    <footer id="footer" className="bg-background-light border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        {/* ...rest of your footer code... */}
        <h3 className="text-2xl font-bold text-accent-gold mb-4">كلاود9</h3>
        <div className="mt-6 text-xs">
          &copy; {new Date().getFullYear()} كلاود9. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
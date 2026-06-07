export default function Footer() {
  return (
    <footer className="bg-stone-200 dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

        
        <div className="font-semibold text-gray-800 dark:text-gray-200">
         Share your Files or Texts across your device in a same wifi seamlessly with us . 
        </div>

        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Copy & Paste
        </div>
      </div>
    </footer>
  );
}
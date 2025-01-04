import { Terminal } from "lucide-react";
import Link from "next/link";

function Footer() {
  const socials = [
    { name: "Twitter", href: "https://twitter.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];
  const SiteMapItems = ["About Us", "Contact", "Blog"];
  const legalItems = ["Terms of Service", "Privacy Policy"];

  return (
    <footer className="relative bg-zinc-900/20 text-zinc-400 border-t border-zinc-800/50 mt-auto">
      {/* Top Divider */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Terminal className="size-6" />
              <span className="text-xl font-bold">Syntaxium</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Master coding through practice, with a platform designed for
              simplicity and focus.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-zinc-300 font-semibold mb-4">Site Map</h4>
            <ul className="space-y-3">
              {SiteMapItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-zinc-200 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-zinc-300 font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="hover:text-zinc-200 transition-colors"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-zinc-300 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-zinc-200 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 h-px bg-zinc-700/50" />

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Syntaxium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

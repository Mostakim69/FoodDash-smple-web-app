export default function Footer() {
  return (
    <footer className="relative py-16 bg-blue-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-5">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Download */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-5">
              Download
            </h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-3 rounded-lg w-full max-w-[220px]"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  {/* Apple icon */}
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-200">Download on the</div>
                  <div className="text-lg font-semibold -mt-1 text-white">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-3 rounded-lg w-full max-w-[220px]"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  {/* Play Store icon */}
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-200">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1 text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4 - Connect / Social */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-5">
              Connect
            </h3>
            <div className="flex gap-6 text-gray-800">
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          © {new Date().getFullYear()} FoodDash Delivery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

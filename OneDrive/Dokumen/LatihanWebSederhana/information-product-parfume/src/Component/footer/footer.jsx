export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-wrap justify-between w-full">
          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              123 Street, City, Country
            </p>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i>
              (123) 456-7890
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i>
              info@company.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Subscribe</h5>
            <p className="mb-4">Get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 mb-2 text-gray-900 rounded-lg"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

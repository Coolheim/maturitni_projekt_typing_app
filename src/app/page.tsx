import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <nav>
          <ul className="flex justify-end space-x-4">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/login_register"
                className="text-blue-600 hover:underline"
              >
                Login/Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <p className="text-lg">Hello typers</p>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        © 2025 maturitni_projekt_typing_app
      </footer>
    </div>
  );
}

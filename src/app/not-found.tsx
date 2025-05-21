import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! Página não encontrada.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}

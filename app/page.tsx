import Link from 'next/link';

export const metadata = {
  title: "Next.js Website",
};

export default function Page() {
  return (
    <div className="bg-gray-50 div-container min-h-screen flex flex-col items-center">
      <header className="w-full max-w-7xl flex justify-center items-center p-5 bg-white shadow-md">
        <div className="flex justify-between w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-blue-600">Next.js App</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-7xl flex flex-col items-center p-6">
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Site</h2>
          <p className="text-lg text-gray-600">Discover beautiful images and engaging content below.</p>
        </section>

        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675674296261?e=1736985600&v=beta&t=9IlkxzDcPaLO8AxrYd0shm6PV2eZPg004p_8moHtDa0"
                width={800}
                height={600}
                alt="LinkedIn image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Image Title {index + 1}</h3>
                <p className="text-gray-600 mt-2">
                  This is a sample description for image {index + 1}. You can replace this with actual content.
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="w-full max-w-7xl text-center py-4 bg-gray-100 mt-12">
        <p className="text-gray-600">© 2023 My Next.js Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

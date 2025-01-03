import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-8 backdrop-blur-sm bg-zinc-800/30 p-12 rounded-2xl border border-zinc-800 shadow-2xl">
          <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-100">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8">
            The page you&apos;re looking for was not found or doesn&apos;t
            exist.
          </p>
          <Link
            href="/"
            className="bg-gradient-to-r from-white to-gray-200 text-black px-8 py-3 rounded-full font-medium 
                       hover:from-gray-200 hover:to-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Return to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

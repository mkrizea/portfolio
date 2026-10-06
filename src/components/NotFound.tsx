import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-prose text-gray-600">
        That address isn’t part of this site.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Back home
      </Link>
    </section>
  );
}

export default NotFound;

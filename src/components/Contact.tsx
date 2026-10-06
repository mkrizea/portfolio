import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";

const email = "mariakrizea@gmail.com";

const profiles = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maria-krizea/",
    display: "linkedin.com/in/maria-krizea",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/mkrizea",
    display: "github.com/mkrizea",
    icon: Github,
  },
];

function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  useEffect(() => {
    if (copyState !== "copied") return;
    const timeoutId = window.setTimeout(() => setCopyState("idle"), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copyState]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      return;
    } catch {
      /* try the legacy copy path below */
    }

    try {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.append(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      setCopyState(copied ? "copied" : "failed");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Contact
      </h1>
      <p className="mt-3 max-w-prose text-gray-600">
        Feel free to reach out for collaboration or inquiries. Email opens your
        mail app. LinkedIn and GitHub open in a new tab.
      </p>

      <ul className="mt-8 space-y-3">
        <li className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${email}`}
              className="flex min-h-11 min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Mail className="shrink-0 text-blue-700" size={20} aria-hidden />
              <span className="min-w-0">
                <span className="block text-sm text-gray-500">Email</span>
                <span className="block font-medium break-all text-gray-900">
                  {email}
                </span>
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:self-center"
            >
              {copyState === "copied" ? (
                <Check size={16} aria-hidden />
              ) : (
                <Copy size={16} aria-hidden />
              )}
              {copyState === "copied" ? "Copied" : "Copy address"}
            </button>
          </div>
          <p role="status" className="sr-only">
            {copyState === "copied"
              ? "Email address copied."
              : copyState === "failed"
                ? "Couldn’t copy the email address."
                : ""}
          </p>
          {copyState === "failed" && (
            <p className="mt-3 text-sm text-red-700">
              Couldn’t copy the address. Select it and copy it manually.
            </p>
          )}
        </li>

        {profiles.map((profile) => (
          <li key={profile.label}>
            <a
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-400 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="flex min-w-0 items-center gap-3">
                <profile.icon
                  className="shrink-0 text-blue-700"
                  size={20}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block font-medium text-gray-900">
                    {profile.label}
                  </span>
                  <span className="block truncate text-sm text-gray-500">
                    {profile.display}
                  </span>
                </span>
              </span>
              <ArrowUpRight className="shrink-0" size={16} aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;

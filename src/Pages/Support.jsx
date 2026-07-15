import {
  Headphones,
  Truck,
  RotateCcw,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export  function SupportPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Customer Support
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              We’re here to help
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Get quick answers, resolve issues faster, and enjoy a smooth
              shopping experience with our dedicated support system.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUICK ACTIONS ================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageSquare, title: "Chat with Us" },
              { icon: Phone, title: "Call Support" },
              { icon: Mail, title: "Email Assistance" },
              { icon: HelpCircle, title: "Help Center" },
            ].map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5
                           shadow-sm transition-all duration-200
                           hover:border-blue-600 hover:shadow-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <item.icon size={22} />
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT CATEGORIES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            How can we help you?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose a category below to get quick assistance.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Truck,
                title: "Orders & Delivery",
                desc: "Track orders, delivery delays, or missing items.",
              },
              {
                icon: RotateCcw,
                title: "Returns & Refunds",
                desc: "Initiate returns and get refund status updates.",
              },
              {
                icon: ShieldCheck,
                title: "Payments & Security",
                desc: "Payment issues, refunds, and account safety.",
              },
              {
                icon: Headphones,
                title: "Account Support",
                desc: "Login issues, profile updates, and settings.",
              },
              {
                icon: HelpCircle,
                title: "FAQs & Guides",
                desc: "Find answers to common questions instantly.",
              },
              {
                icon: MessageSquare,
                title: "Raise a Ticket",
                desc: "Submit an issue for personalized support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                tabIndex={0}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm
                           transition-all duration-200
                           hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <item.icon size={24} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Fast Resolution",
                desc: "Most issues are resolved within 24 hours.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Support",
                desc: "Your data and conversations are protected.",
              },
              {
                icon: Headphones,
                title: "Human Assistance",
                desc: "Real people, not bots — when it matters.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Still need help?
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Our support team is available 24/7 to assist you.
              </p>
            </div>

            <button
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-700
                         transition-all duration-200
                         hover:bg-blue-50 focus:outline-none
                         focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

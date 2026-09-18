import HeroBanner from "../../components/HeroBanner";

const capabilities = [
  {
    title: "Feasibility and cost estimation",
    text: "Turn drawings, specifications and quantities into a clearer understanding of what it will take to manufacture an order. AI-assisted assessment helps surface feasibility questions, cost drivers and missing information before sourcing begins.",
  },
  {
    title: "Sourcing and multiple-vendor quotations",
    text: "Match requirements to manufacturing capabilities, request quotations from multiple vendors and compare price, lead time, capacity and commercial terms. Bring clarifications and revisions into the same procurement record.",
  },
  {
    title: "Order and production management",
    text: "Carry the agreed specification and quotation into the order. Coordinate approvals, production milestones and changes, with a shared view of commitments, progress and exceptions for buyers and manufacturers.",
  },
  {
    title: "Quality and acceptance",
    text: "Define quality requirements alongside the order and retain inspection records, supporting documents and acceptance decisions. Connect issues to the relevant parts and commitments so they can be resolved with context.",
  },
  {
    title: "Logistics and delivery",
    text: "Connect production readiness with dispatch, shipping documentation and delivery tracking. Keep logistics updates tied to the order so buyers and manufacturers can coordinate handoffs and respond to delays.",
  },
  {
    title: "Vendor and supplier management",
    text: "Maintain vendor capabilities, onboarding information, quotation history and performance records. Support manufacturers in coordinating their own suppliers and subcontractors as well as managing commitments to buyers.",
  },
];

export default function ACMEPlatform() {
  return (
    <div className="bg-white">
      <HeroBanner className="bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">ACME</h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
            In development with a manufacturing partner
          </p>
        </div>
      </HeroBanner>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              From manufacturing requirement to delivered order.
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-5">
              ACME is an end-to-end, AI-assisted procurement platform for custom manufacturing.
              It is designed to connect buyers, manufacturers, suppliers, logistics providers and
              financing providers across the entire order journey.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Custom manufacturing brings technical decisions and commercial commitments together.
              A change in specification can affect feasibility, price, delivery and funding.
              ACME brings these connected decisions into one platform, from the first estimate
              and competing quotations through production, shipment and payment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="capabilities-heading" className="text-3xl font-bold text-gray-900 mb-4">
            One connected procurement journey
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-10">
            Planned capabilities cover the work before, during and after an order, keeping
            requirements and decisions connected as responsibility moves between organisations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <article key={capability.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-700 leading-relaxed">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="finance-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="finance-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Finance and confidence on both sides of the order
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-10">
            Manufacturers need working capital to fulfil orders. Buyers need confidence that
            payments are supported by clear commitments and evidence of delivery.
            ACME treats both needs as part of the procurement process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="rounded-lg bg-gray-50 border-l-4 border-[#6555fb] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Order-based finance for manufacturers</h3>
              <p className="text-gray-700 leading-relaxed">
                Planned support helps manufacturers apply for loans against confirmed orders,
                bringing together purchase commitments, cost estimates and fulfilment information
                for financing providers to assess. The aim is to make funding for materials and
                production easier to coordinate with the work it supports.
              </p>
            </article>
            <article className="rounded-lg bg-gray-50 border-l-4 border-[#26bdf2] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial protections for buyers</h3>
              <p className="text-gray-700 leading-relaxed">
                Planned payment safeguards connect agreed milestones, quality acceptance and
                delivery evidence with payment decisions. Clear transaction records and dispute
                handling help buyers manage exposure, with financial protection arrangements
                defined through the applicable provider and transaction terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="ai-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 id="ai-heading" className="text-3xl font-bold text-gray-900 mb-5">
              AI assistance throughout the procurement journey
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-5">
              ACME is designed to use AI to interpret requirements, identify information gaps,
              assist estimation, compare quotations and flag issues that need attention.
              Buyers, manufacturers and financing providers retain responsibility for technical
              approvals, commercial commitments and funding decisions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              The goal is less time chasing information and reconciling disconnected records,
              with a clearer path from a manufacturing need to a completed order.
            </p>
            <a href="mailto:hello@neolumina.in?subject=ACME%20manufacturing%20procurement"
              className="inline-block rounded-lg bg-[#6555fb] px-6 py-3 font-semibold text-white hover:bg-[#5143d9] transition-colors">
              Talk to us about ACME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

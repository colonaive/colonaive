export default function Home() {
  return (
    <div className="text-center px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Project COLONAiVE™</h1>
      <p className="text-sm text-gray-600 mb-4">
        A National Movement to Outsmart Colorectal Cancer
      </p>
      <p className="text-sm text-blue-500 mb-8">
        Clinician-led. Public-powered. Nation-wide.
      </p>

      <div className="max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 p-4 mb-8 rounded-md shadow-sm">
        <p className="text-sm text-gray-800 leading-relaxed">
          <strong>Project COLONAiVE™</strong> supports the use of modern, high-sensitivity blood-based screening tools — 
          such as the <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong> — 
          to triage patients for timely colonoscopy. ColonAiQ® represents one of the validated options available today.
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Join the Movement</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Everyone has a role to play – the public, our clinicians, corporate sponsors,
        and government partners. Together, we can raise awareness, activate screening, and save lives.
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Sponsor a Campaign
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-medium py-2 px-4 rounded">
          Get Your Team Screened
        </button>
      </div>

      <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg border shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Our Four Pillars</h3>
        <ul className="text-left text-sm text-gray-800 list-disc list-inside space-y-2">
          <li><strong>RID-CRC™</strong> – Public Awareness & Early Detection Movement</li>
          <li><strong>RID-CRC SGP™</strong> – Clinician Activation & Engagement</li>
          <li><strong>RID-CRC Gov™</strong> – Institutional & Policy Adoption</li>
          <li><strong>RID-CRC CSR™</strong> – Corporate Engagement & CSR Partnerships</li>
        </ul>
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <p className="mb-1">
          Want to support Project COLONAiVE™? <br />
          Email us at <strong>admin@saversmed.com</strong>
        </p>
        <p className="text-xs mt-4 text-gray-400">
          © 2025 Project COLONAiVE™. All rights reserved.
        </p>
      </div>
    </div>
  );
}

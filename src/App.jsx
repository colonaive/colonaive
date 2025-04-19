
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="text-center py-12 px-4 bg-blue-50">
        <h1 className="text-4xl font-bold mb-2">Project COLONAiVE™</h1>
        <p className="text-lg">A National Movement to Outsmart Colorectal Cancer</p>
        <p className="mt-2 text-sm text-blue-700">Clinician-led. Public-powered. Nation-wide.</p>
      </header>

      <main className="px-6 py-10 space-y-12">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Join the Movement</h2>
          <p className="mt-2 max-w-xl mx-auto">
            Everyone has a role to play – the public, our clinicians, corporate sponsors, and government partners.
            Together, we can raise awareness, activate screening, and save lives.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sponsor a Campaign</button>
            <button className="bg-gray-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200">Get Your Team Screened</button>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">Our Four Pillars</h3>
          <ul className="space-y-4 text-sm text-left">
            <li><strong>RID-CRC™</strong> – Public Awareness & Early Detection Movement</li>
            <li><strong>RID-CRC SGP™</strong> – Clinician Activation & Engagement</li>
            <li><strong>RID-CRC Gov™</strong> – Institutional & Policy Adoption</li>
            <li><strong>RID-CRC CSR™</strong> – Corporate Engagement & CSR Partnerships</li>
          </ul>
        </section>

        <section className="text-center">
          <h4 className="text-lg font-medium mb-2">Want to support Project COLONAiVE™?</h4>
          <p>Email us at <strong>letmehelpyou@saversmed.com</strong></p>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Project COLONAiVE™. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

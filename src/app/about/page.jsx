export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ed] text-neutral-800">
      
      {/* Hero Section */}
      <section className="py-28 text-center px-4 bg-[#e6e2d9]">
        <h1 className="text-4xl font-semibold text-green-600 mb-4">
          About Hum Niwadi
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-neutral-700">
          Your trusted source for regional news, culture, and stories that matter
          to the people of Niwadi.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-semibold mb-6">
          Who We Are
        </h2>

        <div className="space-y-5 text-neutral-700 leading-relaxed">
          <p>
            Hum Niwadi is a dedicated digital news platform committed to serving
            the residents of Niwadi and surrounding regions. We believe that every
            community deserves a voice, and our mission is to provide accurate,
            timely, and meaningful coverage of the events, people, and culture
            that shape our region.
          </p>

          <p>
            Founded by a team of passionate journalists and community advocates,
            Hum Niwadi bridges the gap between local happenings and the digital
            world. We cover everything from breaking news and political
            developments to cultural festivals, agricultural updates, and
            inspiring stories of everyday heroes.
          </p>

          <p>
            Our commitment to truth and transparency drives everything we do. We
            strive to be the first source our readers turn to when they want to
            understand what’s happening in Niwadi and why it matters.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#f2efe7] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Vision */}
          <div>
            <div className="mb-4 text-green-700 text-3xl">👁️</div>
            <h3 className="text-xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              To become the most trusted and comprehensive source of regional news
              and cultural content for Niwadi, empowering every resident with the
              knowledge they need to participate fully in their community’s
              future.
            </p>
          </div>

          {/* Mission */}
          <div>
            <div className="mb-4 text-amber-700 text-3xl">🎯</div>
            <h3 className="text-xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              To deliver accurate, fair, and timely news coverage that serves the
              public interest. We are committed to investigating issues that
              affect our community, celebrating our rich cultural heritage, and
              giving voice to the people of Niwadi.
            </p>
          </div>

        </div>
      </section>

      {/* Editorial Values */}
      <section className="py-24 px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-semibold mb-3">
            Our Editorial Values
          </h2>
          <p className="text-neutral-600">
            These core principles guide every story we publish.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Accuracy */}
          <div className="border rounded-lg p-8 bg-white">
            <div className="text-green-700 text-2xl mb-4">✔️</div>
            <h4 className="text-lg font-semibold mb-3">
              Accuracy
            </h4>
            <p className="text-neutral-700">
              We verify facts rigorously before publishing. Corrections are issued
              promptly and transparently when errors occur.
            </p>
          </div>

          {/* Neutrality */}
          <div className="border rounded-lg p-8 bg-white">
            <div className="text-green-700 text-2xl mb-4">⚖️</div>
            <h4 className="text-lg font-semibold mb-3">
              Neutrality
            </h4>
            <p className="text-neutral-700">
              We present multiple perspectives without bias. Our reporting
              separates news from opinion to let readers form their own
              conclusions.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}


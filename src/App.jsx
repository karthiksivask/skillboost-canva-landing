import React, { useState } from 'react'

function App() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Is this course for complete beginners?",
      a: "Absolutely — especially if you've never opened Canva before. We start from zero and build up step by step. Most of our students had no design experience at all."
    },
    {
      q: "I'm busy. How much time does this take?",
      a: "The full course is 8-12 hours of content. Most students complete it in 2-3 weeks watching 30-45 minutes a day. And because it's self-paced, you watch whenever suits you."
    },
    {
      q: "What if I don't like it?",
      a: "We offer a full 30-day money back guarantee — no questions, no drama. If it's not for you, you get every rupee back. Simple."
    },
    {
      q: "Will I get help if I get stuck?",
      a: "Yes — you get access to our WhatsApp support group where you can ask questions any time. Email support is also available within 24 hours."
    }
  ]

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent/30 overflow-x-hidden">
      {/* Navigation - Simple & Clean */}
      <nav className="px-4 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-white">
          Canva<span className="text-brand-primary">Home</span>
        </div>
        <button className="hidden md:block bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded-lg text-sm font-semibold transition-all">
          Member Login
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 overflow-hidden">

          {/* Left Column: Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pre-headline */}
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4 animate-fade-in">
              FOR HOMEMAKERS READY TO EARN FROM HOME
            </p>

            {/* Headline */}
            <h1 className="text-[28px] md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] md:leading-[1.1] mb-6 tracking-tight">
              Learn Canva. Get Clients. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Earn ₹15-20k/Month
              </span> — From Home.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              The only Canva course that teaches you design AND <br className="hidden md:block" />
              how to find paying clients — even with zero experience.
            </p>

            {/* CTA & Trust Line */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                href="https://imjo.in/JYN6Bc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-primary hover:bg-[#7e4ae8] text-white font-bold text-lg md:text-xl px-12 py-5 rounded-xl w-full md:w-auto transition-all transform hover:scale-[1.02] shadow-xl shadow-brand-primary/20 cursor-pointer min-h-[48px]"
              >
                Start Earning From Home →
              </a>
              <p className="text-xs md:text-sm text-white/60 font-medium">
                30-day money back · 147 students · 4.9/5 rating
              </p>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-8">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-primary/20 via-brand-bg to-brand-accent/20 flex items-center justify-center overflow-hidden relative">
                {/* Abstract Glassmorphism Shapes */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="z-20 text-center p-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                    <svg className="w-8 h-8 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Design Made Simple</h3>
                  <p className="text-sm md:text-base text-white/60">Master Canva tools and client workflows in 30 days.</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl"></div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section className="bg-[#130D22] border-y border-white/5 py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-4 text-center">
            <div className="col-span-1">
              <p className="text-3xl md:text-5xl font-extrabold text-brand-primary mb-2">147+</p>
              <p className="text-xs md:text-base text-white/60 font-medium uppercase tracking-wider">Students Enrolled</p>
            </div>
            <div className="col-span-1">
              <p className="text-3xl md:text-5xl font-extrabold text-brand-primary mb-2">4.9/5</p>
              <p className="text-xs md:text-base text-white/60 font-medium uppercase tracking-wider">Star Rating</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
              <p className="text-3xl md:text-5xl font-extrabold text-brand-primary mb-2">₹15-20k</p>
              <p className="text-xs md:text-base text-white/60 font-medium uppercase tracking-wider leading-tight">Avg Student Earning <span className="block md:inline text-white/40">/month</span></p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-extrabold text-center text-white mb-12 md:mb-16 leading-tight max-w-3xl mx-auto">
            Everything You Need to Start <br />
            Earning — <span className="text-brand-primary">Nothing You Don't</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 border border-brand-primary/20 p-6 md:p-8 rounded-2xl hover:border-brand-primary/50 transition-all group hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-6">🎨</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Learn Canva From Absolute Zero</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Step-by-step video lessons designed for complete beginners. No design experience needed — ever.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-brand-primary/20 p-6 md:p-8 rounded-2xl hover:border-brand-primary/50 transition-all group hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-6">💰</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Find Clients and Start Earning Fast</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The client-finding module most Canva courses skip entirely. Get your first paid project in weeks, not months.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-brand-primary/20 p-6 md:p-8 rounded-2xl hover:border-brand-primary/50 transition-all group hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-6">🏠</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Work From Home on Your Own Schedule</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Pre-recorded lessons + PDF guides you access forever. Learn at 6am or 11pm — completely your pace.
              </p>
            </div>

            {/* Card 4 (Bonus) */}
            <div className="bg-white/5 border border-brand-primary/20 p-6 md:p-8 rounded-2xl hover:border-brand-primary/50 transition-all group hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-6 flex items-center gap-2">
                <span>🏆</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">Bonus</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Certificate on Completion</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                A verified completion certificate to show clients and build instant credibility.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white/[0.02] border-y border-white/5 py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-5xl font-extrabold text-center text-white mb-12 md:mb-16 leading-tight">
              Real Homemakers. Real Income. <br />
              <span className="text-brand-primary">Real Results.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD600]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base md:text-xl text-white/90 italic leading-relaxed mb-8">
                  "I had zero design experience. 3 weeks after finishing I got my first paid client — ₹3,500 for a logo pack. Now I make ₹18k/month from home."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold border border-brand-primary/20 text-sm md:text-base">
                    PR
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">Priya R.</h4>
                    <p className="text-white/40 text-xs md:text-sm">Homemaker · Chennai</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD600]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base md:text-xl text-white/90 italic leading-relaxed mb-8">
                  "I was skeptical at first but the client finding module changed everything. Got 2 clients in my first week of trying."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold border border-brand-primary/20 text-sm md:text-base">
                    MS
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">Meena S.</h4>
                    <p className="text-white/40 text-xs md:text-sm">Homemaker · Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA Section */}
        <section className="bg-brand-primary py-16 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Design, Get Clients <br className="hidden md:block" />
              and Earn From Home?
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join 147+ homemakers already earning with SkillBoost Canva Pro.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://imjo.in/JYN6Bc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-[#ff8555] text-white font-bold text-lg md:text-xl px-12 py-5 rounded-2xl w-full md:w-auto shadow-2xl shadow-black/20 transform transition-all hover:scale-105 cursor-pointer min-h-[48px]"
              >
                Get Instant Access — ₹1,999 →
              </a>
              <p className="text-white/70 text-xs md:text-sm font-medium">
                30-day money back guarantee · No questions asked
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 md:py-32 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-extrabold text-center text-white mb-12 md:mb-16">
            Questions? We've Got Answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="text-base md:text-xl font-bold text-white pr-4 md:pr-8">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-brand-primary transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 md:px-8 pb-6 md:pb-8 text-white/60 leading-relaxed text-sm md:text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-brand-bg"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/10"></div>

          <div className="relative max-w-4xl mx-auto text-center z-10">
            <h2 className="text-[28px] md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.2]">
              Your First Paying Design Client <br className="hidden md:block" />
              is Closer Than You Think.
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join 147+ homemakers who chose to start. This could be your week.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://imjo.in/JYN6Bc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-[#ff8555] text-white font-bold text-lg md:text-xl px-12 py-5 rounded-2xl w-full md:w-auto shadow-2xl shadow-brand-accent/20 transform transition-all hover:scale-105 cursor-pointer min-h-[48px]"
              >
                Start My Journey — ₹1,999 →
              </a>
              <p className="text-xs md:text-sm text-white/60 font-medium">
                30-day money back · Instant access · WhatsApp support included
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-white/5 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-xl font-bold tracking-tighter text-white">
              SkillBoost<span className="text-brand-primary"> Canva Pro</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white/40 font-medium lowercase">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="text-center md:text-left pt-8 border-t border-white/5">
            <p className="text-xs text-white/20">
              © 2025 SkillBoost Canva Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

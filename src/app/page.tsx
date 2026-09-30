/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Heart, Code, Stethoscope } from 'lucide-react'

export default function Home() {
  const [copiedUPI, setCopiedUPI] = useState(false)
  const [customAmount, setCustomAmount] = useState('')
  const [activeTab, setActiveTab] = useState<'upi' | 'paypal'>('upi')
  const [copiedPaypal, setCopiedPaypal] = useState(false)

  const upiId = 'bholanitin308@okicici'
  const paypalId = 'paypal.me/NitinKumar764690'

  const handleCopy = (text: string, type: 'upi' | 'paypal') => {
    navigator.clipboard.writeText(text)
    if (type === 'upi') {
      setCopiedUPI(true)
      setTimeout(() => setCopiedUPI(false), 2000)
    } else {
      setCopiedPaypal(true)
      setTimeout(() => setCopiedPaypal(false), 2000)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }

  return (
    <main className="max-w-md mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      {/* Hero / Identity */}
      <motion.section 
        className="text-center space-y-4"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.div 
          className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 glass-panel"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="https://i.ibb.co/wZD4X9QW/profile.png" 
            alt="Nitin" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Nitin&background=random'
            }}
          />
        </motion.div>
        
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Nitin</h1>
          <p className="text-white/60 font-medium text-sm tracking-wide uppercase">Solo Developer &amp; Nursing Student</p>
        </div>
        
        <p className="text-white/80 leading-relaxed text-sm md:text-base px-2">
          Building clean, useful products while pursuing a career in healthcare. Every contribution helps ship better tools and supports my education.
        </p>
      </motion.section>

      {/* About Me */}
      <motion.section 
        className="glass-panel rounded-2xl p-6 space-y-4 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Stethoscope size={64} />
        </div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Heart className="w-5 h-5 text-accent2" /> Help Me Continue
        </h2>
        <div className="space-y-3 text-sm text-white/70 relative z-10 leading-relaxed">
          <p>
            Hi, I’m Nitin, a GNM Nursing student working toward a career in healthcare.
          </p>
          <p>
            I’m raising support to help cover my college expenses, books, transportation, and study materials. Even a small contribution can make a difference and help me continue my education.
          </p>
          <p>
            Your support can help me stay in college and move closer to becoming a nurse. 🩺
          </p>
        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Support the work</h2>
          <p className="text-sm text-white/50">Choose your preferred way to support</p>
        </div>

        {/* Amount Selection */}
        <div className="glass-panel p-6 rounded-3xl space-y-6 shadow-2xl relative">
          
          <div className="flex bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('upi')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'upi' ? 'bg-white/10 text-white shadow-sm' : 'text-white/50 hover:text-white/80'}`}
            >
              UPI (India)
            </button>
            <button 
              onClick={() => setActiveTab('paypal')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'paypal' ? 'bg-white/10 text-white shadow-sm' : 'text-white/50 hover:text-white/80'}`}
            >
              PayPal (Global)
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'upi' ? (
              <motion.div 
                key="upi"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                
                {/* Suggested Amount */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setCustomAmount('29')}
                      className={`flex-1 py-3 rounded-xl border font-semibold text-sm transition-all ${customAmount === '29' || !customAmount ? 'bg-accent1/20 border-accent1/50 text-white' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}
                    >
                      ₹29 <span className="text-xs font-normal opacity-70">(Suggested)</span>
                    </button>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">₹</span>
                    <input 
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-8 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent1/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative group p-2 rounded-2xl bg-white/5 border border-white/10 mt-2">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent1 to-accent2 opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-2xl"></div>
                    <img 
                      src="https://i.ibb.co/FLrVrBbt/upi-qr.png" 
                      alt="UPI QR Code" 
                      className="w-48 h-48 rounded-xl relative z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + upiId + '&bgcolor=0A0A0B&color=ffffff'
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between w-full bg-black/40 rounded-xl p-3 border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 font-medium">UPI ID</span>
                      <span className="text-sm font-mono tracking-wide">{upiId}</span>
                    </div>
                    <button 
                      onClick={() => handleCopy(upiId, 'upi')}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                      aria-label="Copy UPI ID"
                    >
                      {copiedUPI ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                  
                  <a 
                    href={`upi://pay?pa=${upiId}&pn=Nitin&cu=INR${customAmount ? '&am=' + customAmount : ''}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    Pay {customAmount ? `₹${customAmount}` : 'via UPI'}
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="paypal"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
                    <input 
                      type="number"
                      placeholder="Custom amount (USD)"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-8 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative group p-2 rounded-2xl bg-white/5 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-2xl"></div>
                    <img 
                      src="https://i.ibb.co/V0vqLX1n/paypal-qr.png" 
                      alt="PayPal QR Code" 
                      className="w-48 h-48 rounded-xl relative z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://' + paypalId + '&bgcolor=0A0A0B&color=ffffff'
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between w-full bg-black/40 rounded-xl p-3 border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 font-medium">PayPal Link</span>
                      <span className="text-sm font-mono tracking-wide">{paypalId}</span>
                    </div>
                    <button 
                      onClick={() => handleCopy(paypalId, 'paypal')}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                      aria-label="Copy PayPal ID"
                    >
                      {copiedPaypal ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                  
                  <a 
                    href={`https://${paypalId}${customAmount ? '/' + customAmount : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    Pay {customAmount ? `$${customAmount}` : 'via PayPal'}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center pt-2">
             <p className="text-xs text-white/40">Secure &amp; Direct Transfer • 0% Platform Fee</p>
          </div>
        </div>
      </motion.section>

      {/* Why Support */}
      <motion.section 
        className="grid grid-cols-1 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {[
          { title: "Independent Building", desc: "No corporate funding. Just raw passion and long nights.", icon: <Code size={18} /> },
          { title: "Nursing Education", desc: "Helping cover essentials for my GNM studies.", icon: <Stethoscope size={18} /> },
          { title: "Focused Quality", desc: "Your support buys me time to build better things.", icon: <Heart size={18} /> }
        ].map((item, i) => (
          <div key={i} className="glass-panel p-4 rounded-xl flex items-start gap-4 hover:bg-white/[0.05] transition-colors">
            <div className="p-2 bg-white/5 rounded-lg text-accent2">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
              <p className="text-xs text-white/50">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="text-center py-6 border-t border-white/5 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-xs text-white/40">Built with care by Nitin</p>
        <p className="text-[10px] text-white/20 mt-1">Can&apos;t donate? Sharing this page helps too. 🙏</p>
      </motion.footer>
    </main>
  )
}

import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 py-48 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mb-8">
          <div className='justify-self-start'>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-slate-200" />
                <a href="https://www.google.com/maps/place/ideaSpace+West,+The+Hauser+Forum,+3+Charles+Babbage+Rd,+Cambridge+CB3+0GT/@52.209008,0.0897012,17z/data=!4m5!3m4!1s0x47d8774963902a15:0xfa0c4b40e0313172!8m2!3d52.209008!4d0.0897012" className="text-slate-200">
                  3 Charles Babbage Road,<br />
                  Ideaspace West,<br />
                  Cambridge,<br />
                  England, CB3 0GT
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-slate-200" />
                <a href="tel:+44 122 348 5090" className="text-slate-200 hover:text-slate-900 transition-colors">
                  +44 122 348 5090
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-slate-200" />
                <a href="mailto:info@krai.ai" className="text-slate-200 hover:text-slate-900 transition-colors">
                  info@krai.ai
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 flex-shrink-0 text-slate-200" />
                <a href="https://www.linkedin.com/company/krai/" className="text-slate-200 hover:text-slate-900 transition-colors">
                  Linkedin
                </a>
              </div>
            </div>
          </div>

          <div className='justify-self-center'>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-200 hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-200 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className='justify-self-end'>
            <h3 className="text-lg font-semibold mb-4">Krai</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Unlock the full potential of your AI solution
            </p>
          </div>
        </div>

        <div className="w-full border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-200">
              © {currentYear} Krai. All rights reserved.
            </p>
          </div>
        </div>
        <div className="h-24 w-full"></div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-[#0F172A] to-[#1A1F35] border-t-2 border-[#3B82F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-4">Let's Work Together</h2>
        <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together!
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {[
          { icon: <Mail size={32} />, title: 'Email', value: 'gondaliyabhavya70960@gmail.com', href: 'mailto:gondaliyabhavya70960@gmail.com' },
          { icon: <Phone size={32} />, title: 'Phone', value: '+91 70960 36250', href: 'tel:+917096036250' },
          { icon: <MapPin size={32} />, title: 'Location', value: 'Surat, Gujarat, India', href: null },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#3B82F6]/5 border border-[#334155] p-8 rounded-xl flex flex-col items-center text-center hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] transition-all duration-300"
          >
            <div className="text-[#3B82F6] mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-2">{item.title}</h3>
            {item.href ? (
              <a href={item.href} className="text-[#3B82F6] hover:underline font-medium">
                {item.value}
              </a>
            ) : (
              <span className="text-[#CBD5E1] font-medium">{item.value}</span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-[#3B82F6]/5 border border-[#334155] p-8 md:p-12 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8 text-center">Send Me a Message</h3>
        
        {isSuccess ? (
          <div className="bg-[#10B981]/10 border border-[#10B981] text-[#10B981] p-4 rounded-lg text-center mb-6">
            Message sent successfully! I'll get back to you soon.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#CBD5E1]">Full Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-[#3B82F6]/5 border border-[#334155] rounded-lg px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all placeholder:text-[#64748B]"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#CBD5E1]">Email Address</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-[#3B82F6]/5 border border-[#334155] rounded-lg px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all placeholder:text-[#64748B]"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#CBD5E1]">Message</label>
            <textarea
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-[#3B82F6]/5 border border-[#334155] rounded-lg px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all resize-none placeholder:text-[#64748B]"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </Section>
  );
};

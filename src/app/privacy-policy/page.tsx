
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground/80 font-body">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Introduction</h2>
          <p>
            Welcome to Makeover by Yashi. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@makeoverbyyashi.com.
          </p>
          <p>
            When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites and our services.
          </p>

          <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: name, phone number, email address, mailing address, and other similar information.
          </p>

          <h2 className="font-headline text-2xl text-primary mt-6 mb-3">How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6">
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials.</li>
            <li>Request feedback.</li>
            <li>To enable user-to-user communications.</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To respond to legal requests and prevent harm.</li>
          </ul>

          <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at privacy@makeoverbyyashi.com or by post to:
          </p>
          <p>
            Makeover by Yashi<br />
            123 Beauty Avenue<br />
            Glamour City, ST 12345<br />
            United States
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <div className="container py-16">
            <div className="mx-auto mb-16 max-w-2xl text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
                <p className="text-lg text-muted-foreground">
                    Have questions about our products or need a custom quote? We're here to help.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-foreground">Get in Touch</h3>
                        <p className="mb-2 text-muted-foreground">
                            Email: <a href="mailto:hello@lumina.com" className="font-medium text-primary hover:underline">hello@lumina.com</a>
                        </p>
                        <p className="text-muted-foreground">
                            Phone: +1 (555) 123-4567
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-foreground">Office</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            123 Business Avenue<br />
                            Suite 400<br />
                            New York, NY 10001<br />
                            USA
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-foreground">Hours</h3>
                        <p className="text-muted-foreground">
                            Monday - Friday: 9am - 6pm EST
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

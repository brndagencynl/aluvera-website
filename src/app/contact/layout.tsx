import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Aluvera in Helmond. Vraag een offerte aan, plan een showroom bezoek of stel uw vraag.",
  openGraph: {
    title: "Contact | Aluvera",
    description: "Neem contact op met Aluvera in Helmond.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

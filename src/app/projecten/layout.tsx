import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projecten",
  description: "Bekijk onze gerealiseerde veranda's en overkappingen in Helmond en omstreken. Filter op type, kleur en daksoort.",
  openGraph: {
    title: "Projecten | Aluvera",
    description: "Bekijk onze gerealiseerde veranda's en overkappingen.",
  },
};

export default function ProjectenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export const metadata = {
  title: "Admin | ReHome",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <div className="min-h-screen bg-gray-50 text-gray-900">{children}</div>;
}

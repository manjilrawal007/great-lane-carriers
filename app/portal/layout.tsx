export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-portal-shell className="portal-layout">
      {children}
    </div>
  );
}

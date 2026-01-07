"use client";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bg">
      <div className="flex-grow p-4 md:p-6 overflow-x-auto mt-4">
        {children}
      </div>
    </div>
  );
}

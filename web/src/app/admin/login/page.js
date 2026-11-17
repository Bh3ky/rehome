import Image from "next/image";
import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";
import logo from "../../../../public/Logo/logo.png";

function LoginCard({ linkExpired = false }) {
  return (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-8 shadow-xs">
        <Image src={logo} alt="" width={32} height={32} />
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-gray-900">
          Sign in
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          We&apos;ll email you a sign-in link.
        </p>
        {linkExpired && (
          <p role="alert" className="mt-4 text-sm text-red-700">
            That link has expired or was already used. Ask for a new one.
          </p>
        )}
        <LoginForm />
      </div>
    </div>
  );
}

async function LoginContent({ searchParams }) {
  const { error } = await searchParams;
  return <LoginCard linkExpired={error === "link"} />;
}

export default function LoginPage({ searchParams }) {
  return (
    <Suspense fallback={<LoginCard />}>
      <LoginContent searchParams={searchParams} />
    </Suspense>
  );
}

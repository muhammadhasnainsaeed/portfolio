"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

function getRouteLabel(pathname: string) {
  if (pathname === "/") return "Home";

  const segment = pathname.split("/").filter(Boolean)[0] ?? "";
  if (!segment) return "Page";

  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function RouteAnnouncer() {
  const pathname = usePathname();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Loaded ${getRouteLabel(pathname)} page`);
  }, [pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}

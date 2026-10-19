import type { ComponentPropsWithoutRef } from "react";

// Shared React components live here. Import from "@portfolio/ui" in apps/web.
export function Button({ type = "button", ...props }: ComponentPropsWithoutRef<"button">) {
  return <button type={type} {...props} />;
}

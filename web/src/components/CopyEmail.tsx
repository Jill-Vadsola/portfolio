"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-4 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50"
    >
      {copied ? (
        <>
          <Check size={16} className="text-accent" aria-hidden />
          Copied
        </>
      ) : (
        <>
          <Copy size={16} aria-hidden />
          Copy
        </>
      )}
    </button>
  );
}

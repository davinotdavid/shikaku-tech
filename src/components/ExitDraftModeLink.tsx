"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "./ExitDraftModeLink.module.css";

export default function ExitDraftModeLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <a
      href={`/api/disable-draft?redirect=${pathname}`}
      className={styles.bannerLink}
    >
      {children}
    </a>
  );
}

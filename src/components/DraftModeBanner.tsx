import { draftMode } from "next/headers";
import ExitDraftModeLink from "@/components/ExitDraftModeLink";
import styles from "./DraftModeBanner.module.css";

export default function DraftModeBanner() {
  return (
    <>
      {draftMode().isEnabled && (
        <p className={styles.banner}>
          You are currently in Draft Mode!{" "}
          <ExitDraftModeLink>Exit</ExitDraftModeLink>
        </p>
      )}
    </>
  );
}

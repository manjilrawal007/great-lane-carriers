import fs from "fs";
import path from "path";

import { siteVideos } from "@/lib/media";

/** True when the homepage hero MP4 exists in /public at build/runtime. */
export function heroVideoFileExists(): boolean {
  try {
    const relative = siteVideos.hero.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", relative));
  } catch {
    return false;
  }
}

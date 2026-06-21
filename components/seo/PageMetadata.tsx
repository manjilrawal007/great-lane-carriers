import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return buildPageMetadata({ title, description, path });
}

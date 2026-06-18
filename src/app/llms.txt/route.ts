import { buildContext, toLlmsTxt } from "@/lib/context";

export const revalidate = 3600;

export async function GET() {
  const ctx = await buildContext();
  return new Response(toLlmsTxt(ctx), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

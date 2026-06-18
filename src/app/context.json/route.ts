import { buildContext } from "@/lib/context";

export const revalidate = 3600;

export async function GET() {
  const ctx = await buildContext();
  return new Response(JSON.stringify(ctx, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

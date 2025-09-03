// src/app/api/health/route.ts
export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

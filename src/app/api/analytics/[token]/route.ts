export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const apiBaseUrl = process.env.ANALYTICS_API_URL;

  if (!apiBaseUrl) {
    return Response.json(
      { message: "ANALYTICS_API_URL is not configured." },
      { status: 500 },
    );
  }

  const upstream = await fetch(
    `${apiBaseUrl.replace(/\/+$/, "")}/api/reports/${encodeURIComponent(token)}`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    },
  );
  const body = await upstream.text();

  return new Response(body, {
    status: upstream.status,
    headers: {
      "Content-Type":
        upstream.headers.get("content-type") ?? "application/json",
    },
  });
}

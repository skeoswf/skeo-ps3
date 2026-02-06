export const runtime = "nodejs";

import { WebServiceClient } from "@maxmind/geoip2-node";

export async function GET(request) {
  const accountId = process.env.GEOIP_ACCOUNT_ID;
  const licenseKey = process.env.GEOIP_API_KEY;

  const client = new WebServiceClient(accountId, licenseKey, {
    host: "geolite.info",
  });

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();

  const lookupIp = ip && ip !== "127.0.0.1" && ip !== "::1"
    ? ip
    : "170.141.168.10";

  const geo = await client.city(lookupIp);

  return Response.json({
    ip: lookupIp,
    city: geo.city?.names?.en ?? null,
    region: geo.subdivisions?.[0]?.names?.en ?? null,
    country: geo.country?.isoCode ?? null,
    lat: geo.location?.latitude ?? null,
    lon: geo.location?.longitude ?? null,
    accuracyRadius: geo.location?.accuracyRadius ?? null,
  });
}

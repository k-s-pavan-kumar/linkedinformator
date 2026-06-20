import { NextResponse } from "next/server";

// Base install counts (realistic starting points)
const BASE = {
  chrome:  18420,
  firefox: 4310,
  edge:    3870,
  safari:  2190,
  brave:   1640,
};

// Simulate live growth: deterministic based on time so SSR + client match
function getLiveCounts() {
  const now = Date.now();
  // Slow drift: ~50-200 installs/day per browser, jittered by minute
  const minutesSinceEpoch = Math.floor(now / 60000);
  
  return {
    chrome:  BASE.chrome  + Math.floor((minutesSinceEpoch * 0.087) % 800),
    firefox: BASE.firefox + Math.floor((minutesSinceEpoch * 0.021) % 200),
    edge:    BASE.edge    + Math.floor((minutesSinceEpoch * 0.019) % 180),
    safari:  BASE.safari  + Math.floor((minutesSinceEpoch * 0.011) % 120),
    brave:   BASE.brave   + Math.floor((minutesSinceEpoch * 0.009) % 90),
  };
}

export async function GET() {
  const counts = getLiveCounts();
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  
  return NextResponse.json({
    counts,
    total,
    updatedAt: new Date().toISOString(),
  }, {
    headers: {
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}

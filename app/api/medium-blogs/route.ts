import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Invalid data structure received from RSS feed");
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Error fetching Medium blogs:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: "Failed to fetch blogs", details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Failed to fetch blogs", details: "Unknown error" }, { status: 500 });
    }
  }
}
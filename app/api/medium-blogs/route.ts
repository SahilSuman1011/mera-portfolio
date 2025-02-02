import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sahilsuman1202",
      {
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
        next: { revalidate: 0 },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Invalid data structure received from RSS feed")
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, must-revalidate",
        Pragma: "no-cache",
      },
    })
  } catch (error) {
    console.error("Error fetching Medium blogs:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: "Failed to fetch blogs", details: errorMessage }, { status: 500 })
  }
}


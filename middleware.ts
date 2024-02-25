import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const week = parseInt(pathname.split("/")[2]);
  const token = pathname.split("/")[3];

  if (week === 1 && token === process.env.WEEK_1_TOKEN) {
    return NextResponse.next();
  } else if (week === 2 && token === process.env.WEEK_2_TOKEN) {
    return NextResponse.next();
  } else if (week === 3 && token === process.env.WEEK_3_TOKEN) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`${req.nextUrl.origin}/404`);
}

export const config = {
  matcher: "/week/:path*",
};

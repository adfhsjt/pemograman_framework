import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const hanyaAdmin = ["/admin"];
const hanyaEditor = ["/editor"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith("/api/auth")) {
      return middleware(req, next);
    }
    // console.log("PATH:", pathname);
    const isProtected = requireAuth.some((path) => pathname.startsWith(path));

    const isAdminRoute = hanyaAdmin.some((path) => pathname.startsWith(path));

    const isEditorRoute = hanyaEditor.some((path) => pathname.startsWith(path));

    if (isProtected) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        const loginUrl = new URL("/auth/login", req.url);
        loginUrl.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(loginUrl);
      }
      if (isAdminRoute && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
      if (isEditorRoute && !["admin", "editor"].includes(token.role as string)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  };
}

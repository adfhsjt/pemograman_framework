import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

const baseMiddleware = (req: NextRequest) => {
  return NextResponse.next();
};

export default withAuth(baseMiddleware, [
  "/produk",
  "/about",
  "/lapar",
  "/profil",
  "/admin",
]);

export const config = {
  matcher: [
    "/produk",
    "/about",
    "/lapar",
    "/profil",
    "/admin/",  
  ],
};
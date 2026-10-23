import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

export const verifyLogin = cache(async function () {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) redirect("/login");

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode("7vK+W8sPZ1Yx4NmF2Q6uT9x0kL5pM3vR9eB8wQ2j1o0="),
    );
    return { loggedIn: true, adminId: payload.id };
  } catch {
    redirect("/");
  }
});

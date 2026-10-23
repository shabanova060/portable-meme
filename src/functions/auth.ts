"use server";
import { LoginFormState, LoginFormSchema } from "~/lib/definitions";
import { safeParse, flatten } from "valibot";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { database } from "~/database/connection";
import { eq } from "drizzle-orm";
import { admins } from "~/database/schema";
import { redirect } from "next/navigation";

export async function login(
  _state: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  await new Promise((r) => setTimeout(r, 2000));

  const validatedFields = safeParse(LoginFormSchema, {
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: flatten<typeof LoginFormSchema>(validatedFields.issues).nested,
    };
  }

  const [admin] = await database
    .select({
      id: admins.id,
      email: admins.email,
      passwordHash: admins.passwordHash,
    })
    .from(admins)
    .where(eq(admins.email, validatedFields.output.email))
    .limit(1);

  console.log(`Admin query result: ${admin}`);

  if (!admin) {
    return {
      errors: {
        email: ["E-mail address and password doesn't match"],
        password: ["E-mail address and password doesn't match"],
      },
    };
  }

  if (
    !Bun.password.verify(validatedFields.output.password, admin.passwordHash)
  ) {
    return {
      errors: {
        email: ["E-mail address and password doesn't match"],
        password: ["E-mail address and password doesn't match"],
      },
    };
  }

  const token = await new SignJWT({
    id: admin.id,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(
      new TextEncoder().encode("7vK+W8sPZ1Yx4NmF2Q6uT9x0kL5pM3vR9eB8wQ2j1o0="),
    );

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    sameSite: "lax",
    path: "/",
  });

  redirect("/profile");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/login");
}

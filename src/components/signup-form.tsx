"use client";

import Form from "next/form";
import { login } from "~/functions/auth";
import { useActionState } from "react";

export function SignupForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <Form className="login-form" action={action}>
      <div className="form-control">
        <label className="form-label" htmlFor="email">
          E-mail address
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail address"
          aria-invalid={state?.errors?.email && "true"}
        />
        {state?.errors?.email && (
          <p className="form-error" role="alert">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className="form-control">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          aria-invalid={state?.errors?.password && "true"}
        />
        {state?.errors?.password && (
          <p className="form-error" role="alert">
            {state.errors.password[0]}
          </p>
        )}
      </div>
      <button
        className="button"
        type="submit"
        aria-disabled={pending}
        tabIndex={pending ? -1 : 0}
        onClick={(e) => {
          if (pending) e.preventDefault();
        }}
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </Form>
  );
}

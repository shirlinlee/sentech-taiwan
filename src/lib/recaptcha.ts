export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured.");
    return false;
  }

  if (!token) {
    return false;
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    },
  );

  const data = (await response.json()) as {
    success: boolean;
    "error-codes"?: string[];
  };

  if (!data.success) {
    console.error("reCAPTCHA verification failed:", data["error-codes"]);
  }

  return data.success;
}
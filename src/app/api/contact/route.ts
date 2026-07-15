import { NextResponse } from "next/server";
import { createElement } from "react";
import { resend } from "@/lib/resend";
import ContactEmail from "@/email/ContactEmail";
import { verifyRecaptcha } from "@/lib/recaptcha";

type ContactPayload = {
  category?: string;
  subject?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agree?: boolean;
  recaptchaToken?: string;
};

const categoryLabelMap: Record<string, string> = {
  product: "產品",
  service: "服務",
};


function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const category = body.category?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const recaptchaToken = body.recaptchaToken ?? "";

    if (!category || !subject || !name || !email || !phone || !message || !recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "請完整填寫所有必填欄位" },
        { status: 400 },
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);

    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA 驗證失敗，請重新驗證。",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "請輸入有效的電子郵件" },
        { status: 400 },
      );
    }

    if (!/^\d+$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "電話僅限數字" },
        { status: 400 },
      );
    }

    const receiver = process.env.CONTACT_RECEIVER;
    const from =
      process.env.CONTACT_FROM ?? "SENTECH <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY || !receiver) {
      console.error("Missing RESEND_API_KEY or CONTACT_RECEIVER");
      return NextResponse.json(
        { success: false, error: "郵件服務尚未設定完成" },
        { status: 500 },
      );
    }

    const categoryLabel = categoryLabelMap[category] ?? category;

    const { error } = await resend.emails.send({
        from,
        to: receiver,
        replyTo: email,
        subject: `[諮詢申請][${categoryLabel}] ${subject}`,
        react: createElement(ContactEmail, {
            category: categoryLabel,
            subject,
            name,
            email,
            phone,
            message,
        }),
      });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "郵件寄送失敗，請稍後再試" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "系統發生錯誤，請稍後再試" },
      { status: 500 },
    );
  }
}

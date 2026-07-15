"use client";

import { useState, type FormEvent } from "react";
import Swal from "sweetalert2";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { RequestCategory, RequestPageData } from "@/types/support";
import { cn } from "@/utils/cn";

import styles from "./RequestPage.module.scss";

type RequestFormValues = {
  category: RequestCategory | "";
  subject: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  agreed: boolean;
};

type RequestFormErrors = Partial<Record<keyof RequestFormValues, string>>;

const initialValues: RequestFormValues = {
  category: "product",
  subject: "主旨測試",
  name: "王小明",
  email: "abc123@gmail.com",
  phone: "0912345678",
  message: "訊息測試",
  agreed: true,
};

type RequestPageProps = {
  data: RequestPageData;
};

export function RequestPage({ data }: RequestPageProps) {
  const { breadcrumb, title, categoryOptions, labels, privacy, successMessage } =
    data;
  const [values, setValues] = useState<RequestFormValues>(initialValues);
  const [errors, setErrors] = useState<RequestFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof RequestFormValues>(
    field: K,
    value: RequestFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = (formValues: RequestFormValues): RequestFormErrors => {
    const nextErrors: RequestFormErrors = {};

    if (!formValues.category) {
      nextErrors.category = "請選擇分類";
    }
    if (!formValues.subject.trim()) {
      nextErrors.subject = "請輸入主旨";
    }
    if (!formValues.name.trim()) {
      nextErrors.name = "請輸入姓名";
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "請輸入電子郵件";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = "請輸入有效的電子郵件";
    }
    if (!formValues.phone.trim()) {
      nextErrors.phone = "請輸入電話";
    } else if (!/^\d+$/.test(formValues.phone.trim())) {
      nextErrors.phone = "電話僅限數字";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "請輸入訊息";
    }
    if (!formValues.agreed) {
      nextErrors.agreed = "請同意隱私政策";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: values.category,
          subject: values.subject.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        await Swal.fire({
          icon: "error",
          title: "送出失敗",
          text: result.error ?? "請稍後再試",
          confirmButtonText: "確定",
          confirmButtonColor: "#e85d04",
        });
        return;
      }

      setValues(initialValues);
      await Swal.fire({
        icon: "success",
        title: "送出成功",
        text: successMessage,
        confirmButtonText: "確定",
        confirmButtonColor: "#e85d04",
      });
    } catch {
      await Swal.fire({
        icon: "error",
        title: "網路異常",
        text: "請稍後再試",
        confirmButtonText: "確定",
        confirmButtonColor: "#e85d04",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setValues(initialValues);
    setErrors({});
  };

  return (
    <article className={styles.article}>
      <Container>
        <Breadcrumb items={breadcrumb} />

        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} id="request-category-label">
              {labels.category}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <div
                className={styles.categoryOptions}
                role="radiogroup"
                aria-labelledby="request-category-label"
              >
                {categoryOptions.map((option) => (
                  <label key={option.value} className={styles.categoryOption}>
                    <input
                      type="radio"
                      name="category"
                      value={option.value}
                      checked={values.category === option.value}
                      onChange={() => updateField("category", option.value)}
                      disabled={isSubmitting}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.category ? (
                <p className={styles.error}>{errors.category}</p>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="request-subject">
              {labels.subject}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <input
                id="request-subject"
                className={styles.input}
                type="text"
                value={values.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                aria-invalid={Boolean(errors.subject)}
                disabled={isSubmitting}
              />
              {errors.subject ? (
                <p className={styles.error}>{errors.subject}</p>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="request-name">
              {labels.name}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <input
                id="request-name"
                className={cn(styles.input, styles.inputNarrow)}
                type="text"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                disabled={isSubmitting}
              />
              {errors.name ? <p className={styles.error}>{errors.name}</p> : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="request-email">
              {labels.email}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <input
                id="request-email"
                className={styles.input}
                type="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                disabled={isSubmitting}
              />
              {errors.email ? (
                <p className={styles.error}>{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="request-phone">
              {labels.phone}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <input
                id="request-phone"
                className={styles.input}
                type="tel"
                inputMode="numeric"
                placeholder={labels.phonePlaceholder}
                value={values.phone}
                onChange={(event) =>
                  updateField(
                    "phone",
                    event.target.value.replace(/[^\d]/g, ""),
                  )
                }
                aria-invalid={Boolean(errors.phone)}
                disabled={isSubmitting}
              />
              {errors.phone ? (
                <p className={styles.error}>{errors.phone}</p>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="request-message">
              {labels.message}
              <span className={styles.required} aria-hidden="true">
                {labels.requiredMark}
              </span>
            </label>
            <div className={styles.fieldControl}>
              <textarea
                id="request-message"
                className={styles.textarea}
                rows={8}
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                disabled={isSubmitting}
              />
              {errors.message ? (
                <p className={styles.error}>{errors.message}</p>
              ) : null}
            </div>
          </div>

          <section className={styles.privacy} aria-labelledby="privacy-title">
            <h2 id="privacy-title" className={styles.privacyTitle}>
              {privacy.title}
            </h2>

            <div className={styles.privacyBox}>
              <h3 className={styles.privacyHeading}>{privacy.heading}</h3>
              <p>{privacy.intro}</p>
              <ul>
                {privacy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className={styles.privacyHeading}>{privacy.transferTitle}</h3>
              {privacy.transferParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3 className={styles.privacyHeading}>{privacy.rightsTitle}</h3>
              <p>{privacy.rightsIntro}</p>
              <ul>
                {privacy.rights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p>{privacy.rightsNote}</p>
            </div>

            <label className={styles.agree}>
              <input
                type="checkbox"
                checked={values.agreed}
                onChange={(event) =>
                  updateField("agreed", event.target.checked)
                }
                disabled={isSubmitting}
              />
              <span>{labels.agreeLabel}</span>
            </label>
            {errors.agreed ? (
              <p className={styles.error}>{errors.agreed}</p>
            ) : null}
          </section>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "送出中…" : labels.submit}
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              {labels.cancel}
            </button>
          </div>
        </form>
      </Container>
    </article>
  );
}

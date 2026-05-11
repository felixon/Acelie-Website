import type { FormEvent } from 'react';

const suspiciousPattern = /(<\s*script|javascript:|data:text\/html|on\w+\s*=|<\s*iframe|<\s*object|<\s*embed)/i;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function secureFormSubmit(event: FormEvent<HTMLFormElement>, successMessage: string) {
  event.preventDefault();

  const form = event.currentTarget;
  const fields = Array.from(form.querySelectorAll('input, textarea, select')) as Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');

  if (honeypot?.value) {
    form.reset();
    return;
  }

  for (const field of fields) {
    field.setCustomValidity('');
    const value = field.value.trim();

    if (field.required && value.length === 0) {
      field.setCustomValidity('This field is required.');
      field.reportValidity();
      return;
    }

    if (field.type === 'email' && value && !emailPattern.test(value)) {
      field.setCustomValidity('Enter a valid email address.');
      field.reportValidity();
      return;
    }

    const minLength = field instanceof HTMLSelectElement ? -1 : field.minLength;
    const maxLength = field instanceof HTMLSelectElement ? -1 : field.maxLength;

    if (minLength > 0 && value.length > 0 && value.length < minLength) {
      field.setCustomValidity(`Use at least ${minLength} characters.`);
      field.reportValidity();
      return;
    }

    if (maxLength > 0 && value.length > maxLength) {
      field.setCustomValidity(`Use no more than ${maxLength} characters.`);
      field.reportValidity();
      return;
    }

    if ('pattern' in field && field.pattern && value && !new RegExp(`^(?:${field.pattern})$`).test(value)) {
      field.setCustomValidity('Use only valid characters for this field.');
      field.reportValidity();
      return;
    }

    if (value && suspiciousPattern.test(value)) {
      field.setCustomValidity('Remove unsafe code or links from this field.');
      field.reportValidity();
      return;
    }
  }

  alert(successMessage);
  form.reset();
}

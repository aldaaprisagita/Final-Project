export function validateContact({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Nama wajib diisi.";
  if (!email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Format email belum valid.";
  }
  if (!message.trim()) errors.message = "Pesan wajib diisi.";
  else if (message.trim().length < 10) errors.message = "Pesan minimal 10 karakter.";
  return errors;
}
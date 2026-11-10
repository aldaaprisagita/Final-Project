import { describe, expect, it } from "vitest";
import { validateContact } from "./contactValidation.js";

describe("validateContact", () => {
  it("returns errors when all fields are empty", () => {
    expect(validateContact({ name: "", email: "", message: "" })).toEqual({
      name: "Nama wajib diisi.",
      email: "Email wajib diisi.",
      message: "Pesan wajib diisi.",
    });
  });

  it("accepts valid contact details", () => {
    expect(validateContact({
      name: "Alya",
      email: "alya@example.com",
      message: "Halo, saya ingin bertanya.",
    })).toEqual({});
  });

  it("rejects an invalid email and a short message", () => {
    const errors = validateContact({
      name: "Alya",
      email: "alya-email",
      message: "Hai",
    });
    expect(errors.email).toBe("Format email belum valid.");
    expect(errors.message).toBe("Pesan minimal 10 karakter.");
  });
});
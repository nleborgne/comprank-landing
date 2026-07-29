import { z } from "zod";

export const PROFILE_OPTIONS = [
  { value: "coach", label: "Coach" },
  { value: "box-owner", label: "Propriétaire de box" },
  { value: "other", label: "Autre" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "3-months", label: "Horizon 3 mois" },
  { value: "6-12-months", label: "Horizon 6-12 mois" },
  { value: "considering", label: "J'y réfléchis" },
  { value: "no", label: "Non" },
] as const;

export const LEAD_MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  website: 200,
} as const;

export const leadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Le prénom est requis.")
    .max(
      LEAD_MAX_LENGTHS.firstName,
      `Le prénom ne doit pas dépasser ${LEAD_MAX_LENGTHS.firstName} caractères.`,
    ),
  lastName: z
    .string()
    .trim()
    .min(1, "Le nom est requis.")
    .max(
      LEAD_MAX_LENGTHS.lastName,
      `Le nom ne doit pas dépasser ${LEAD_MAX_LENGTHS.lastName} caractères.`,
    ),
  email: z
    .string()
    .trim()
    .email("L'adresse email n'est pas valide.")
    .max(
      LEAD_MAX_LENGTHS.email,
      `L'adresse email ne doit pas dépasser ${LEAD_MAX_LENGTHS.email} caractères.`,
    ),
  phone: z
    .string()
    .trim()
    .max(
      LEAD_MAX_LENGTHS.phone,
      `Le numéro de téléphone ne doit pas dépasser ${LEAD_MAX_LENGTHS.phone} caractères.`,
    )
    .optional(),
  profile: z.enum(["coach", "box-owner", "other"], {
    errorMap: () => ({ message: "Sélectionnez votre profil." }),
  }),
  timeline: z.enum(["3-months", "6-12-months", "considering", "no"], {
    errorMap: () => ({ message: "Indiquez où vous en êtes." }),
  }),
  website: z.string().max(LEAD_MAX_LENGTHS.website).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

// Shared by the server action (skip the email) and the client (skip the Lead
// pixel event) so both stay in sync on what counts as a bot submission.
export function isHoneypotFilled(website: LeadInput["website"]): boolean {
  return Boolean(website);
}

export function getProfileLabel(value: LeadInput["profile"]): string {
  return PROFILE_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function getTimelineLabel(value: LeadInput["timeline"]): string {
  return (
    TIMELINE_OPTIONS.find((option) => option.value === value)?.label ?? value
  );
}

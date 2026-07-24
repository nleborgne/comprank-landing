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

export const leadSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis."),
  lastName: z.string().trim().min(1, "Le nom est requis."),
  email: z.string().trim().email("L'adresse email n'est pas valide."),
  phone: z.string().trim().optional(),
  profile: z.enum(["coach", "box-owner", "other"], {
    errorMap: () => ({ message: "Sélectionnez votre profil." }),
  }),
  timeline: z.enum(["3-months", "6-12-months", "considering", "no"], {
    errorMap: () => ({ message: "Indiquez où vous en êtes." }),
  }),
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export function getProfileLabel(value: LeadInput["profile"]): string {
  return PROFILE_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function getTimelineLabel(value: LeadInput["timeline"]): string {
  return (
    TIMELINE_OPTIONS.find((option) => option.value === value)?.label ?? value
  );
}

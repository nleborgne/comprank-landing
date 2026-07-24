"use server";

import { Resend } from "resend";
import { actionClient } from "@/lib/safe-action";
import {
  getProfileLabel,
  getTimelineLabel,
  leadSchema,
} from "@/lib/lead-schema";

const FROM = "CompRank <contact@transactional.comprank.fr>";
const TO = "contact@comprank.fr";

export const sendLead = actionClient
  .schema(leadSchema)
  .action(async ({ parsedInput }) => {
    const { firstName, lastName, email, phone, profile, timeline, website } =
      parsedInput;

    if (website) {
      return { success: true };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const profileLabel = getProfileLabel(profile);
    const timelineLabel = getTimelineLabel(timeline);

    const text = [
      `Prénom : ${firstName}`,
      `Nom : ${lastName}`,
      `Email : ${email}`,
      `Téléphone : ${phone?.trim() ? phone.trim() : "Non renseigné"}`,
      `Profil : ${profileLabel}`,
      `Organise une compétition : ${timelineLabel}`,
    ].join("\n");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Nouveau lead : ${firstName} ${lastName} (${profileLabel})`,
      text,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  });

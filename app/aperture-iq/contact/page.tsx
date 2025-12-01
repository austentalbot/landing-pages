import { redirect } from "next/navigation";

export default function ContactRoutePage() {
  redirect("/aperture-iq?contact=1");
}

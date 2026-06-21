function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#0B1F3A;border-bottom:1px solid #F4F5F7;">${label}</td><td style="padding:8px 12px;color:#3D4349;border-bottom:1px solid #F4F5F7;">${value}</td></tr>`;
}

function wrap(title: string, rows: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0B1F3A;padding:24px;color:#fff;">
        <h1 style="margin:0;font-size:20px;">Great Lane Carriers</h1>
        <p style="margin:4px 0 0;color:#D4920A;font-size:14px;">${title}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;">
        ${rows}
      </table>
      <p style="padding:16px;font-size:12px;color:#3D4349;">Submitted via greatlanecarriers.com</p>
    </div>
  `;
}

export function applyEmailTemplate(data: Record<string, unknown>) {
  const rows = [
    row("Name", `${data.firstName} ${data.lastName}`),
    row("Phone", String(data.phone)),
    row("Email", String(data.email)),
    row("CDL Class", String(data.cdlClass)),
    row("CDL State", String(data.cdlState)),
    row("CDL Expiration", String(data.cdlExpiration)),
    row("Experience", String(data.yearsExperience)),
    row("Endorsements", (data.endorsements as string[])?.join(", ") || "None"),
    row("Preferred Lanes", String(data.preferredLanes || "—")),
    row("Current Status", String(data.currentStatus)),
    row("Message", String(data.message || "—")),
  ].join("");

  return wrap("New Driver Application", rows);
}

export function callbackEmailTemplate(data: Record<string, unknown>) {
  const rows = [
    row("Name", String(data.name)),
    row("Company", String(data.company || "—")),
    row("Phone", String(data.phone)),
    row("Email", String(data.email || "—")),
    row("Reason", String(data.reason)),
    row("Preferred Time", String(data.preferredTime || "Anytime")),
    row("Message", String(data.message || "—")),
  ].join("");

  return wrap("Callback Request", rows);
}

export function quoteEmailTemplate(data: Record<string, unknown>) {
  const rows = [
    row("Contact", String(data.contactName)),
    row("Company", String(data.company)),
    row("Email", String(data.email)),
    row("Phone", String(data.phone)),
    row("Origin", `${data.originCity}, ${data.originState}`),
    row("Destination", `${data.destinationCity}, ${data.destinationState}`),
    row("Pickup Date", String(data.pickupDate || "—")),
    row("Equipment", String(data.equipmentType)),
    row("Weight", String(data.weight || "—")),
    row("Frequency", String(data.frequency || "—")),
    row("Notes", String(data.notes || "—")),
  ].join("");

  return wrap("Freight Quote Request", rows);
}

export function contactEmailTemplate(data: Record<string, unknown>) {
  const rows = [
    row("Name", String(data.name)),
    row("Email", String(data.email)),
    row("Phone", String(data.phone || "—")),
    row("Department", String(data.department)),
    row("Subject", String(data.subject)),
    row("Message", String(data.message)),
  ].join("");

  return wrap("Contact Form Submission", rows);
}

export function portalNotifyEmailTemplate(data: Record<string, unknown>) {
  const rows = [
    row("Email", String(data.email)),
    row("Phone", String(data.phone || "—")),
    row("Driver ID", String(data.driverId || "—")),
  ].join("");

  return wrap("Portal Launch Notification Signup", rows);
}

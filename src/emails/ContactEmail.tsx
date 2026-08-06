import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Button,
  Preview,
} from "@react-email/components";
import { backIn } from "motion/react";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={accentBar} />

          <Section style={header}>
            <Text style={eyebrow}>New inquiry</Text>
            <Heading style={heading}>Portfolio contact message</Heading>
            <Text style={subheading}>
              You received a message through the contact form.
            </Text>
          </Section>

          <Section style={card}>
            <Section style={grid}>
              <Section style={field}>
                <Text style={label}>Name</Text>
                <Text style={value}>{name}</Text>
              </Section>

              <Section style={field}>
                <Text style={label}>Email</Text>
                <Text style={value}>{email}</Text>
              </Section>

              <Section style={field}>
                <Text style={label}>Phone</Text>
                <Text style={value}>{phone || "N/A"}</Text>
              </Section>

              <Section style={field}>
                <Text style={label}>Subject</Text>
                <Text style={value}>{subject}</Text>
              </Section>
            </Section>

            <Hr style={divider} />

            <Section style={messageWrap}>
              <Text style={label}>Message</Text>
              <Text style={messageBox}>{message}</Text>
            </Section>

            <Section style={buttonWrap}>
              <Button href={`mailto:${email}`} style={button}>
                Reply to {name?.split(" ")[0]}
              </Button>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const main = {
  margin: 0,
  padding: "32px 0",
  background: "#00F3AE",
  // background:
  //   "linear-gradient(0deg, rgba(0, 243, 174, 0) 0%, rgba(0, 243, 174, 1) 100%)",
  fontFamily,
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
  padding: "0 16px",
};

const accentBar = {
  height: "6px",
  borderRadius: "999px",
  backgroundImage:
    "linear-gradient(90deg, rgba(59,130,246,0.95) 0%, rgba(99,102,241,0.95) 50%, rgba(14,165,233,0.95) 100%)",
  marginBottom: "18px",
};

const header = {
  padding: "0 4px 18px",
};

const eyebrow = {
  margin: 0,
  color: "#2563eb",
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
};

const heading = {
  margin: "10px 0 8px",
  color: "#0f172a",
  fontSize: "28px",
  lineHeight: "34px",
  fontWeight: 700,
  fontFamily,
};

const subheading = {
  margin: 0,
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "22px",
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
};

const grid = {
  display: "block",
};

const field = {
  marginBottom: "14px",
};

const label = {
  margin: "0 0 4px",
  color: "#64748b",
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  textTransform: "uppercase" as const,
};

const value = {
  margin: 0,
  color: "#0f172a",
  fontSize: "14px",
  lineHeight: "22px",
  fontWeight: 600,
  fontFamily,
};

const divider = {
  borderColor: "#e2e8f0",
  margin: "20px 0",
};

const messageWrap = {
  marginBottom: "18px",
};

const messageBox = {
  margin: 0,
  padding: "16px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  color: "#0f172a",
  fontSize: "14px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  fontFamily,
};

const buttonWrap = {
  marginTop: "6px",
};

const button = {
  backgroundColor: "#00f3ae",
  color: "#0a0a0a",
  borderRadius: "6px",
  padding: "8px 16px",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 500,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
};

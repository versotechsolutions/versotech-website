/** Contact form topics, shared by the form (client) and the API route (server validation). */
export const CONTACT_TOPICS = [
  'General question',
  'Product suggestion',
  'Correction or error report',
  'Brand or partnership enquiry',
  'Privacy request',
] as const

export type ContactTopic = (typeof CONTACT_TOPICS)[number]

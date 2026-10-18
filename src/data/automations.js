import contentRepurposing from "../assets/automation/content-repurposing.jpg";
import leadToDeal from "../assets/automation/lead-to-deal.jpg";
import adLocalizer from "../assets/automation/ad-localizer.jpg";
import seoBrief from "../assets/automation/seo-brief.jpg";
import competitorMonitor from "../assets/automation/competitor-monitor.jpg";

/**
 * AI Automation case studies — one entry per Make.com scenario.
 * `slug` is the URL: /automation/<slug>. Cards in portfolio.js link here
 * through their `route` field, so keep the two in sync.
 */
export const automations = {
  "lead-to-deal": {
    title: "AI Lead-to-Deal Pipeline",
    sub: "HubSpot CRM",
    img: leadToDeal,
    imgAlt: "Make.com scenario: webhook, three AI steps, variables, then HubSpot contact, deal and task",
    lead: "Every inbound lead is scored, logged in HubSpot as a contact and a deal in the right pipeline stage, and given a follow-up task with a ready-to-send email — seconds after the form is submitted.",
    stack: ["Make.com", "Make AI Toolkit", "HubSpot CRM", "Webhooks"],
    problem: "Agencies lose leads in the gap between a form fill and the first reply. Someone has to read each enquiry, judge whether it is serious, create the CRM records and write a reply, so hot leads wait as long as cold ones.",
    trigger: "A website form posts the lead to a Make webhook: name, email, company, website, service, budget, timeline and message.",
    steps: [
      "A filter rejects submissions without a valid email.",
      "Make AI scores the lead Hot, Warm or Cold against written rules: budget, timeline and buying intent.",
      "A second AI step writes a two-line summary and the best next step for the salesperson.",
      "A third AI step drafts a personal follow-up email that references the lead's own message.",
      "HubSpot: create or update the contact, matched on email so there are no duplicates, with lifecycle stage set by score.",
      "HubSpot: create a deal named by score, company and service, placed in the matching pipeline stage.",
      "HubSpot: create a follow-up task linked to both contact and deal, holding the summary and the email draft.",
    ],
    table: {
      head: ["Score", "Rule", "Deal stage", "Task due"],
      rows: [
        ["Hot", "~10,000 NOK/month+ and starting within 30 days, or asks for a proposal", "Qualified To Buy", "2 hours"],
        ["Warm", "Real business, lower or unclear budget, or a 1–3 month timeline", "Appointment Scheduled", "2 days"],
        ["Cold", "No budget, vague interest, student or spam", "Appointment Scheduled", "5 days"],
      ],
    },
    result: "Three test leads — a clinic, a bakery and a student — were each scored and routed correctly, with a linked contact, deal and task in HubSpot. Testing exposed a timezone bug that showed task due dates as overdue; sending the due date as an explicit UTC timestamp fixed it. The same logic maps one-to-one to a GoHighLevel workflow.",
    skills: ["CRM data modelling", "Lead scoring", "Conditional routing", "Prompt design", "Webhook integration", "API debugging"],
  },

  "content-repurposing": {
    title: "AI Content Repurposing Engine",
    sub: "RSS → 4 channels",
    img: contentRepurposing,
    imgAlt: "Make.com scenario: RSS trigger, five AI steps, Google Sheets row",
    lead: "Each new article in an industry RSS feed becomes four platform-ready drafts — LinkedIn, Instagram, X and newsletter — queued in a content calendar for review.",
    stack: ["Make.com", "Make AI Toolkit", "RSS", "Google Sheets"],
    problem: "One good article could feed a week of social content, but rewriting it for each channel's format and length is slow, repetitive work for a marketer.",
    trigger: "A daily check of an RSS feed (tested with Search Engine Land) picks up the next new article.",
    steps: [
      "The RSS module reads the article title, link and summary.",
      "Five separate AI steps write a topic label, a LinkedIn post (hook, three takeaways, question, link), an Instagram caption (tip, save prompt, hashtags), a 4–5 post X thread and a newsletter blurb.",
      "Google Sheets adds one row per article with all drafts and a Draft / Approved / Posted status dropdown.",
    ],
    result: "Each run turns one article into four channel-specific drafts in under a minute. The first version asked the AI for all four outputs in one JSON reply; the smaller model kept breaking the format, so I split it into one prompt per channel, which made it reliable. Prompts also forbid invented statistics and first-person claims about someone else's research.",
    skills: ["Platform-native copywriting", "Prompt engineering", "Designing around model limits", "RSS & scheduling", "Review workflows"],
  },

  "seo-brief": {
    title: "AI SEO Content Brief Generator",
    sub: "Keyword → Google Doc",
    img: seoBrief,
    imgAlt: "Make.com scenario: Google Sheets trigger, AI step, Google Docs, Google Sheets update",
    lead: "A keyword typed into a sheet becomes a complete, formatted SEO brief in Google Docs, with the link written back to the sheet.",
    stack: ["Make.com", "Make AI Toolkit", "Google Sheets", "Google Docs"],
    problem: "Writers produce better-ranking content when they start from a brief, but writing one — intent, outline, keywords, FAQs, meta — takes an SEO specialist's time for every article.",
    trigger: "A new row in the SEO Brief Generator sheet: a keyword plus optional audience notes.",
    steps: [
      "Google Sheets watches for new rows; a filter skips rows already marked Done.",
      "Make AI writes the brief as clean HTML in nine fixed sections: search intent, audience, three title options and a meta description, related keywords, an H2 outline, People Also Ask questions, content requirements, link ideas and a writer checklist.",
      "Google Docs creates a formatted document named after the keyword.",
      "The sheet row is updated with Status = Done, the Doc link and a timestamp.",
    ],
    result: "Tested with \"best crm for small business\": the run produced a 9-section brief with a 9-part article outline, ready to hand to a writer. The prompt bans invented search volumes and statistics.",
    skills: ["SEO & search intent", "Content briefing", "AI-generated documents", "Sheet-driven queues"],
  },

  "ad-localizer": {
    title: "AI Ad Copy Localizer",
    sub: "English → Norwegian",
    img: adLocalizer,
    imgAlt: "Make.com scenario: Google Sheets trigger, six AI steps, Google Sheets update",
    lead: "English ad copy becomes three natural Norwegian (Bokmål) variants per line, each checked against Google Ads and Meta character limits and rewritten automatically if it runs long.",
    stack: ["Make.com", "Make AI Toolkit", "Google Sheets"],
    problem: "Agencies running ads in Norway need copy that sounds native, not translated — and that fits hard limits: 30 characters for a Google Ads headline, 90 for a description, 125 for Meta primary text.",
    trigger: "A new row in the localizer sheet: English copy, ad type (Headline, Description or Primary Text) and brand notes.",
    steps: [
      "Google Sheets watches for new rows; finished rows are skipped.",
      "Three AI steps each write one Norwegian variant from a different angle — benefit-led, urgency-led and question-led — using the informal \"du\" form.",
      "Make measures each variant's exact length and passes that number to a second AI step, which keeps the line if it fits or rewrites it shorter if it doesn't.",
      "The sheet row gets the three variants, a character count against the limit for each, and Status = Done.",
    ],
    result: "On the first test, 3 of 6 variants broke the limit (37/30, 31/30 and 108/90) — small models can't count characters reliably. Feeding the measured length back into a correction step fixed it on the re-test.",
    skills: ["Localisation for Norway", "Google Ads & Meta ad specs", "Validation loops", "Multi-variant copy testing"],
  },

  "competitor-monitor": {
    title: "AI Competitor Website Monitor",
    sub: "Daily change detection",
    img: competitorMonitor,
    imgAlt: "Make.com scenario: Sheets, HTTP, HTML to text, router to an AI change route and a snapshot route",
    lead: "Every day the monitor checks a watchlist of competitor pages, detects changes, and logs the meaningful ones — prices, offers, positioning — with a category and a recommended response.",
    stack: ["Make.com", "Make AI Toolkit", "HTTP", "Google Sheets"],
    problem: "Competitor price and offer changes matter for ad strategy and client advice, but nobody has time to check pricing pages by hand every week.",
    trigger: "A daily schedule reads the Competitor Watchlist sheet (tested with the Mailchimp, Semrush and Hootsuite pricing pages).",
    steps: [
      "Google Sheets returns every watched URL.",
      "An HTTP request fetches each page; only real https links with a 200 response continue.",
      "The HTML is converted to text and fingerprinted with an MD5 hash.",
      "A router splits the flow. Change route: if the fingerprint changed, AI compares old and new versions, ignores noise (cookie banners, dates, rotating testimonials), then classifies the change and explains why it matters — logged to the Change Log.",
      "Snapshot route: always saves the new fingerprint, snapshot and check time as the next run's baseline.",
    ],
    result: "The first run captured baselines for all three pages; from then on only real changes trigger AI and logging. Getting there meant fixing four issues: a legacy HTTP module, raw binary page data, the sheet's header row being fetched as a URL, and missing module settings. Next step: store a larger, cleaned slice of each page so pricing tables further down are compared.",
    skills: ["Competitive intelligence", "Web scraping", "Change detection (hashing)", "Routers & filters", "AI noise filtering"],
  },
};

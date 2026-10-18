import contentRepurposing from "../assets/automation/content-repurposing.jpg";
import leadToDeal from "../assets/automation/lead-to-deal.jpg";
import adLocalizer from "../assets/automation/ad-localizer.jpg";
import seoBrief from "../assets/automation/seo-brief.jpg";
import competitorMonitor from "../assets/automation/competitor-monitor.jpg";
import weeklyAdReport from "../assets/automation/weekly-ad-report.jpg";
import adAnomalyAlert from "../assets/automation/ad-anomaly-alert.jpg";
import staleDealAlert from "../assets/automation/stale-deal-alert.jpg";
import staleDealPipeline from "../assets/automation/stale-deal-pipeline.jpg";
import meetingNotesCrm from "../assets/automation/meeting-notes-crm.jpg";
import utmBuilder from "../assets/automation/utm-builder.jpg";

/**
 * AI Automation case studies — one entry per Make.com scenario.
 * `slug` is the URL: /automation/<slug>. Cards in portfolio.js link here
 * through their `route` field, so keep the two in sync.
 */
export const automations = {
  "utm-builder": {
    title: "AI UTM Link Builder",
    sub: "Clean tracking links",
    img: utmBuilder,
    imgAlt: "Make.com scenario: Google Sheets trigger, variables, two AI steps, variables, Google Sheets update",
    lead: "Campaign details typed any way people like — \"FB ads\", \"Mailchimp\", \"Høst Kampanje!\" — become tracking links that follow one naming plan, so GA4 reports stay clean.",
    stack: ["Make.com", "Make AI Toolkit", "Google Sheets", "GA4 / UTM"],
    problem: "When every marketer builds UTM links by hand, the same channel shows up in GA4 as \"Facebook\", \"fb\" and \"facebook-ads\", and campaign names arrive with spaces, capitals and Norwegian letters. Reports split, and nobody trusts the channel numbers.",
    trigger: "A new row in the UTM Builder sheet: landing page, campaign name, source, medium, and optionally the ad name and keyword.",
    steps: [
      "Make cleans the campaign and ad names: lowercase, æ/ø/å to ae/o/a, punctuation removed, spaces to hyphens.",
      "Make checks that the landing page starts with https://.",
      "AI maps the typed source to the naming plan (google, facebook, instagram, linkedin, tiktok, youtube, newsletter, bing) — or answers UNKNOWN if nothing fits.",
      "AI maps the typed medium the same way (cpc, paid_social, email, organic_social, display, video, referral).",
      "Make builds the link: it adds to an existing ? query with &, includes utm_content and utm_term only when filled, and URL-encodes the keyword.",
      "The row gets the clean UTM values, the tracked URL and Status = Ready — or Needs review with the reason, and no link.",
    ],
    table: {
      head: ["Typed in", "Mapped to", "Campaign value"],
      rows: [
        ["FB ads / paid", "facebook / paid_social", "host-kampanje-2026-3-mnd-gratis"],
        ["Google / CPC (+ keyword)", "google / cpc", "black-friday"],
        ["Mailchimp / e-mail", "newsletter / email", "newsletter-oct"],
      ],
    },
    result: "All three test campaigns came out as valid, consistent links, including one whose landing page already had ?ref=home. In an earlier test a row with an unknown source and no https was correctly refused instead of producing a bad link. The split of work is deliberate: AI only translates human input onto a fixed list, and everything that must be exact — cleaning, validation, link building — is plain Make logic. My first version used regex patterns Make wouldn't run, so I replaced them with step-by-step text replacements.",
    skills: ["Tracking & attribution (UTM, GA4)", "Naming conventions", "Data validation", "AI as a classifier", "Text processing in Make"],
  },

  "meeting-notes-crm": {
    title: "AI Meeting Notes to CRM",
    sub: "Call notes → HubSpot",
    img: meetingNotesCrm,
    imgAlt: "Make.com scenario: Google Sheets trigger, HubSpot deal search, four AI steps, HubSpot note, deal update and task, Google Sheets update",
    lead: "Paste rough sales-call notes into a sheet and the CRM updates itself: a clean summary logged on the deal, the deal moved to the right stage, our next steps set, and a follow-up email drafted in a task.",
    stack: ["Make.com", "Make AI Toolkit", "HubSpot CRM", "HubSpot API", "Google Sheets"],
    problem: "After a sales call the notes live in someone's notebook or head. Updating the CRM — summary, stage, next step, follow-up email — is the part everyone skips, so pipelines go stale and follow-ups slip.",
    trigger: "A new row in the Meeting Notes Inbox sheet: company, contact and the raw notes, written however they came out on the call.",
    steps: [
      "Make finds the matching deal in HubSpot through the search API.",
      "AI step 1 turns the notes into a clean summary: where the deal stands, the client's needs and decisions, and their concerns.",
      "AI step 2 lists only the agency's own next steps, with deadlines when the notes give one.",
      "AI step 3 picks the deal stage by working through ordered rules — signed, then lost or postponed, then contract sent, and so on.",
      "AI step 4 drafts the follow-up email: recap, next steps and dates, a direct answer to the client's main concern.",
      "HubSpot: the summary is logged as a note on the deal, the deal moves to the new stage with its next step set, and a follow-up task holds the email draft.",
      "The sheet row is marked Done with the summary, stage and a link to the deal.",
    ],
    table: {
      head: ["Test call", "What happened", "Stage set", "Our next steps"],
      rows: [
        ["Fjord Dental", "Likes the plan, wants a lower 12k/mo start; revised proposal due Tue 20 Oct", "Presentation Scheduled", "Send revised proposal by 20 Oct; prepare a sample report; book a 15-min call"],
        ["Bakeriet Grünerløkka", "Pausing all marketing until March; \"reach out in Feb\"", "Closed Lost (can be reopened)", "Send the free content calendar; reconnect in February"],
      ],
    },
    result: "Both test calls were logged correctly, but only after three rounds of testing. On the first run the paused bakery was put in Contract Sent, so I rewrote the stage prompt as rules checked in order, with \"paused or postponed 3+ months\" before \"contract sent\". The action items mixed up who does what, so the prompt now asks only for the agency's own to-dos and includes a worked example. HubSpot's Make modules also stored note and task times as midnight; an extra API step now sets the exact time. The follow-up emails stay gracious and never repeat a client's money worries or name competitors.",
    skills: ["CRM hygiene", "Sales process & deal stages", "Prompt design with ordered rules", "Few-shot prompting", "HubSpot API", "Testing & iteration"],
  },

  "stale-deal-alert": {
    title: "AI Stale Deal Alert",
    sub: "HubSpot CRM pipeline hygiene",
    img: staleDealAlert,
    imgAlt: "Make.com scenario: HubSpot deal search, iterator, variables, two AI steps, HubSpot task, text aggregator, email",
    lead: "Every weekday morning the alert finds open deals that have gone quiet, explains the risk, drafts a follow-up email and puts a task for each one in HubSpot — then sends one digest of who to chase today.",
    stack: ["Make.com", "Make AI Toolkit", "HubSpot CRM", "HubSpot API", "Email"],
    extraImg: staleDealPipeline,
    extraImgAlt: "HubSpot deal board: overdue test deals each show a follow-up task due in 4 hours",
    extraCaption: "The HubSpot pipeline after a run: each stale deal now carries a follow-up task",
    problem: "Deals rarely die with a \"no\" — they go quiet. A proposal waits for a partner's review, a contract sits unsigned after a holiday, and nobody notices until the forecast is wrong. Agencies need the stalled deals surfaced daily, with the follow-up already started.",
    trigger: "A weekday schedule at 07:50 Oslo time, before the sales day starts.",
    steps: [
      "A HubSpot API search finds open deals in the sales pipeline that are past their expected close date, or have had no updates for 14+ days (two OR-ed filter groups, oldest first).",
      "An iterator handles each deal; Make calculates days past the close date and turns stage IDs into readable names.",
      "One AI step writes the risk and the single next step for today, using only the deal's notes and stage.",
      "A second AI step drafts a short, friendly follow-up email tied to the deal's situation — no fake urgency, no discounts.",
      "HubSpot: a follow-up task is created and linked to the deal, holding the analysis and the email draft; deals more than 14 days overdue get High priority.",
      "All deals are combined into one digest email with a link to each task.",
    ],
    table: {
      head: ["Test deal", "Stage", "Close date", "Result"],
      rows: [
        ["Tindefjell Outdoor – SEO + Content", "Decision Maker Bought-In", "30 Sep", "Flagged · High priority"],
        ["Fjord Dental – Google Ads", "Presentation Scheduled", "2 Oct", "Flagged · High priority"],
        ["Bakeriet Grünerløkka – Meta Ads", "Contract Sent", "9 Oct", "Flagged · Medium priority"],
        ["Nordlys Fitness – Paid Social", "Qualified to Buy", "20 Nov", "Not stale · skipped"],
      ],
    },
    result: "Tested on four sample deals for fictional Oslo businesses: the three overdue deals each got a linked HubSpot task with a risk note and email draft, the healthy deal was correctly skipped, and one digest email listed all three. The built-in HubSpot search module couldn't combine \"overdue\" OR \"inactive\" in one query, so I called the HubSpot search API directly with two filter groups. Checking the pipeline afterwards showed the new tasks as already overdue: HubSpot was reading the due time as midnight. Sending it as an explicit UTC timestamp fixed it, and I applied the same fix to the Lead-to-Deal pipeline. The same flow maps to GoHighLevel opportunities.",
    skills: ["CRM pipeline management", "HubSpot API (search filters)", "Iterators & aggregators", "Sales follow-up copy", "Daily digest alerting"],
  },

  "weekly-ad-report": {
    title: "AI Weekly Ad Performance Report",
    sub: "Google Ads + Meta → Google Doc",
    img: weeklyAdReport,
    imgAlt: "Make.com scenario: two Google Sheets reads, text aggregator, two AI steps, Google Docs, Google Sheets log",
    lead: "Every Monday morning a client-ready paid ads report appears in Google Drive: a headline, a KPI table for Google Ads and Meta Ads, an executive summary, what changed and three recommendations for next week.",
    stack: ["Make.com", "Make AI Toolkit", "Google Sheets", "Google Docs"],
    problem: "Weekly client reporting eats hours at an agency: export numbers from each ad platform, compare with last week, then write the story and next steps. It is repetitive, but the writing still has to be accurate and client-friendly.",
    trigger: "A weekly schedule, Monday 09:00 Oslo time. Daily campaign data (spend, clicks, conversions, revenue) lives in a Google Sheet — tested with 14 days of sample data for a fictional Oslo gym chain across 2 Google Ads and 2 Meta Ads campaigns.",
    steps: [
      "Google Sheets formulas split the data into this week and last week and calculate spend, conversions, CPA, ROAS and week-over-week change for the total, each platform and each campaign.",
      "Make reads the summary and builds the KPI table, adding +/− signs and an Improving / Worsening label per segment.",
      "One AI step writes the executive summary, a plain-English line per campaign and exactly three recommendations — using only numbers from the table.",
      "A second AI step writes a one-sentence headline from the totals.",
      "Google Docs creates the report, named by client and week.",
      "A log sheet gets one row per week with the key totals, the headline and the report link.",
    ],
    table: {
      head: ["Campaign", "CPA (vs last week)", "ROAS", "What the report said"],
      rows: [
        ["Search - Membership", "182 NOK (−28.6%)", "3.64", "Scale: strongest improvement"],
        ["Performance Max", "195 NOK (−21.1%)", "2.88", "Improving"],
        ["Prospecting - Video", "712 NOK (+9.7%)", "0.82", "Biggest concern: rework creative or pause"],
        ["Retargeting", "98 NOK (−19%)", "6.71", "Shift budget here"],
      ],
    },
    result: "The report found the right story: conversions up 31.9% at a 20.6% lower CPA, with Prospecting - Video as the one campaign losing money. The first run had two AI mistakes — it wrote spend as −4.6% when it had risen, and called a falling CPA a \"concern\". The fix was to never let the AI do maths or read raw signs: Sheets calculates everything, and Make passes labelled data (up/down, Improving/Worsening). The second run was accurate. In production the sheet is fed by the Google Ads and Meta Ads APIs instead of sample data.",
    skills: ["Paid media reporting", "KPI analysis (CPA, ROAS)", "Google Ads & Meta Ads", "Guardrails against AI number errors", "Automated client deliverables"],
  },

  "ad-anomaly-alert": {
    title: "AI Ad Spend Anomaly Alert",
    sub: "Daily budget watchdog",
    img: adAnomalyAlert,
    imgAlt: "Make.com scenario: Google Sheets, AI step, Google Sheets log, text aggregator, email",
    lead: "A daily check that compares every campaign with its own 7-day average and emails the account manager when spend spikes, spend collapses or conversions stop — with likely causes and what to check first.",
    stack: ["Make.com", "Make AI Toolkit", "Google Sheets", "Email"],
    problem: "A broken pixel, a disapproved ad or a runaway budget can burn a client's money for days before anyone opens the ad account. Agencies need to catch problems the morning they start, not at the weekly report.",
    trigger: "A daily schedule, 07:55 Oslo time, before the working day starts.",
    steps: [
      "Google Sheets compares each campaign's latest day with its average for the previous 7 days.",
      "Rules label each campaign: Spend spike (more than 50% above average), Spend drop (more than 50% below), Zero conversions (none, when it normally gets 1.5+ a day) or OK.",
      "A filter passes only the campaigns that are not OK.",
      "AI writes a short note per issue: what happened, the two most likely causes on that platform and three things to check in the ad interface.",
      "Each issue is logged to an alert history sheet.",
      "One email collects all issues of the day — sent only when there is at least one.",
    ],
    table: {
      head: ["Campaign", "Detected", "Numbers", "First check suggested"],
      rows: [
        ["Performance Max", "Spend spike", "2,710 vs 1,084 NOK avg (+150%)", "Recent budget / bid changes"],
        ["Prospecting - Video", "Zero conversions", "0 vs 1.9 avg, 1,320 NOK spent", "Pixel and events in Events Manager"],
        ["Retargeting", "Spend drop", "135 vs 492 NOK avg (−73%)", "Delivery status and audience size"],
        ["Search - Membership", "OK", "1,590 vs 1,610 NOK avg", "No alert"],
      ],
    },
    result: "On the test day the monitor caught all three planted problems and correctly ignored the healthy Search campaign, sending one combined alert email. The detection itself is plain spreadsheet rules, so it is predictable and easy to tune per client; the AI only explains and suggests checks, which is where it adds speed.",
    skills: ["Paid media monitoring", "Anomaly detection rules", "Pacing & tracking QA", "Filters & aggregation", "Alerting workflows"],
  },

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

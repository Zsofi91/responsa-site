/* Responsa — language toggle.
   Hungarian lives in the HTML itself, so the page reads correctly with JS off and
   search engines index the real, Hungarian-first content. English is applied over
   it from here.

   Strings are inserted with innerHTML because a few of them carry inline markup
   (<strong>, <code>, <a>, <small>). That is safe here and only here: every string
   below is authored in this file. Never feed user input through this. */

const SOURCE_LANG = "hu";

const STRINGS = {
  en: {
    "skip": "Skip to content",
    "nav.cta": "Get started",

    /* ---------- hero ---------- */
    "hero.h1a": "More reviews — and a reply to every one, ",
    "hero.h1b": "in your voice",
    "hero.sub": "We help more of your guests leave reviews — QR on the table, link on the bill — and we write the reply to every new one. Nothing goes out until you say so.",
    "hero.cta": "Get started",
    "hero.mini": "No password. No owner access. Setup takes two clicks.",
    "hero.phone": "No new system to log into — everything arrives on your phone.",
    "chip.new": "New review",
    "chip.ok": "Reply approved",

    /* ---------- how it works ---------- */
    "how.eyebrow": "How it works",
    "how.h2": "Four steps up front, then it runs itself.",
    "how.s1.h": "Add us as a manager",
    "how.s1.p": "Two clicks in your Google Business Profile. Manager access is all it takes to reply — we never ask for your password or owner rights.",
    "how.s1.link": "See the guide",
    "how.s2.h": "A guest scans your QR code or link",
    "how.s2.p": "One tap and they're on your Google review page — at the table, on the bill, by the door. No app, no signup.",
    "how.s3.h": "We write the reply in your voice",
    "how.s3.p": "We read your past replies and your menu or service list, then write a reply to every new review — the way you'd word it.",
    "how.s4.h": "You approve every reply",
    "how.s4.p": "We show you every reply first. One tap and it's live on Google. Nothing publishes without you.",

    /* ---------- grow your reviews ---------- */
    "grow.eyebrow": "Grow your reviews",
    "grow.h2": "Grow your reviews — the safe way.",
    "grow.lede": "You get a QR card for the table and a short link for the bill, the receipt, or your email signature. One tap takes your guest to your Google review page — restaurant, salon, or clinic alike. No app, no signup.",
    "grow.comp.h": "We never cherry-pick.",
    "grow.comp.p": " Some tools hide unhappy guests' reviews from Google (“review gating”). That breaks Google's policy and can wipe out months of reviews or get your profile suspended. Responsa never sorts guests — everyone gets the same link, and negative feedback comes straight to you, separately. We never gamble with your profile.",
    "grow.why": "Review count is one of the strongest local-ranking factors — and 38% of diners won't consider a place rated under 4★.",
    "grow.src": "BrightLocal, local consumer research",

    /* ---------- why it matters ---------- */
    "why.eyebrow": "Why it matters",
    "why.h2": "Replying isn't just manners — it brings customers.",
    "why.lede": "People read what you wrote back to someone else before they decide where to eat. Google reads it too.",
    "why.st1": "of people expect a business to respond to their review.",
    "why.src1": "BrightLocal, 1,141 US consumers, 2024",
    "why.st2": "say they're likely to use a business that answers all of its reviews.",
    "why.src2": "BrightLocal, 1,002 US consumers, 2026",
    "why.st3": "expect to hear back within a week of leaving a review.",
    "why.st4": "only look at reviews from the last month — so a steady stream of new ones matters.",
    "why.src4": "BrightLocal, 1,002 US consumers, 2026",
    "why.callout1": "Google counts your reviews when it decides how prominent your business is — and says plainly that",
    "why.callout2": " “positive reviews and helpful replies can help your business stand out.”",
    "why.callout3": " A reply that names the actual dish someone ordered is how you prove you read it.",
    "why.calloutsrc": "Google Business Profile Help",

    /* ---------- social proof (illustrations) ---------- */
    "proof.eyebrow": "Example",
    "proof.h2": "See the kind of reply we write.",
    "proof.note": "Illustrative examples based on real reviews — not customer testimonials.",
    "proof.p1.loc": "Szeged · restaurant",
    "proof.p1.review": "“The food was great, really good quality ingredients. The staff is very nice. They're pet friendly. Our dog had a lovely time, he even got some turkey ham ❤️ I highly recommend this place.”",
    "proof.p1.who": "Cristina P. · June 2026",
    "proof.replylabel": "Reply written by Responsa",
    "proof.p1.reply": "Dear Cristina! 😊 Thank you for the kind words! We are so happy your dog had a great time too, pets are always welcome here. Next visit try our limited summer Bagel Burger with a cold smoothie! See you soon! ❤️🐕🥯",
    "proof.p2.loc": "Szeged · restaurant",
    "proof.p2.review": "“best pasta place in town &lt;3 the guys that work there are really nice and polite as well thank you”",
    "proof.p2.who": "Taya V. · June 2026",
    "proof.p2.reply": "Dear Taya! 😊 Thank you so much, best pasta place in town is a title we will guard proudly! The guys were really happy about the kind words. Next time try the Shrimp Pasta, it is something special! See you soon! 🍝✨",

    /* ---------- testimonials ---------- */
    "testi.eyebrow": "Testimonials",
    "testi.h2": "What our customers say.",
    "testi.soon": "We'll publish our first real customer testimonials here soon — with name, place, and concrete numbers. (For example: “our response rate went from 12% to 100% in 60 days.”)",

    /* ---------- Instagram add-on (coming soon) ---------- */
    "addon.eyebrow": "Coming soon",
    "addon.h2": "Not just reviews — your Instagram too.",
    "addon.lede": "An add-on we're building: posts and stories made from your own photos, and you still approve every single one. It's not live yet — join the waitlist and we'll tell you when it is.",
    "addon.s1.h": "Your photos, your posts",
    "addon.s1.p": "Posts and stories are built from your own photos — never stock images. It looks like your place because it is your place.",
    "addon.s2.h": "You approve everything",
    "addon.s2.p": "Every post comes to you in chat, on your phone. One tap approves it — nothing goes out until you say so.",
    "addon.s3.h": "Ask anytime",
    "addon.s3.p": "Need something tonight? Write “tonight, buy-one-get-one beer” and a ready-to-post draft comes back for your approval.",
    "addon.chip1": "Post ready",
    "addon.chip2": "Approved",
    "addon.cta": "Join the waitlist",

    /* ---------- pricing ---------- */
    "price.eyebrow": "Pricing",
    "price.h2": "Clear pricing, no surprises.",
    "price.lede": "One price, per location — everything included, QR review collection and all.",
    "price.amount": "12,900 <small>Ft/mo</small>",
    "price.perloc": "per location",
    "price.f1": "A reply to every review, in your voice",
    "price.f2": "QR code and short link to collect reviews",
    "price.f3": "A separate channel for negative feedback",
    "price.f4": "You approve every reply",
    "price.f5": "Everything arrives on your phone",
    "price.cta": "Start free trial",
    "price.foot": "14 days free, no card.",
    "price.add.badge": "Coming soon",
    "price.add.h": "Instagram add-on",
    "price.add.f1": "Posts and stories made from your own photos",
    "price.add.f2": "Approve in chat, on your phone",
    "price.add.f3": "Ask for an extra post anytime",
    "price.add.cta": "Notify me",
    "price.multi": "More than one location?",
    "price.multilink": "Ask us for a price.",

    /* ---------- form ---------- */
    "form.eyebrow": "Get started",
    "form.h2": "Let's look at your profile.",
    "form.lede": "We'll write your first few replies before you pay anything. If you don't like them, that's the end of it. Interested in the Instagram add-on? Join the waitlist too — we'll let you know when it launches.",
    "form.placeholder": "Tally form embeds here — waiting on the form ID.",
    "form.mailtonote": "The form is still being built — in the meantime, just email us:",
    "form.mailtocta": "Email us: hello@responsa.hu",

    /* ---------- footer ---------- */
    "footer.copy": "© 2026 Responsa · Szeged, Hungary",
    "footer.guide": "Setup guide",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.impressum": "Impressum",
    "footer.contact": "Contact",

    /* ---------- guide ---------- */
    "guide.back": "← Back to home",
    "guide.h1": "Adding Responsa to your Google profile",
    "guide.lede": "Two minutes, no password, nothing installed. You give us manager access, and you can take it away again at any moment.",

    "guide.pre.h": "First: is your profile claimed?",
    "guide.pre.p1": "Plenty of businesses show up on Google Maps without anyone having claimed the listing. Google created it, but nobody controls it — which means nobody can reply to reviews, including us. Check before you do anything else.",
    "guide.pre.s1.h": "Search for your business on Google Maps",
    "guide.pre.s1.p": "Use the business name and your city, the way a customer would.",
    "guide.pre.s2.h": "Look for “Claim this business”",
    "guide.pre.s2.p": "If you see that link, the profile is unclaimed. Select it, then “Manage now”, and follow Google's verification steps. Verification can take a few days, so start it now.",
    "guide.pre.s3.h": "If you don't see it, you're set",
    "guide.pre.s3.p": "No claim link means the profile already belongs to someone. If that someone is you, carry on below.",
    "guide.pre.warn.h": "Someone else claimed it?",
    "guide.pre.warn.p": " It happens — a former manager, an agency, a previous owner. Google has a request-ownership process for exactly this, and it's slow but it works. Tell us and we'll walk you through it.",

    "guide.add.h": "Then: add us as a manager",
    "guide.add.p1": "Do this from a computer if you can — the menus are easier to find than in the mobile app.",
    "guide.add.s1.h": "Open your Business Profile",
    "guide.add.s1.p": "Search your business name while signed in to the Google account that owns it, or go to your profile in Google Maps.",
    "guide.add.s2.h": "Go to More → Business Profile settings → People and access",
    "guide.add.s2.p": "Those are Google's exact menu labels.",
    "guide.shot": "Screenshot to be added",
    "guide.add.s3.h": "Select “Add” at the top left",
    "guide.add.s3.p": "A panel opens asking for an email address.",
    "guide.add.s4.h": "Enter the Responsa email address",
    "guide.add.s4.p": "We send you the exact address when you sign up — it's in your welcome email, so copy it from there rather than typing it.",
    "guide.add.s5.h": "Under “Access”, choose “Manager”",
    "guide.add.s5.p": "Manager, not Owner. Manager is all we need, and it keeps you in full control of the profile.",
    "guide.add.s6.h": "Select “Invite”",
    "guide.add.s6.p": "We accept, and that's the setup finished. You'll see your first draft replies within a few days.",

    "guide.roles.h": "What manager access actually allows",
    "guide.roles.p1": "Worth being straight with you: Google's Manager role is broader than just replying to reviews. Here's the real picture.",
    "guide.roles.th1": "Can they…",
    "guide.roles.th2": "Manager (us)",
    "guide.roles.th3": "Owner (you)",
    "guide.roles.r1": "Reply to reviews",
    "guide.roles.r2": "Edit business info, hours, photos",
    "guide.roles.r3": "Add or remove other people",
    "guide.roles.r4": "Delete the profile",
    "guide.roles.r5": "Remove our access",
    "guide.roles.p2": "So a manager can technically edit your business details. <strong>We only ever reply to reviews.</strong> We don't touch your hours, photos, or description, and we can't remove you or delete anything. You can revoke us in the same menu you used to add us.",
    "guide.remove.h": "Removing our access",
    "guide.remove.p": "More → Business Profile settings → People and access, select our entry, then Remove. It takes effect immediately and you don't need to tell us first.",

    "guide.faq.h": "Common questions",
    "guide.faq.q1": "Do you need my Google password?",
    "guide.faq.a1": "No, and you should never give it to anyone. The invite works through Google's own permissions system — you're granting access to our account, not sharing yours.",
    "guide.faq.q2": "Will replies go out without me seeing them?",
    "guide.faq.a2": "No. Every reply is drafted, sent to you, and only published once you approve it. That's the whole workflow.",
    "guide.faq.q3": "What if I don't like a reply?",
    "guide.faq.a3": "Reject it, or tell us what to change. Corrections feed back into how we write for you, so the same problem shouldn't come up twice.",
    "guide.faq.q4": "Can I stop at any time?",
    "guide.faq.a4": "Yes. Remove our manager access and we're out — no notice period, nothing to cancel. Replies already published stay published, since they're yours.",
    "guide.help.h": "Stuck anywhere?",
    "guide.help.p": " Send us a message and we'll do it together on a call. This step trips people up more often than anything else, and it's a five-minute fix.",
    "guide.help.link": "Get in touch",

    /* ---------- privacy ---------- */
    "priv.h1": "Privacy",
    "priv.lede": "What we collect, why we have it, who else sees it, and how to make us delete it. Last updated 19 July 2026.",
    "priv.draft.h": "Draft — not yet reviewed by a lawyer.",
    "priv.draft.p": " This page describes our actual data handling honestly, but it has not been checked by a legal professional and the operator's registered details are still placeholders. Have it reviewed before relying on it.",
    "priv.who.h": "Who we are",
    "priv.who.p": "Responsa is operated by <code>[LEGAL ENTITY NAME]</code>, <code>[REGISTERED ADDRESS]</code>, Hungary. For anything on this page, write to <code>[CONTACT EMAIL]</code>. We're the data controller for the information described below.",

    "priv.what.h": "What we collect",
    "priv.what.s1.h": "When you fill in the form",
    "priv.what.s1.i1": "Your name, email address, and phone or WhatsApp number",
    "priv.what.s1.i2": "Your business name and its Google Maps link",
    "priv.what.s1.i3": "Any menu, price list, or service document you upload or link",
    "priv.what.s1.i4": "Your preferred language, and anything you tell us about your style",
    "priv.what.s2.h": "Once you're a customer",
    "priv.what.s2.i1": "Your Google reviews, including the reviewer's public display name, star rating, and review text",
    "priv.what.s2.i2": "The replies we draft, and whether you approved or rejected them",
    "priv.what.s2.i3": "A record of what we published and when",
    "priv.what.p1": "We don't use cookies for tracking, we run no analytics, and there are no advertising trackers on this site. The form is embedded from Tally, which sets what it needs to work.",

    "priv.why.h": "Why we have it",
    "priv.why.i1": "<strong>To provide the service</strong> — we can't write replies in your voice without your reviews and your service list. Legal basis: performance of a contract.",
    "priv.why.i2": "<strong>To contact you</strong> — about drafts awaiting approval, and about your account. Legal basis: performance of a contract.",
    "priv.why.i3": "<strong>To answer enquiries</strong> — if you fill in the form but never become a customer. Legal basis: legitimate interest in replying to you.",

    "priv.share.h": "Who else sees it",
    "priv.share.p1": "We don't sell your data and we don't share it for advertising. We do rely on these providers to run the service:",
    "priv.share.th1": "Provider",
    "priv.share.th2": "What reaches them",
    "priv.share.r1": "Your reviews and our published replies. We access your Business Profile as a manager.",
    "priv.share.r2": "Everything you type into the onboarding form, including uploaded files.",
    "priv.share.r3n": "Google Gemini or Anthropic Claude",
    "priv.share.r3": "The text of a review and your style rules, sent so a draft reply can be written. This includes the reviewer's first name where they used one.",
    "priv.share.r4": "Draft replies sent to you for approval.",
    "priv.ai.h": "On the AI part, plainly:",
    "priv.ai.p": " review text written by your customers is sent to a language model to draft a reply. Those reviews are already public on Google, but we think you should know it happens rather than find out later.",

    "priv.keep.h": "How long we keep it",
    "priv.keep.i1": "Enquiries that go nowhere: deleted within 12 months.",
    "priv.keep.i2": "Customer contact and business details: for as long as you're a customer, then 12 months.",
    "priv.keep.i3": "The log of published replies: kept while we work together, because it's what stops us replying to the same review twice.",
    "priv.keep.i4": "Replies already published on Google stay there — they belong to your business profile, and only you can remove them.",

    "priv.rights.h": "Your rights",
    "priv.rights.p1": "Under the GDPR you can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, or object to how we're using it. Write to <code>[CONTACT EMAIL]</code> and we'll respond within 30 days.",
    "priv.rights.p2": "You can also revoke our access to your Google profile yourself at any time, without asking us — the <a href=\"guide.html\">setup guide</a> explains how. That stops all processing immediately.",
    "priv.rights.link": "setup guide",
    "priv.rights.p3": "If you think we've handled your data badly, you can complain to the Hungarian data protection authority (NAIH).",

    "priv.sec.h": "How we hold it",
    "priv.sec.p": "Customer records sit in a private file on a server we control, readable only by the account that runs the service. We don't keep your Google password, because we never have it — access works through Google's own permission system and you can withdraw it yourself.",

    "priv.insta.h": "Instagram add-on (coming soon)",
    "priv.insta.intro": "The Instagram add-on we're building involves a little more data than the above. It's not available yet — this will only apply to customers who explicitly connect it later.",
    "priv.insta.photos.h": "Photos and labelling",
    "priv.insta.photos.i1": "You share a photo folder (Google Drive) with our service account; we send you the exact address at registration, and you can unshare it at any time.",
    "priv.insta.photos.i2": "An AI model (Google Gemini) reviews the photos and labels what's in them — so we can pick the right image for each post.",
    "priv.insta.photos.i3": "We store those labels and copies of the photos for as long as you're a customer.",
    "priv.insta.publish.h": "Publishing",
    "priv.insta.publish.i1": "Approved posts and stories go out through the official Instagram (Meta) API to your connected professional account.",
    "priv.insta.publish.i2": "We keep a journal of what we published and when.",
    "priv.insta.ok.h": "The same principle as everywhere else:",
    "priv.insta.ok.p": " you approve every post before it goes live; we never sell your photos or share them for advertising. Turning the add-on off is simple: unshare the folder and disconnect your Instagram account.",

    /* ---------- terms (ÁSZF) ---------- */
    "aszf.h1": "Terms of Service",
    "aszf.lede": "The terms for using the Responsa service. Last updated 21 July 2026.",
    "aszf.draft.h": "Draft — not yet reviewed by a lawyer.",
    "aszf.draft.p": " This document describes how the service actually works, but it has not been checked by a legal professional and the operator's registered details are still placeholders. Have it reviewed before relying on it.",
    "aszf.s1.h": "The provider",
    "aszf.s1.p": "The Responsa service is provided by <code>[LEGAL ENTITY NAME]</code> (<code>[REGISTERED ADDRESS]</code>, Hungary; tax no.: <code>[TAX NUMBER]</code>). Contact: <code>[CONTACT EMAIL]</code>.",
    "aszf.s2.h": "The service",
    "aszf.s2.p": "Responsa connects to the Customer's Google Business Profile with manager access and drafts replies to new reviews. Every reply is published only after the Customer approves it. From the Pro plan, Responsa also provides review-collection tools (QR code, short link). Responsa never filters or hides reviews.",
    "aszf.s3.h": "Trial and fees",
    "aszf.s3.p": "The service can be trialled free for 14 days, with no card required. Pricing follows the plans published on the website, per location, billed monthly. Prices are in HUF and include VAT unless stated otherwise.",
    "aszf.s4.h": "Term and cancellation",
    "aszf.s4.p": "The agreement runs for an indefinite term and can be ended at any time, with no notice period, by the Customer revoking Responsa's manager access in their Google profile. Replies already published remain on the Customer's business profile.",
    "aszf.s5.h": "Liability",
    "aszf.s5.p": "Responsa submits drafts for the Customer's approval; the Customer is responsible for content once approved. The service depends on Google's availability, for which Responsa is not liable.",
    "aszf.s6.h": "Changes and governing law",
    "aszf.s6.p": "Responsa may amend these terms; the Customer will be notified of material changes in advance. Hungarian law applies to these terms. In a consumer dispute, the Customer may turn to the conciliation board with jurisdiction for their place of residence.",

    /* ---------- impressum ---------- */
    "imp.h1": "Impressum",
    "imp.lede": "Details of the website operator. These are placeholders for now — they'll be replaced with real data once the company is registered.",
    "imp.draft.h": "Draft — company details are still placeholders.",
    "imp.draft.p": " Once the company is registered, this page will be updated with real details.",
    "imp.r1.k": "Operator",
    "imp.r2.k": "Registered address",
    "imp.country": "Hungary",
    "imp.r3.k": "Company reg. no.",
    "imp.r4.k": "Tax number",
    "imp.r5.k": "Email",
    "imp.r6.k": "Hosting",
    "imp.p1": "For details on how Responsa handles data, see the <a href=\"privacy.html\">privacy notice</a>; for the terms of the service, see the <a href=\"aszf.html\">Terms</a>.",
    "imp.privlink": "privacy notice",
    "imp.aszflink": "Terms"
  }
};

const STORAGE_KEY = "responsa.lang";

function applyLang(lang) {
  const dict = STRINGS[lang];
  const useSource = !dict; // the source language (Hungarian) has no dict — use the inline HTML.

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (useSource) {
      if (el.dataset.i18nSource !== undefined) el.innerHTML = el.dataset.i18nSource;
    } else {
      const val = dict[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    }
  });

  document.documentElement.lang = useSource ? SOURCE_LANG : lang;
  document.querySelectorAll(".langtoggle button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === (useSource ? SOURCE_LANG : lang)));
  });
}

function initLang() {
  // Stash the Hungarian original before anything overwrites it.
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.i18nSource = el.innerHTML;
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  applyLang(saved === "en" ? "en" : SOURCE_LANG);

  document.querySelectorAll(".langtoggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, btn.dataset.lang);
      applyLang(btn.dataset.lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", initLang);

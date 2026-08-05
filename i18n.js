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
    "hero.sub": "We help more of your guests leave reviews — you get a QR code and a short link to put wherever works for you — and we write the reply to every new one. By default, every reply waits for your approval.",
    "hero.cta": "Get started",
    "hero.mini": "No password, no owner access, two clicks — and it all runs on WhatsApp, on your phone.",
    "chip.new": "New review",
    "chip.ok": "Reply approved",

    /* ---------- how it works ---------- */
    "how.eyebrow": "How it works",
    "how.h2": "Four steps up front, then it runs itself.",
    "how.s1.h": "Add us as a manager",
    "how.s1.p": "Two clicks in your Google Business Profile. Manager access is all it takes to reply — we never ask for your password or owner rights.",
    "how.s1.link": "See the guide",
    "how.s2.h": "Or a guest simply reviews you on Google",
    "how.s2.p": "Our QR code just makes it easier: one tap and they're on your Google review page, no app and no signup. But if a guest finds your profile on their own, that's just as good — we reply to every new review, wherever it came from.",
    "how.s3.h": "We write the reply in your voice",
    "how.s3.p": "We read your past replies and your menu or service list, then write a reply to every new review — the way you'd word it.",
    "how.s4.h": "You approve every reply",
    "how.s4.p": "By default every reply comes to you on WhatsApp and goes out when you tap approve. If you'd rather not see all of them, tell us which replies can publish on their own.",

    /* ---------- grow your reviews ---------- */
    "grow.eyebrow": "Grow your reviews",
    "grow.h2": "Grow your reviews — the safe way.",
    "grow.lede": "You get a QR code and a short link, and you decide where they go: the table, the bill, the receipt, by the door, or your email signature — wherever works for you. One tap takes your guest to your Google review page — restaurant, salon, or clinic alike. No app, no signup.",
    "grow.comp.h": "We never cherry-pick.",
    "grow.comp.p": " Some tools hide unhappy guests' reviews from Google (“review gating”). That breaks Google's policy and can wipe out months of reviews or get your profile suspended. Responsa never sorts guests — everyone gets the same link. We never gamble with your profile.",
    "grow.why": "Review count is one of the strongest local-ranking factors — and 38% of diners won't consider a place rated under 4★.",
    "grow.src": "BrightLocal, local consumer research",

    /* ---------- why it matters ---------- */
    "why.eyebrow": "Why it matters",
    "why.h2": "Replying isn't just manners — it brings customers.",
    "why.lede": "People read what you wrote back to someone else before they decide where to eat — and Google reads it too. Your replies count toward where your place shows up in search and on the map.",
    "why.st1": "of people expect a business to respond to their review.",
    "why.src1": "BrightLocal, 1,141 US consumers, 2024",
    "why.st2": "say they're likely to use a business that answers all of its reviews.",
    "why.src2": "BrightLocal, 1,002 US consumers, 2026",
    "why.st3": "expect to hear back within a week of leaving a review.",
    "why.st4": "only look at reviews from the last month — so a steady stream of new ones matters.",
    "why.src4": "BrightLocal, 1,002 US consumers, 2026",
    "why.callout0": "Google says this itself.",
    "why.callout1": " Google counts your reviews when it decides how prominent your business is — and says plainly that",
    "why.callout2": " “positive reviews and helpful replies can help your business stand out.”",
    "why.callout3": " Which is why the wording matters: a reply that names the actual dish someone ordered is how you prove you read it.",
    "why.calloutsrc": "Google Business Profile Help",

    /* ---------- social proof (illustrations) ---------- */
    "proof.eyebrow": "Example",
    "proof.h2": "See the kind of reply we write.",
    "proof.note": "Illustrative examples based on real reviews.",
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
    "addon.h2": "Your Instagram deserves the same attention.",
    "addon.lede": "An add-on we're building: posts and stories made from your own photos, and you still approve every single one. It's not live yet — join the waitlist and we'll tell you when it is.",
    "addon.s1.h": "Your photos, your posts",
    "addon.s1.p": "Posts and stories are built from your own photos — never stock images. It looks like your place because it is your place.",
    "addon.s2.h": "You approve everything",
    "addon.s2.p": "Every post comes to you on WhatsApp. One tap approves it — nothing goes out until you say so.",
    "addon.s3.h": "Ask anytime",
    "addon.s3.p": "Need something tonight? Write “tonight, buy-one-get-one beer” and a ready-to-post draft comes back for your approval.",
    "addon.chip1": "Post ready",
    "addon.chip2": "Approved",
    "addon.cta": "Join the waitlist",

    /* ---------- pricing ---------- */
    "price.eyebrow": "Pricing",
    "price.h2": "Clear pricing, no surprises.",
    "price.lede": "The more locations you have, the better the price — and every plan includes everything, QR review collection and all. Pay monthly, or pay for a year up front and you pay for 11 months instead of 12.",
    "price.per.m": "Monthly",
    "price.per.y": "Yearly · 1 month free",
    "price.t1.n": "1 location",
    "price.t1.amount": "12,900 <small>Ft/mo</small>",
    "price.t1.yamount": "141,900 <small>Ft/yr</small>",
    "price.t1.save": "Every feature, no limits.",
    "price.t1.ysave": "You pay for 11 months instead of 12 — 12,900 Ft less a year.",
    "price.t1.yfirst": "Your first year is only 129,000 Ft, because the free month counts too.",
    "price.t2.n": "2 locations",
    "price.t2.amount": "22,900 <small>Ft/mo</small>",
    "price.t2.yamount": "251,900 <small>Ft/yr</small>",
    "price.t2.save": "You save 2,900 Ft a month.",
    "price.t2.ysave": "You pay for 11 months instead of 12 — 22,900 Ft less a year.",
    "price.t2.yfirst": "Your first year is only 229,000 Ft, because the free month counts too.",
    "price.t3.n": "3 locations",
    "price.t3.amount": "29,900 <small>Ft/mo</small>",
    "price.t3.yamount": "328,900 <small>Ft/yr</small>",
    "price.t3.save": "You save 8,800 Ft a month.",
    "price.t3.ysave": "You pay for 11 months instead of 12 — 29,900 Ft less a year.",
    "price.t3.yfirst": "Your first year is only 299,000 Ft, because the free month counts too.",
    "price.extra": "4 or more locations: <strong>29,900 Ft/mo</strong> for the first three, plus <strong>6,900 Ft/mo</strong> for each additional one.",
    "price.extra.y": "4 or more locations: <strong>328,900 Ft/yr</strong> for the first three, plus <strong>75,900 Ft/yr</strong> for each additional one.",
    "price.incl": "Included in every plan",
    "price.f1": "A reply to every review, in your voice",
    "price.f2": "QR code and short link to collect reviews",
    "price.f4": "Every reply waits for you by default — or set your own rules",
    "price.f5": "Everything arrives on WhatsApp, on your phone",
    "price.cta": "First month free",
    "price.foot": "Your first month is free, no card.",
    "price.foot.y": "Your first month is still free — so your first yearly invoice covers only 10 months, and 11 every year after.",
    "price.add.badge": "Coming soon",
    "price.add.h": "Instagram add-on",
    "price.add.f1": "Posts and stories made from your own photos",
    "price.add.f2": "Approve on WhatsApp",
    "price.add.f3": "Ask for an extra post anytime",
    "price.add.cta": "Notify me",

    /* ---------- form ---------- */
    "form.eyebrow": "Get started",
    "form.h2": "Let's look at your profile.",
    "form.lede": "Your first month is free, no card. If you don't like it, that's the end of it. Interested in the Instagram add-on? Join the waitlist too — we'll let you know when it launches.",

    /* ---------- footer ---------- */
    "footer.copy": "© 2026 Responsa · Szeged, Hungary",
    "footer.guide": "Setup guide",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",

    /* ---------- contact ---------- */
    "contact.h1": "Contact",
    "contact.lede": "Write to us and we'll get back to you.",
    "contact.eyebrow": "Contact",
    "contact.h2": "Write to us.",
    "contact.form.lede": "A question, an idea, anything at all — send it over and we'll answer.",

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
    "guide.add.s2.cap1": "The three-dot menu (⋮) at the top right of your profile → Business Profile settings",
    "guide.add.s2.cap2": "Then People and access",
    "guide.add.s2.note": "The screenshots show Google's interface in English — if yours is in Hungarian, the same items are there under Hungarian labels.",
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
    "guide.roles.yes": "Yes",
    "guide.roles.no": "No",
    "guide.roles.p2": "So a manager can technically edit your business details. <strong>We only ever reply to reviews.</strong> We don't touch your hours, photos, or description, and we can't remove you or delete anything. You can revoke us in the same menu you used to add us.",
    "guide.remove.h": "Removing our access",
    "guide.remove.p": "More → Business Profile settings → People and access, select our entry, then Remove. It takes effect immediately and you don't need to tell us first.",

    "guide.faq.h": "Common questions",
    "guide.faq.q1": "Do you need my Google password?",
    "guide.faq.a1": "No, and you should never give it to anyone. The invite works through Google's own permissions system — you're granting access to our account, not sharing yours.",
    "guide.faq.q2": "Will replies go out without me seeing them?",
    "guide.faq.a2": "Not unless you ask for it. By default every reply is drafted, sent to you, and only published once you approve it. If you'd rather some of them publish on their own, tell us which ones and we'll set that up — and you can change it back anytime.",
    "guide.faq.q3": "What if I don't like a reply?",
    "guide.faq.a3": "Reject it, or tell us what to change. Corrections feed back into how we write for you, so the same problem shouldn't come up twice.",
    "guide.faq.q4": "Can I stop at any time?",
    "guide.faq.a4": "Yes, there's no notice period. Tell us, and we keep working to the end of the month you've already paid for — worth leaving our access in place until then, because that's what lets us reply. Prefer to revoke it right away? You can, any time; we just can't reply from that point on, and the month already invoiced isn't refunded. Replies already published stay published, since they're yours.",
    "guide.help.h": "Stuck anywhere?",
    "guide.help.p": " Send us a message and we'll do it together on a call. This step trips people up more often than anything else, and it's a five-minute fix.",
    "guide.help.link": "Get in touch",

    /* ---------- guide-insta (add-on onboarding — unlinked stub) ---------- */
    "ginsta.h1": "How the Instagram add-on will work",
    "ginsta.lede": "Coming soon: posts and stories made from your own photos, and you approve every single one. When it launches it's just three steps — here's a preview.",
    "ginsta.soon.h": "This add-on isn't available yet.",
    "ginsta.soon.p": " This page previews how it will work. Join the waitlist and we'll tell you the moment it launches.",
    "ginsta.soon.link": "Notify me",
    "ginsta.steps.h": "Three steps and it's running",
    "ginsta.s1.h": "You share a photo folder with us",
    "ginsta.s1.p": "You share a Google Drive folder with our service account — we send you the exact address at registration. Viewer access is enough, and you can unshare it at any time.",
    "ginsta.s2.h": "You connect your Instagram account",
    "ginsta.s2.p": "We walk you through the official Meta connection. It needs a professional (Business or Creator) Instagram account — we'll show you how to switch if you're not on one yet.",
    "ginsta.s3.h": "You approve everything on WhatsApp",
    "ginsta.s3.p": "Every post and story arrives as a preview on WhatsApp. One tap approves it — and you can ask for a change, or a new post, anytime.",
    "ginsta.ctrl.h": "The same principle as with replies:",
    "ginsta.ctrl.p": " you're in control. Nothing goes out without you, and you can revoke access at any time.",
    "ginsta.faq.h": "Common questions",
    "ginsta.faq.q1": "Do you need my Instagram password?",
    "ginsta.faq.a1": "No. The connection is made through the official Meta link — we never ask for or store your password, and you can revoke access at any time.",
    "ginsta.faq.q2": "Can anything go out without me?",
    "ginsta.faq.a2": "No. Every post and story is shown to you first, and only goes out once you've approved it.",
    "ginsta.faq.q3": "Can I stop at any time?",
    "ginsta.faq.a3": "Yes. Disconnect your Instagram account and unshare the folder — that's it. Posts already published stay yours.",

    /* ---------- privacy ---------- */
    "priv.h1": "Privacy",
    "priv.lede": "What we collect, why we use it, and who else sees it. Last updated 5 August 2026.",
    "priv.draft.h": "Draft — not yet reviewed by a lawyer.",
    "priv.draft.p": " This page describes our actual data handling honestly, but it has not been checked by a legal professional. Have it reviewed before relying on it.",

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

    "priv.why.h": "Why we use your data",
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
    "priv.contact": "Questions about how we handle your data? <a href=\"kapcsolat.html\">Write to us</a> and we'll answer.",

    /* ---------- terms (ÁSZF) ---------- */
    "aszf.h1": "Terms of Service",
    "aszf.lede": "The terms for using the Responsa service. Last updated 21 July 2026.",
    "aszf.draft.h": "Draft — not yet reviewed by a lawyer.",
    "aszf.draft.p": " This document describes how the service actually works, but it has not been checked by a legal professional. Have it reviewed before relying on it.",
    "aszf.s2.h": "The service",
    "aszf.s2.p": "Responsa connects to the Customer's Google Business Profile with manager access and drafts replies to new reviews. Every reply is published only after the Customer approves it, unless the Customer has asked in advance for a defined set of replies to publish automatically; the Customer may change or withdraw that setting at any time. Responsa also provides review-collection tools (QR code, short link) in every plan. Responsa never filters or hides reviews.",
    "aszf.s3.h": "Trial and fees",
    "aszf.s3.p": "Your first month is free, with no card required. Pricing follows the plans published on the website, tiered by number of locations. The Customer may choose monthly billing, or pay for a year up front — in which case the fee for twelve months of service is eleven months' fee, and ten months' fee in the first year, because the free month is included. Prices are in HUF and include VAT unless stated otherwise.",
    "aszf.s4.h": "Term and cancellation",
    "aszf.s4.p": "The agreement runs for an indefinite term and the Customer may cancel at any time, with no notice period. Cancellation takes effect at the end of the period already paid for: if the Customer paid on 15 September and cancels on 20 September, the service runs until 15 October. With yearly prepayment, it runs to the end of the prepaid year. Until that date it is worth leaving Responsa's manager access in place — that is what lets us keep replying. The Customer may revoke access at any time, but doing so stops the service immediately, and the period already invoiced is not refunded. Replies already published remain on the Customer's business profile.",
    "aszf.s5.h": "Liability",
    "aszf.s5.p": "Responsa submits drafts for the Customer's approval; the Customer is responsible for the content once approved, and likewise for replies published under an automatic-publishing rule the Customer has asked for. The service depends on Google's availability, for which Responsa is not liable.",
    "aszf.s6.h": "Changes and governing law",
    "aszf.s6.p": "Responsa may amend these terms; the Customer will be notified of material changes in advance. Hungarian law applies to these terms. In a consumer dispute, the Customer may turn to the conciliation board with jurisdiction for their place of residence."
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

/* Pricing: monthly / yearly. Both price variants are in the HTML and CSS hides one set,
   so this never touches innerHTML and never collides with applyLang(). Not persisted —
   the billing period is a comparison you make on the spot, unlike the language. */
function initPeriod() {
  const root = document.querySelector("[data-price-period]");
  const btns = document.querySelectorAll(".pertoggle button");
  if (!root || !btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      root.setAttribute("data-price-period", btn.dataset.period);
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initPeriod();
});

# 🤖 Personal Super Agent

A personal AI super agent built on [Base44](https://base44.com) — designed to automate content creation, manage social media, track investments, and organize daily workflows.

## What It Does

- **Social Media Management** — Plans, drafts, and schedules content for Facebook Pages & TikTok
- **Daily Briefings** — Morning brief with calendar, email, market, and tech news summaries
- **Market Pulse** — Nigerian and global market insights delivered daily
- **Email Organization** — Auto-labels important emails (currently paused to save credits)
- **Calendar Management** — Meeting prep, conflict detection, and scheduling
- **GitHub Integration** — Repo management, issue tracking, and project automation
- **Google Drive** — Full read/write file management

## Connected Integrations

| Service | Status | Capabilities |
|---------|--------|-------------|
| TikTok (@royaltycounsel) | ✅ Connected | Profile stats, video list |
| Facebook Pages | ⏳ Pending | Posts, insights, messaging |
| GitHub | ✅ Connected | Repos, issues, PRs |
| Google Drive | ✅ Connected | Full read/write |
| Gmail | ✅ Connected | Read, label, compose |
| Google Calendar | ✅ Connected | Read, conflict detection |
| Google Sheets | ✅ Connected | Read/write |

## Architecture

```
personal-super-agent/
├── docs/               # Documentation & GitHub Pages site
│   ├── index.html      # Landing page / dashboard
│   └── architecture.md # System design
├── src/
│   ├── agent/          # Core agent logic & skills
│   ├── integrations/   # Third-party API connectors
│   ├── workflows/      # Automated workflows & routines
│   └── config/         # Configuration files
├── README.md
└── .gitignore
```

## Workflows

### Active
- **Flag Calendar Conflicts** — Detects double-bookings
- **Prep Your Meetings** — 30-min meeting prep notifications

### Paused (credit-saving)
- **Label Important Emails** — Auto-labels inbox
- **Organize Recurring Topics** — Newsletter/promo sorting

### Inactive
- **Send Your Morning Brief** — Daily 8:00 AM brief
- **Pull Your Market Pulse** — Daily 9:00 AM market update

## Owner

**AYOTOMIWA** — Based in Dominion City, Iwo-Ibadan Express Road, Ibadan.

Content focus: Faith-based (Dominion City / WLC2025) via TikTok @royaltycounsel.

## License

MIT
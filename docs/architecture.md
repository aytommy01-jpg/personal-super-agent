# Architecture

## System Overview

```
┌─────────────────────────────────────────────────┐
│                  Base44 Superagent                │
│                    (Fal)                          │
├─────────┬─────────┬─────────┬─────────┬──────────┤
│  Gmail  │ Calendar│  Drive  │  GitHub │  TikTok  │
│         │         │         │         │          │
│  Read   │  Read   │  Read   │  Repos  │  Stats   │
│  Label  │  Conf.  │  Write  │  Issues │  Videos  │
│ Compose │  Prep   │         │   PRs   │          │
├─────────┴─────────┴─────────┴─────────┴──────────┤
│                 Workflows Engine                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │
│  │ Calendar │ │ Email    │ │ Scheduled        │  │
│  │ Triggers │ │ Triggers │ │ (Morning Brief)  │  │
│  └──────────┘ └──────────┘ └──────────────────┘  │
├─────────────────────────────────────────────────┤
│              Connected Channels                   │
│                   WhatsApp                       │
└─────────────────────────────────────────────────┘
```

## Data Flow

1. **Inbound:** Integrations (Gmail, Calendar, Drive, etc.) push events via connector triggers
2. **Processing:** Workflows execute — backend functions for API calls, agent steps for judgment/composition
3. **Outbound:** Results delivered via WhatsApp or Base44 chat

## Key Design Principles

- **Credit-conscious:** Email workflows paused to avoid unnecessary credit burn
- **Read-first:** Most integrations are read-only until explicit action is needed
- **Human-in-the-loop:** External actions (emails, posts) require user approval
- **Modular:** Each integration and workflow is independent

## Technology Stack

- **Platform:** Base44 (Superagent)
- **Backend:** Base44 managed backend (Deno functions)
- **Database:** Base44 entities (JSON schema-based)
- **Integrations:** OAuth connectors (TikTok, GitHub, Google suite, Facebook Pages)
- **Channel:** WhatsApp
- **Hosting:** GitHub Pages (this repo)
# Integrations

Third-party API connectors managed through Base44 OAuth connectors.

## Connected Services

### TikTok
- **API:** TikTok Open API v2
- **Scopes:** user.info.basic, user.info.stats, video.list
- **Endpoints:** `/v2/video/list/`, `/v2/user/info/`
- **Limitations:** Read-only — no content creation or uploading

### Facebook Pages
- **API:** Facebook Graph API v25.0
- **Scopes:** pages_show_list, pages_manage_posts, pages_read_engagement, pages_messaging, read_insights, pages_manage_metadata, pages_manage_ads
- **Endpoints:** `/me/accounts`, `/{page-id}/posts`, `/{page-id}/insights`, `/{page-id}/conversations`
- **Status:** Pending OAuth authorization
- **Limitations:** No comment reading/replying (Meta did not approve pages_read_user_content)

### GitHub
- **API:** GitHub REST API v3
- **Scopes:** read:user, read:org, repo
- **Endpoints:** `/user`, `/user/repos`, `/repos/{owner}/{repo}/contents`, `/repos/{owner}/{repo}/issues`

### Google Drive
- **Scopes:** drive (full access)
- **Capabilities:** Read, write, file management

### Gmail
- **Scopes:** gmail.readonly, gmail.modify, gmail.compose
- **Capabilities:** Read, label, compose (no sending without explicit approval)

### Google Calendar
- **Scopes:** calendar.readonly, calendar.settings.readonly
- **Capabilities:** Read events, detect conflicts, meeting prep
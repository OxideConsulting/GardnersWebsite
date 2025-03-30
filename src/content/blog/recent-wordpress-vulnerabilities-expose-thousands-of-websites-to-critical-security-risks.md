---
title: Recent WordPress Vulnerabilities Expose Thousands of Websites to Critical
  Security Risks
url: wordpress-security-vulnerabilities-q1-2025
description: In 2024, several critical vulnerabilities affecting popular
  WordPress plugins and themes were actively found, exposing thousands of sites
  to serious security risks. Today, almost a year later, hackers are still using
  these to hijack sites.
author: Gardners Digital
date: 2025-03-28T10:43:00.000Z
tags:
  - WordPress
  - Security
  - Vulnerabilities
  - CVE-2024-27956
  - CVE-2024-4345
  - CVE-2024-25600
  - CVE-2024-8353
  - Website Security
image: /assets/images/blog/wordpress.jpg
imageAlt: Unpatched vulnerabilities continue to pose serious threats to
  WordPress websites in 2025.
---
As of early 2025, thousands of WordPress websites remain dangerously vulnerable due to unpatched security flaws first discovered in 2024. Despite widespread availability of patches, cybersecurity experts report that these vulnerabilities continue to be among the most frequently exploited by attackers in the first quarter of 2025, highlighting ongoing risks for unprepared site owners.

### At the top of the list is CVE-2024-27956

This is a critical SQL injection vulnerability discovered in the WordPress Automatic Plugin, affecting over 40,000 installations. Exploited through the 'auth' POST parameter in its CSV export feature, this flaw allowed attackers to execute arbitrary SQL commands without authentication. Although patched in version 3.92.1, many websites remain vulnerable, and Patchstack reported blocking thousands of ongoing attacks targeting this flaw.

### CVE-2024-4345: Startklar Elementor Addons

Another prevalent issue is CVE-2024-4345, an unauthenticated file upload vulnerability within the Startklar Elementor Addons plugin. Over 5,000 websites initially suffered from this flaw, allowing attackers to upload malicious files due to insufficient file validation. Despite a patch released in version 1.7.14, attackers continue to exploit unpatched sites, posing severe risks of site takeover and data breaches.

### CVE-2024-25600: The Bricks theme

The Bricks theme's remote code execution vulnerability (CVE-2024-25600) remains a favorite target as well. Initially exploited in early 2024, this flaw allowed attackers to execute PHP code remotely via insufficiently protected REST API endpoints. Both Patchstack and Wordfence reported blocking numerous exploit attempts, yet many of the theme's 30,000 installations have yet to update to the secure version 1.9.6.1.

### GiveWP's CVE-2024-8353: How many out of 100,000 installs?

Perhaps most concerning due to its widespread impact, the GiveWP plugin's PHP object injection vulnerability (CVE-2024-8353) remains a significant threat. This flaw allowed attackers to gain full control of affected sites through insecure deserialization of donation parameters. Despite the availability of a fix in GiveWP version 3.16.2, many of the over 100,000 installations have not been updated, and security firms continue to identify and block frequent exploit attempts.

The persistence of these vulnerabilities underscores the critical importance of maintaining website security through regular updates and vigilant monitoring. Website administrators should promptly apply available patches, seek professional security assistance if needed, and consider custom website solutions to minimize reliance on vulnerable third-party plugins and themes.

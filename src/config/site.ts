import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "Tre Galloway",
    description: "Tre Galloway's personal site",
    author: "Tre Galloway",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Tools", subtitle: "Uses", href: "/tools" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/TreGalloway",
      icon: "mdi:github",
    },
    { name: "Email", href: "mailto:tre@tregalloway.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋🏾Sup, I'm Tre Galloway",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      "A overly curious man with a passion for learning and creating. Networking and Embedded Systems",
    cards: [
      {
        icon: "mdi:explore",
        label: "Status",
        value: "Addicted to Slay the Spire 2",
      },
      { icon: "mdi:location", label: "Location", value: "New Orleans/Houston" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Tre Galloway",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "hardware",
      items: [
        { name: "M4 Mac Mini", icon: "mdi:desktop-classic" },
        { name: "M1 MacBook", icon: "mdi:laptop" },
        { name: "Windows PC", icon: "mdi:desktop-windows" },
        {
          name: "Bambu Labs A1",
          link: "https://bambulab.com",
          icon: "mdi:printer-3d",
        },
      ],
    },
    {
      name: "development",
      items: [
        { name: "Zed", link: "https://zed.dev", icon: "mdi:code-braces" },
        {
          name: "Ghostty",
          link: "https://ghostty.org",
          icon: "mdi:terminal",
        },
        {
          name: "OpenRouter",
          link: "https://openrouter.ai",
          icon: "mdi:api",
        },
        {
          name: "OpenCode",
          link: "https://opencode.ai",
          icon: "mdi:code-tags",
        },
      ],
    },
    {
      name: "browsers",
      items: [
        {
          name: "Zen",
          link: "https://zen-browser.app",
          icon: "mdi:web",
        },
        { name: "Arc", link: "https://arc.net", icon: "mdi:earth" },
      ],
    },
    {
      name: "productivity",
      items: [
        {
          name: "Raycast",
          link: "https://raycast.com",
          icon: "mdi:lightning-bolt",
        },
        {
          name: "Obsidian",
          link: "https://obsidian.md",
          icon: "mdi:diamond-stone",
        },
        { name: "Apple Notes", icon: "mdi:note-text" },
        { name: "Apple Reminders", icon: "mdi:clipboard-check" },
      ],
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    toolsTitle: "Uses",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;

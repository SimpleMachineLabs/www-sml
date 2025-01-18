import { MainNavItem, SidebarNavItem } from "@/app/lib/types/navigator";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/api",
    },
    {
      title: "Get Started",
      href: "/docs/introduction",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "API",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Configuration",
          href: "/docs/configuration",
          items: [],
        },
        {
          title: "Test Generation",
          href: "/docs/test-generation",
          items: [],
        },
        {
          title: "Troubleshooting",
          href: "/docs/troubleshooting",
          items: [],
        },
      ],
    },
  ],
};

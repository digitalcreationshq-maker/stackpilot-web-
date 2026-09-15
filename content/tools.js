export const TOOLS = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "AI Tools",
    tagline: "AI assistant for writing, research, brainstorming and productivity.",
    bestFor: "General business productivity",
    rating: "4.8/5",
    price: "Free and paid plans available",
    image: "/images/tools/chatgpt.jpg",
    imageAlt: "ChatGPT AI assistant",
    website: "https://chatgpt.com/",

    verdict:
      "A versatile AI assistant that can help small businesses with writing, research, brainstorming, analysis and many everyday knowledge-work tasks.",

    pros: [
      "Versatile across many business tasks",
      "Useful for writing and research",
      "Can analyze and transform information",
      "Easy for beginners to start using"
    ],

    cons: [
      "Important information should be fact-checked",
      "Some advanced capabilities require a paid plan",
      "Output quality depends heavily on the instructions provided"
    ]
  },

  {
    slug: "canva",
    name: "Canva",
    category: "AI & Design",
    tagline: "Design platform for graphics, presentations, social content and marketing materials.",
    bestFor: "Small-business marketing and visual content",
    rating: "4.7/5",
    price: "Free and paid plans available",
    image: "/images/tools/canva.jpg",
    imageAlt: "Canva design platform",
    website: "https://www.canva.com/",

    verdict:
      "A practical option for small businesses that need to create professional-looking visual content without hiring a dedicated designer for every project.",

    pros: [
      "Large library of templates",
      "Beginner-friendly interface",
      "Useful for social media and marketing",
      "Supports many types of business content"
    ],

    cons: [
      "Some premium assets require a paid plan",
      "Template-based designs can look repetitive",
      "Advanced designers may want more granular control"
    ]
  },

  {
    slug: "hubspot-crm",
    name: "HubSpot CRM",
    category: "CRM",
    tagline: "Customer relationship management platform for organizing contacts, leads and sales activity.",
    bestFor: "Small businesses starting with CRM",
    rating: "4.7/5",
    price: "Free and paid options available",
    image: "/images/tools/hubspot-crm.jpg",
    imageAlt: "HubSpot CRM interface",
    website: "https://www.hubspot.com/",

    verdict:
      "A strong option for businesses that want to centralize contacts, leads and sales activity and potentially expand into a broader customer platform.",

    pros: [
      "Strong CRM foundation",
      "Useful contact and deal management",
      "Can scale into additional business functions",
      "Accessible starting options"
    ],

    cons: [
      "The broader platform can become complex",
      "Advanced functionality may increase costs",
      "Businesses should compare plans carefully"
    ]
  },

  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: "CRM",
    tagline: "CRM platform designed to help businesses manage customers, leads and sales workflows.",
    bestFor: "Businesses wanting CRM customization",
    rating: "4.6/5",
    price: "Free and paid options available",
    image: "/images/tools/zoho-crm.jpg",
    imageAlt: "Zoho CRM interface",
    website: "https://www.zoho.com/crm/",

    verdict:
      "A flexible CRM option for businesses that want customer management capabilities within a broader business software ecosystem.",

    pros: [
      "Broad CRM functionality",
      "Customization options",
      "Part of a larger business software ecosystem",
      "Useful automation capabilities"
    ],

    cons: [
      "Can require more setup than simpler CRM tools",
      "The number of features can feel overwhelming",
      "Pricing varies by plan"
    ]
  }
];

export function getToolBySlug(slug) {
  return TOOLS.find((tool) => tool.slug === slug);
}

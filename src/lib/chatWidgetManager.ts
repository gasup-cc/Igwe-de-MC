type WidgetState = "idle" | "waiting" | "injected";

interface GHLConfig {
  src: string;
  resourcesUrl: string;
  widgetId: string;
}

const GHL_CONFIG: GHLConfig = {
  src: "https://widgets.leadconnectorhq.com/loader.js",
  resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
  widgetId: "6a05e0c3205bf85d3a94f6fc",
};

const INTRO_EVENT = "intro-finished";
const INTRO_STORAGE_KEY = "introPlayed";
const FALLBACK_TIMEOUT = 10_000;

class ChatWidgetManager {
  private static instance: ChatWidgetManager;

  private state: WidgetState = "idle";
  private fallbackTimer: ReturnType<typeof setTimeout> | null = null;
  private boundInject: (() => void) | null = null;

  static getInstance(): ChatWidgetManager {
    if (!ChatWidgetManager.instance) {
      ChatWidgetManager.instance = new ChatWidgetManager();
    }
    return ChatWidgetManager.instance;
  }

  init(): void {
    if (this.state !== "idle") return;

    if (this.isIntroPlayed()) {
      this.inject();
      return;
    }

    this.state = "waiting";
    this.boundInject = () => this.inject();
    window.addEventListener(INTRO_EVENT, this.boundInject, { once: true });

    this.fallbackTimer = setTimeout(() => this.inject(), FALLBACK_TIMEOUT);
  }

  destroy(): void {
    if (this.fallbackTimer !== null) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
    if (this.boundInject) {
      window.removeEventListener(INTRO_EVENT, this.boundInject);
      this.boundInject = null;
    }
    if (this.state === "waiting") {
      this.state = "idle";
    }
  }

  private isIntroPlayed(): boolean {
    try {
      return !!sessionStorage.getItem(INTRO_STORAGE_KEY);
    } catch {
      return false;
    }
  }

  private inject(): void {
    if (this.state === "injected") return;
    this.state = "injected";

    if (this.fallbackTimer !== null) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
    if (this.boundInject) {
      window.removeEventListener(INTRO_EVENT, this.boundInject);
      this.boundInject = null;
    }

    this.injectStyles();

    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-widget-id="${GHL_CONFIG.widgetId}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = GHL_CONFIG.src;
    script.setAttribute("data-resources-url", GHL_CONFIG.resourcesUrl);
    script.setAttribute("data-widget-id", GHL_CONFIG.widgetId);
    script.async = true;
    document.body.appendChild(script);
  }

  private injectStyles(): void {
    if (document.getElementById("ghl-chat-styles")) return;

    const style = document.createElement("style");
    style.id = "ghl-chat-styles";
    style.textContent = `
      @keyframes ghl-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      iframe[src*="leadconnectorhq.com"] {
        animation: ghl-fade-in 0.5s ease 0.15s forwards;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }
}

export { ChatWidgetManager };

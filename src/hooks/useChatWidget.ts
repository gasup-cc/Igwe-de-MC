import { useEffect } from "react";
import { ChatWidgetManager } from "@/lib/chatWidgetManager";

export function useChatWidget(): void {
  useEffect(() => {
    const manager = ChatWidgetManager.getInstance();
    manager.init();
    return () => manager.destroy();
  }, []);
}

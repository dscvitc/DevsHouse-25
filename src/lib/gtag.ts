export const GA_TRACKING_ID = "G-JGBFMMS45Y"; // Replace with your GA4 ID

declare global {
  interface Window {
    gtag?: (...args: (string | number | boolean | object)[]) => void;
  }
}

// Function to send events to Google Analytics
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

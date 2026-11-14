import "./StatusBanner.css";

export type StatusLevel = "offline" | "normal" | "watch" | "warning";

interface StatusBannerProps {
  message: string;
  level?: StatusLevel;
}

function StatusBanner({ message, level = "offline" }: StatusBannerProps) {
  return (
    <div id="status-banner" className={`status-${level}`}>
      <strong>CURRENT STATUS:</strong> {message}
    </div>
  );
}

export default StatusBanner;
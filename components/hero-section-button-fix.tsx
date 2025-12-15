// Helper component for clean button focus states
export function getButtonClasses(variant: "primary" | "outline" = "primary") {
  const baseClasses =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-all"

  if (variant === "primary") {
    return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-lg hover:shadow-xl`
  }

  return `${baseClasses} border border-border/60 text-foreground hover:bg-surface hover:border-primary/50 bg-card shadow-sm hover:shadow-md`
}

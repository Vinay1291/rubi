import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, SunMedium, Sparkles } from "lucide-react";
import { ThemeOption, useTheme } from "@/hooks/use-theme";

const THEME_OPTIONS: Array<{
  value: ThemeOption;
  label: string;
  icon: JSX.Element;
}> = [
  { value: "light", label: "Light", icon: <SunMedium className="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  {
    value: "purple",
    label: "Purple",
    icon: <Sparkles className="h-4 w-4" />,
  },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full border bg-card/60 px-1 py-1 shadow-sm backdrop-blur">
      {THEME_OPTIONS.map((option) => (
        <Button
          key={option.value}
          variant="ghost"
          size="sm"
          data-testid={`theme-${option.value}`}
          className={cn(
            "h-8 rounded-full px-3 text-xs font-medium transition-colors",
            theme === option.value
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => setTheme(option.value)}
        >
          <span className="flex items-center gap-1">
            {option.icon}
            {/* <span>{option.label}</span> */}
          </span>
        </Button>
      ))}
    </div>
  );
}


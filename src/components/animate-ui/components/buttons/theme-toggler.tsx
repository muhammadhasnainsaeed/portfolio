"use client";

import * as React from "react";

import { VariantProps } from "class-variance-authority";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { buttonVariants } from "@/components/animate-ui/components/buttons/icon";
import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler";
import { cn } from "@/lib/utils";

function ThemeIcon({
  effective,
  resolved,
  modes,
}: {
  effective: ThemeSelection;
  resolved: Resolved;
  modes: ThemeSelection[];
}) {
  const theme = modes.includes("system") ? effective : resolved;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  switch (theme) {
    case "system":
      return <Monitor />;
    case "dark":
      return <Moon />;
    default:
      return <Sun />;
  }
}

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps["onImmediateChange"];
    direction?: ThemeTogglerPrimitiveProps["direction"];
  };

function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark", "system"],
  direction = "ltr",
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => {
        const nextTheme = getNextTheme(effective, modes);
        const nextThemeLabel =
          nextTheme === "light"
            ? "light"
            : nextTheme === "dark"
              ? "dark"
              : "system";

        return (
          <button
            type="button"
            aria-label={`Switch to ${nextThemeLabel} theme`}
            data-slot="theme-toggler-button"
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={(e) => {
              onClick?.(e);
              toggleTheme(nextTheme);
            }}
            {...props}
          >
            <ThemeIcon
              effective={effective}
              resolved={resolved}
              modes={modes}
            />
          </button>
        );
      }}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };

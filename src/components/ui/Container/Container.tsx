import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";

import styles from "./Container.module.scss";

type ContainerSize = "default" | "narrow";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        styles.container,
        size === "narrow" && styles.narrow,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

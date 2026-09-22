"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignupForm } from "@/components/signup-form";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof Button>;

export function TrialButton({
  children = "Записаться на пробное",
  className,
  variant = "default",
  size = "lg",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant={variant}
            size={size}
            className={cn("h-12 rounded-full px-6", className)}
          />
        }
      >
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[min(92svh,760px)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Пробное занятие
          </DialogTitle>
          <DialogDescription>
            Бесплатно. Дети и взрослые, любой уровень подготовки.
          </DialogDescription>
        </DialogHeader>
        <SignupForm />
      </DialogContent>
    </Dialog>
  );
}

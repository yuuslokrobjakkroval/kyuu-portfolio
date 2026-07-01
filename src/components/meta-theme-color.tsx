"use client";

import * as React from "react";

import { useMetaColor } from "@/hooks/use-meta-color";

export function MetaThemeColor() {
  const { metaColor, setMetaColor } = useMetaColor();

  React.useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  return null;
}

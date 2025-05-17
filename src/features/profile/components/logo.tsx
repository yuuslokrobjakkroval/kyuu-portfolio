// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";

// import { ChanhDaiMark } from "@/components/chanhdai-mark";
// import { ChanhDaiWordmark } from "@/components/chanhdai-wordmark";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Logo() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Logo</PanelTitle>
      </PanelHeader>

      <div
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="grid grid-cols-[2rem_1fr]">
          <div className="flex h-28 items-center justify-center border-r border-edge bg-background">
            <span className="-rotate-90 font-mono text-sm text-muted-foreground select-none">
              Mark
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            {/* <ChanhDaiMark className="h-8 w-auto sm:h-12" /> */}K
          </div>

          <div className="flex h-28 items-center justify-center border-r border-edge bg-background">
            <span className="-rotate-90 font-mono text-sm text-muted-foreground select-none">
              Logotype
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            {/* <ChanhDaiWordmark className="h-6 w-auto sm:h-10" /> */}
            KY YUU
          </div>
        </div>
      </div>

      {/* <div className="flex h-12 items-center justify-center pb-px">
        <Button variant="secondary" asChild>
          <Link href="/blog/chanhdai-brand">
            Contact
            <ArrowRightIcon />
          </Link>
        </Button>
      </div> */}
    </Panel>
  );
}

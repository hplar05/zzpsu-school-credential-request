import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export const Testimony = () => {
  return (
    <section
      id="testimony"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#800000]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
              What Our Students Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
              Hear from real students who have earned their school credential
              with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1 rounded-lg bg-background p-6 shadow">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    Credential Recipient
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Earning my school credential with this program was a\n
                game-changer for my career. The process was straightforward\n
                and the support I received was invaluable.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1 rounded-lg bg-background p-6 shadow">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    Credential Recipient
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Earning my school credential with this program was a\n
                game-changer for my career. The process was straightforward\n
                and the support I received was invaluable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

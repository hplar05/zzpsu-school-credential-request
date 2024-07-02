import React from "react";

export const Steps = () => {
  return (
    <section id="steps" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How to Get Your Credential
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our simple, step-by-step process makes it easy to earn your school
              credential.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col text-center justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">1. Apply Online</h3>
                  <p className="text-muted-foreground">
                    Fill out our simple online application to get started.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    2. Complete Requirements
                  </h3>
                  <p className="text-muted-foreground">
                    Fulfill the necessary academic and experience requirements.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">3. Receive Credential</h3>
                  <p className="text-muted-foreground">
                    Once approved, you'll receive your official school
                    credential.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

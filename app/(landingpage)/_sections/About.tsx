import React from "react";

export const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#800000]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
              Benefits of Our Credential
            </h2>
            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our school credential program offers a range of benefits to help
              you advance your academic and professional goals.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Recognized Credential
                  </h3>
                  <p className="text-white">
                    Our credential is widely recognized and respected by
                    employers and academic institutions.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1 text-white">
                  <h3 className="text-xl font-bold">Flexible Learning</h3>
                  <p className="text-white">
                    Complete your credential on your own schedule with online
                    and self-paced options.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1 text-white">
                  <h3 className="text-xl font-bold">Affordable Pricing</h3>
                  <p className="text-white">
                    Our credential program is designed to be accessible and
                    affordable for students of all backgrounds.
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

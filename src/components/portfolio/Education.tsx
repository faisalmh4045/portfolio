const items = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    school: "International Islamic University Chittagong",
    time: "2018 – 2023",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Chittagong Port College",
    time: "2015 – 2017",
  },
  {
    degree: "Secondary School Certificate",
    school: "Halishahar Begumjan High School",
    time: "2013 – 2015",
  },
];

export const Education = () => (
  <section id="education" className="px-6 py-28">
    <div className="mx-auto max-w-6xl">
      <div className="mb-20 text-center">
        <p className="section-label mb-6">Education</p>
        <h2 className="font-display text-4xl md:text-5xl">
          Academic <span className="text-primary">qualification</span>.
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Center vertical line */}
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-3 w-px bg-linear-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-8 md:space-y-10">
          {items.map((it, i) => {
            const isRight = i % 2 === 1;
            return (
              <li
                key={i}
                className="relative items-start md:grid md:grid-cols-2 md:gap-10"
              >
                {/* Marker */}
                <span className="absolute top-1.5 left-3 z-10 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="absolute h-4 w-4 animate-pulse-glow rounded-full bg-primary/20" />
                  <span className="relative h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                </span>

                <div
                  className={`pl-10 md:pl-0 ${
                    isRight
                      ? "md:col-start-2 md:pl-10 md:text-left"
                      : "md:col-start-1 md:pr-10 md:text-right"
                  }`}
                >
                  <div className="mb-1 font-mono-accent text-[11px] tracking-[0.25em] text-primary uppercase">
                    {it.time}
                  </div>
                  <h3 className="font-display text-xl leading-tight text-foreground md:text-2xl">
                    {it.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {it.school}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);

export function WhatIsNorven() {
  return (
    <section className="py-16 px-6 bg-surface/30">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">The execution gap in enterprise agent systems</h2>

          <ul className="space-y-3 text-base text-foreground-secondary">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Agent frameworks focus on planning and orchestration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>
                Enterprises require identity, authorization, failure control, and auditability at execution time
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Most teams rebuild this enforcement inconsistently and internally</span>
            </li>
          </ul>

          <p className="text-base text-foreground-secondary pt-2">
            Norven standardizes this execution boundary without replacing existing frameworks or infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}

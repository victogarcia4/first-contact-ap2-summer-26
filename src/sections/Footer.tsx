import { Logo } from "../components/Logo";
import { INSTRUCTOR, LINKS, COURSE } from "../data";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
        {/* Left — identity + support */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Logo size={20} className="text-bio-cyan" />
            <span className="text-[15px] font-bold tracking-tight text-white">
              A&amp;P II · {COURSE.code}
            </span>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/50">
            {COURSE.title} — {COURSE.college}. {COURSE.term}, Session{" "}
            {COURSE.session}. You've got this. Finish strong. 💪
          </p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-bio-pulse">
              🛠 Tech issues during an exam?
            </div>
            <p className="mt-2 text-[13px] text-white/60">
              Don't email the instructor — contact OTS immediately to open a
              ticket, then email the ticket number.
            </p>
            <a
              href={`tel:${LINKS.otsPhone.replace(/-/g, "")}`}
              className="mt-3 inline-block text-[16px] font-bold text-white transition hover:text-bio-cyan"
            >
              📞 {LINKS.otsPhone}
            </a>
          </div>
        </div>

        {/* Right — contacts + links */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/35">
              Instructor
            </div>
            <div className="text-[15px] text-white/85">{INSTRUCTOR.name}</div>
            <a
              href={`mailto:${INSTRUCTOR.email}`}
              className="mt-1 block break-all text-[13px] text-bio-cyan transition hover:text-white"
            >
              {INSTRUCTOR.email}
            </a>
            <div className="mt-2 text-[12px] text-white/40">
              {INSTRUCTOR.office}
            </div>
            <div className="text-[12px] text-white/40">{INSTRUCTOR.hours}</div>
            <p className="mt-3 text-[11px] text-white/30">
              Emailing? Include your class, section & subject.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
            <a
              href={LINKS.d2l}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:text-bio-cyan"
            >
              D2L ↗
            </a>
            <a
              href={LINKS.zoom}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:text-bio-cyan"
            >
              Zoom kickoff ↗
            </a>
            <a
              href={LINKS.starBundle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:text-bio-cyan"
            >
              STAR Bundle ↗
            </a>
            <a
              href={LINKS.policies}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:text-bio-cyan"
            >
              LSC policies ↗
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 text-[11px] text-white/30 sm:flex-row sm:items-center">
          <span>
            © 2026 {COURSE.college}. Syllabus subject to change — check D2L
            weekly.
          </span>
          <span>Built for the {COURSE.session} crew.</span>
        </div>
      </div>
    </footer>
  );
}

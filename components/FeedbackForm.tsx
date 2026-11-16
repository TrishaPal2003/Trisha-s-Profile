"use client";
import { useState } from "react";
import Icon from "./Icon";

const field = "h-10 px-3 bg-white rounded-sm text-body-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary";
const label = "font-mono text-label-caps text-on-surface-variant";

export default function FeedbackForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to a real backend (Formspree, Google Form, or your Django API).
    console.log(data);
    setSent(true);
  }

  if (sent)
    return (
      <div className="p-8 bg-white rounded-lg text-center flex flex-col items-center gap-4">
        <Icon name="mark_email_read" className="text-secondary text-[28px]" />
        <h4 className="text-headline-sm">Thank You for Your Feedback!</h4>
        <p className="text-body-md text-on-surface-variant max-w-md">
          Your suggestion has been logged. Together, we are building a club tailored to every student.
        </p>
        <button onClick={() => setSent(false)} className="px-4 py-2 rounded-sm bg-surface-container-low text-body-sm hover:bg-surface-container">
          Submit another idea
        </button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>YOUR NAME (OPTIONAL)</label>
          <input id="name" name="name" placeholder="e.g., Alex Rahman" className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="batch" className={label}>ACADEMIC YEAR / BATCH</label>
          <select id="batch" name="batch" required defaultValue="" className={field}>
            <option value="" disabled>Select your current year</option>
            <option>1st Year (Freshman)</option>
            <option>2nd Year (Sophomore)</option>
            <option>3rd Year (Junior)</option>
            <option>4th Year (Senior)</option>
            <option>Postgraduate / Alumni</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className={label}>TOPIC / FOCUS AREA</label>
        <select id="topic" name="topic" className={field}>
          <option>Workshops &amp; Technical Tracks</option>
          <option>Competitive Programming &amp; Contests</option>
          <option>Collaborative Projects &amp; Open Source</option>
          <option>Lab Facilities &amp; Equipment Access</option>
          <option>General Idea or Feedback</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={label}>MESSAGE / PROPOSAL</label>
        <textarea id="message" name="message" required rows={4}
          placeholder="Tell me what would make the Computer Club truly valuable for you this academic year..."
          className="p-3 bg-white rounded-sm text-body-sm shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-secondary" />
      </div>
      <button type="submit" className="inline-flex items-center justify-center h-11 px-6 rounded-sm bg-primary text-on-primary text-body-sm hover:bg-secondary shadow-md active:scale-95 transition-all">
        Share Your Ideas <Icon name="send" className="ml-2 text-[18px]" />
      </button>
      <p className="font-mono text-label-caps text-on-surface-variant text-center">
        Every suggestion is read directly and used to refine our student-first action plan.
      </p>
    </form>
  );
}

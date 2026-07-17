export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  current?: boolean;
};

export const experienceData: Role[] = [
  {
    title: `Technical Lead`,
    company: `Sesimi`,
    location: `Melbourne, Australia`,
    period: `Apr 2025 - now`,
    summary: `Mentoring, code reviews, onboarding, and automation workshops, earning the top peer-voted recognition company-wide.`,
    current: true,
  },
  {
    title: `Full-Stack Developer`,
    company: `Sesimi`,
    location: `Melbourne, Australia`,
    period: `Feb 2023 - Mar 2025`,
    summary: `Turned PDF brand guidelines into production component libraries for 20+ clients including Toyota, Volkswagen, and Lexus.`,
  },
  {
    title: `Web3 Front-End & UI/UX Designer`,
    company: `TheQuestHub`,
    location: `Perth, Australia · part-time`,
    period: `Jun 2021 - Jun 2024`,
    summary: `Built the front-end of a Solana DeFi lending platform ($10M+ in loans) and a BTC web wallet used by 10K+ people.`,
  },
  {
    title: `Front-End Developer & UI/UX Designer`,
    company: `Cloud Panda`,
    location: `Pasig, Philippines`,
    period: `Jan 2020 - Feb 2023`,
    summary: `Designed and built 20+ client sites end to end, the toktok super-app ecosystem, and the Miss Universe PH 2021 broadcast platform.`,
  },
];

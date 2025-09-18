type Item = {
  name: string;
  to: string;
  isEnd?: boolean;
};

export const items: Item[] = [
  { name: "Dashboard", to: "/dashboard", isEnd: true },
  { name: "Projects", to: "/dashboard/projects" },
  { name: "Team", to: "/dashboard/team" },
];

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface TechBadge {
  icon: string;
  name: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
}

export type Project = {
    title:       string;
    description: string;
    image:       string;
    url:         string;
    date:        string;
    tech_stack:  TechStack[];
}

export type TechStack = {
    name: string;
    icon: string;
}

export type ContactIcons = {
    title: string;
    icon:  string;
    url:   string;
  }
export interface LinkButtonModel {
    name: string;
    buttonName: string;
    buttonLink: string;
}

export interface ImageInfoModel {
    name: string;
    imageLink: string;
}

export interface SectionProps {
  section?: any;
  linkButtonInfo?: any[]; 
  imageInfo?: any[];
}

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  badge?: string;
  summary: string[];
  tags: string[];
};

export type ExperienceContent = {
  title_top: string;
  title_bottom: string;
  experiences: ExperienceItem[];
};

export type SkillTab = {
  label: string;
  description: string;
  tags: string[];
};

export type SkillValue = string | {
  value_title: string;
  value_desc?: string;
};

export type SkillGroup = {
  label: string;
  values: SkillValue[];
};

export type SkillCardContent = {
  tabs?: SkillTab[];
  description?: string;
  preferred_env?: { label: string; value: string };
  [key: string]: unknown;
};

export type SkillCard = {
  card_title: string;
  content: SkillCardContent;
};

export type SkillsContent = {
  title_top: string;
  title_bottom: string;
  cards: SkillCard[];
};

export type FoundationEducation = {
  logo: string;
  title: string;
  education_range: string;
  degree: string;
  university: string;
  specializations: string[];
};

export type FoundationBackgroundInfo = {
  info_title: string;
  info_value: string;
};

export type FoundationBackground = {
  title_top: string;
  title_bottom: string;
  description: string;
  info_array: FoundationBackgroundInfo[];
};

export type FoundationCard = {
  name: "education" | "background";
  content: FoundationEducation | FoundationBackground;
};

export type FoundationContent = {
  cards: FoundationCard[];
};

export type ContactContent = {
  form_name_label: string;
  form_email_label: string;
  form_subject_label: string;
  form_message_label: string;
  form_subject_options: string[];
};

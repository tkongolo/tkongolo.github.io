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
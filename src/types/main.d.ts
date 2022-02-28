import { StringifyOptions } from "querystring";

// [planet].tsx
interface dataProps {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

// [team].tsx
interface teamProps {
  name: string;
  images: {
    png: string;
    webp: string;
    height: number;
    width: number;
  };
  role: string;
  bio: string;
}

// [equipment].tsx
interface equipmentProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export { dataProps, teamProps, equipmentProps };

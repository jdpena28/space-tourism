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

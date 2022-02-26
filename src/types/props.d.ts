// Navbar.tsx
interface TextLinkProps {
  navCount: string;
  navText: string;
  navLink: string;
}
// Layout.tsx
interface LayoutProps {
  children: React.ReactNode;
  id: string | undefined;
  className?: string;
}
// Subheading.tsx
interface SubheadingProps {
  num: string;
  text: string;
}
// Tabs.tsx
interface LinktabsProps {
  text: string;
  routes: string;
}

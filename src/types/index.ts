export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  label: string;
}

export interface NavigationProps {
  className?: string;
}
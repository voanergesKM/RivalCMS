import {
  BlogIcon,
  CreateIcon,
  FilesIcon,
  HomeIcon,
  PlanIcon,
  PluginsIcon,
  SubcriptionIcon,
  ThemesIcon,
  TrashIcon,
  UsersIcon,
} from '../assets/icons/SvgIcons';

export const manageList = [
  { href: '/view', title: 'View site', icon: HomeIcon },
  { href: '/create', title: 'Create page', icon: CreateIcon },
  { href: '#', title: 'Blog articles', icon: BlogIcon },
  { href: '/files', title: 'Files', icon: FilesIcon },
  { href: '#', title: 'Users', icon: UsersIcon },
  { href: '#', title: 'Subscriptions', icon: SubcriptionIcon },
  { href: '#', title: 'Archived pages', icon: TrashIcon },
];

export const featureList = [
  { href: '#', title: 'Themes', icon: ThemesIcon },
  { href: '#', title: 'Plugins', icon: PluginsIcon },
  { href: '#', title: 'Upgrade plans', icon: PlanIcon },
];

import {
  TruckIcon,
  WrenchScrewdriverIcon,
  RulerIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  HomeModernIcon,
  CheckBadgeIcon,
  SparklesIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  SunIcon,
} from '@heroicons/react/24/outline';

import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  truck: TruckIcon,
  tools: WrenchScrewdriverIcon,
  ruler: RulerIcon,
  shield: ShieldCheckIcon,
  headset: HeadphonesIcon,
  home: HomeModernIcon,
  check: CheckBadgeIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  star: StarIcon,
  starSolid: StarSolidIcon,
  phone: PhoneIcon,
  email: EnvelopeIcon,
  map: MapPinIcon,
  chevronRight: ChevronRightIcon,
  chevronDown: ChevronDownIcon,
  menu: Bars3Icon,
  close: XMarkIcon,
  filter: AdjustmentsHorizontalIcon,
  arrow: ArrowRightIcon,
  calendar: CalendarIcon,
  users: UserGroupIcon,
  building: BuildingOffice2Icon,
  sun: SunIcon,
  projects: CheckBadgeIcon,
  warranty: ShieldCheckIcon,
  advice: HeadphonesIcon,
  team: UserGroupIcon,
};

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Icon({ name, className = '', size = 'md' }: IconProps) {
  const IconComponent = iconMap[name];
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={`${sizes[size]} ${className}`} />;
}

export { iconMap };

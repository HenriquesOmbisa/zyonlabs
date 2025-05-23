import { 
  Wallet, ArrowUp, ArrowDown, TrendingUp, Plus, Download, 
  CreditCard, BarChart2, PieChart, DollarSign, Facebook, 
  Twitter, Instagram, Linkedin, Play, Apple, Star, 
  Check, X, ChevronRight, Smartphone, Shield, Percent,
  Globe, Briefcase, Headphones, Clock, Gift
} from 'lucide-react';

export const Icons = {
  logo: BarChart2,
  wallet: Wallet,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  trendingUp: TrendingUp,
  plus: Plus,
  download: Download,
  transfer: CreditCard,
  payment: DollarSign,
  deposit: PieChart,
  investment: TrendingUp,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  play: Play,
  apple: Apple,
  googlePlay: Smartphone,
  star: Star,
  check: Check,
  x: X,
  chevronRight: ChevronRight,
  instant: Clock,
  security: Shield,
  cashback: Percent,
  global: Globe,
  business: Briefcase,
  support: Headphones,
  gift: Gift,
  forbes: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M5.681 11.28v7.537h3.157v-7.54h2.156V8.66H5.68v2.62zm9.518 7.54h3.157V8.66h-3.157v10.16zm3.157-13.6h-3.157V3.36h3.157v1.86zM5.681 5.22V3.36h7.537v1.86H5.68z"/>
    </svg>
  ),
  techcrunch: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 5.5h3v13h-3v-13zm6 0h3v13h-3v-13z"/>
    </svg>
  ),
  bbc: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zM8 8v8h8V8H8zm1.5 1.5h5v5h-5v-5z"/>
    </svg>
  ),
  fastcompany: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zM8 8v8h8V8H8zm1.5 1.5h5v5h-5v-5z"/>
    </svg>
  ),
  wired: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zM8 8v8h8V8H8zm1.5 1.5h5v5h-5v-5z"/>
    </svg>
  )
};
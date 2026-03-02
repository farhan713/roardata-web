import {
    HeartPulse, Coins, PiggyBank, Building2, GraduationCap, Zap,
    Recycle, Tent, Briefcase, ShoppingBasket, Landmark,
    Hotel, ShieldCheck, Scale, Truck, Factory, Film, Pickaxe,
    HeartHandshake, FlaskConical, Home, ShoppingBag,
    Dumbbell, Monitor, Phone, Bus, Plane, Rocket, Tractor, CarFront
} from 'lucide-react'

export const getIndustryIcon = (slug: string) => {
    switch (slug) {
        case 'aerospace-and-defence': return <Rocket className="w-5 h-5" />
        case 'agriculture': return <Tractor className="w-5 h-5" />
        case 'automotive': return <CarFront className="w-5 h-5" />
        case 'healthcare': return <HeartPulse className="w-5 h-5" />
        case 'finance': return <Coins className="w-5 h-5" />
        case 'banking': return <PiggyBank className="w-5 h-5" />
        case 'construction': return <Building2 className="w-5 h-5" />
        case 'education': return <GraduationCap className="w-5 h-5" />
        case 'energy-and-utilities': return <Zap className="w-5 h-5" />
        case 'environmental-services-and-waste-management': return <Recycle className="w-5 h-5" />
        case 'event-management': return <Tent className="w-5 h-5" />
        case 'financial-services': return <Briefcase className="w-5 h-5" />
        case 'fmcg-fast-moving-consumer-goods': return <ShoppingBasket className="w-5 h-5" />
        case 'government-and-public-sector': return <Landmark className="w-5 h-5" />
        case 'hospitality': return <Hotel className="w-5 h-5" />
        case 'insurance': return <ShieldCheck className="w-5 h-5" />
        case 'legal-services': return <Scale className="w-5 h-5" />
        case 'logistics-and-supply-chain': return <Truck className="w-5 h-5" />
        case 'manufacturing': return <Factory className="w-5 h-5" />
        case 'media-and-entertainment': return <Film className="w-5 h-5" />
        case 'mining-and-natural-resources': return <Pickaxe className="w-5 h-5" />
        case 'nonprofit-and-ngos': return <HeartHandshake className="w-5 h-5" />
        case 'pharmaceuticals': return <FlaskConical className="w-5 h-5" />
        case 'professional-services': return <Briefcase className="w-5 h-5" />
        case 'real-estate': return <Home className="w-5 h-5" />
        case 'retail': return <ShoppingBag className="w-5 h-5" />
        case 'sports-and-recreation': return <Dumbbell className="w-5 h-5" />
        case 'technology': return <Monitor className="w-5 h-5" />
        case 'telecommunications': return <Phone className="w-5 h-5" />
        case 'transportation': return <Bus className="w-5 h-5" />
        case 'travel-and-tourism': return <Plane className="w-5 h-5" />
        default: return <Briefcase className="w-5 h-5" />
    }
}

import {Church, Landmark, GraduationCap, Amphora, Building2, Palette, Trophy, ShoppingBag, Waves, Flower2, Palmtree } from 'lucide-react';

interface LocationMetaProps {
    type: string;
}

export default function ShowType({type}: LocationMetaProps) {
    
    function renderLocationType(type: string) {
        switch (type) {
            case "Religion":     return <><Church size={20} /> Religion</>;
            case "Heritage":     return <><Landmark size={20} /> Heritage</>;
            case "Monument":     return <><Landmark size={20} /> Monument</>;
            case "Education":    return <><GraduationCap size={20} /> Education</>;
            case "Museum":       return <><Amphora size={20} /> Museum</>;
            case "Government":   return <><Building2 size={20} /> Government</>;
            case "Culture":      return <><Palette size={20} /> Culture</>;
            case "Sports":       return <><Trophy size={20} /> Sports</>;
            case "Mall":         return <><ShoppingBag size={20} /> Mall</>;
            case "Dam":          return <><Waves size={20} /> Dam</>;
            case "Cemetery":     return <><Flower2 size={20} /> Cemetery</>;
            case "Recreation":   return <><Palmtree size={20} /> Recreation</>
        }
    }

    return (
        <div className="flex items-center gap-2 text-[#9C9C9C]">
            {renderLocationType(type)}
        </div>
    );
}


import {Star, StarHalf} from 'lucide-react';

interface StarProps {
    rating: number;
}

export default function ShowStars({rating}: StarProps) {
    return (
        <div className="flex items-center gap-0.5 text-[#FFB600]">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                
                if (rating >= starValue) {
                    return <Star key={index} size={18} className="fill-current" />;
                } else if (rating >= starValue - 0.5) {
                    return <StarHalf key={index} size={18} className="fill-current" />;
                } else {

                    return <Star key={index} size={18} className="opacity-30" />;
                }
            })}
        </div>
    );
}
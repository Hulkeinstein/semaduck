import React from 'react';

interface DuckIconProps {
    className?: string;
    size?: number;
    color?: string;
}

const DuckIcon: React.FC<DuckIconProps> = ({
    className = "",
    size = 48,
    color = "currentColor"
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Refined Line Art: Duck Head Side Profile */}
            {/* Start from Neck (bottom left) -> Curve up to Head -> Beak -> Back of Head */}
            <path
                d="M7 17 C 7 17, 8 10, 14 10 C 17 10, 18 11, 18 11 C 18 11, 21 11.5, 22 12 C 22.5 12.2, 21.5 13, 20 13 C 18 13, 18 13, 18 13 C 18 13, 17.5 16, 14 16 C 10 16, 7 17, 7 17"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Simple Eye */}
            <circle cx="14.5" cy="12.5" r="1.2" fill={color} />
        </svg>
    );
};

export default DuckIcon;

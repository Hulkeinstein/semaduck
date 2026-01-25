import React from 'react';

const ingredients = [
    {
        title: "Fresh Duck",
        description: "매일 아침 공급되는\n신선한 1등급 생오리",
        imgColor: "bg-rose-100", // Placeholder color
    },
    {
        title: "Pure Water",
        description: "약수로 지어낸\n건강한 밥상",
        imgColor: "bg-blue-50",
    },
    {
        title: "Local Greens",
        description: "직접 재배한\n유기농 쌈채소",
        imgColor: "bg-green-50",
    },
    {
        title: "Aged Garlic",
        description: "3년 숙성 된장과\n의성 마늘",
        imgColor: "bg-neutral-100",
    },
];

const IngredientsSection = () => {
    return (
        <section className="w-full py-24 px-4 bg-[#f7f5f1]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-dancing text-3xl md:text-4xl -rotate-3 text-[#00382c] inline-block mb-4">
                        Fresh & Local
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-[#00382c]">
                        자연에서 온 선물
                    </h2>
                </div>

                {/* Grid - Matching Diodona's album/grid feel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ingredients.map((item, index) => (
                        <div key={index} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                            {/* Image Placeholder */}
                            <div className={`w-full h-full ${item.imgColor} transition-transform duration-700 group-hover:scale-105`}>
                                <div className="w-full h-full flex items-center justify-center text-[#00382c]/20 font-playfair text-2xl">
                                    {item.title}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#00382c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#f7f5f1] p-6 text-center">
                                <h3 className="font-playfair text-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {item.title}
                                </h3>
                                <p className="font-manrope text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 whitespace-pre-line">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default IngredientsSection;

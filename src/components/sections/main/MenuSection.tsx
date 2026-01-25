import React from 'react';

const menuItems = [
    {
        course: "First Course",
        name: "Fresh Duck Roast",
        tags: "생오리 숯불구이",
        price: "Thinking...", // Price strategy to be defined later
        desc: "참숯 향이 배어든 담백하고 쫄깃한 육질"
    },
    {
        course: "Second Course",
        name: "Spicy Duck Stew",
        tags: "오리탕",
        price: "",
        desc: "오리뼈를 진하게 우려낸 깊고 얼큰한 국물"
    },
    {
        course: "Third Course",
        name: "Nutritious Porridge",
        tags: "녹두죽",
        price: "",
        desc: "녹두와 찹쌀로 쑤어낸 부드러운 마무리"
    }
];

const MenuSection = () => {
    return (
        <section className="w-full py-24 px-4 bg-[#f7f5f1]">
            <div className="max-w-4xl mx-auto text-center">

                {/* Header */}
                <div className="mb-20">
                    <span className="font-dancing text-3xl md:text-4xl -rotate-3 text-[#00382c] inline-block mb-4">
                        Signature Course
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-[#00382c]">
                        하나의 코스, 세 번의 감동
                    </h2>
                </div>

                {/* Menu List */}
                <div className="space-y-12">
                    {menuItems.map((item, index) => (
                        <div key={index} className="group flex flex-col items-center space-y-3">
                            <span className="font-manrope text-sm tracking-widest text-[#C5A039] uppercase">
                                {item.course}
                            </span>
                            <h3 className="font-playfair text-3xl md:text-4xl text-[#00382c] relative inline-block">
                                {item.name}
                                {/* Underline effect on hover */}
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#00382c] transition-all duration-500 group-hover:w-full"></span>
                            </h3>
                            <p className="font-manrope text-lg text-[#00382c]/80">
                                {item.tags}
                            </p>
                            <p className="font-manrope text-sm text-[#00382c]/60 max-w-md">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Download / Full Menu Button */}
                <div className="mt-20">
                    <button className="border border-[#00382c] px-8 py-3 rounded-full text-[#00382c] hover:bg-[#00382c] hover:text-[#f7f5f1] transition-colors duration-300 font-manrope uppercase text-sm tracking-widest">
                        View Full Menu
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MenuSection;

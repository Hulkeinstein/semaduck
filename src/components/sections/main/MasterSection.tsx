import React from 'react';
import Image from 'next/image';

const MasterSection = () => {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#1A1A1A] text-[#f7f5f1] overflow-hidden">
            {/* Container matching Diodona's width constraint */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Left: Image (Asymmetric) */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden rounded-sm">
                            {/* Image Placeholder - User needs to provide actual charcoal/fire/chef image */}
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
                                [Master of Fire Image]
                            </div>
                            {/* Decorative Border/Frame if needed */}
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">

                        {/* Rotated Label - White/Gold in Dark Theme */}
                        <span className="font-dancing text-3xl md:text-4xl -rotate-3 text-[#C5A039] mb-4 self-center md:self-start transform transition-transform hover:rotate-0 duration-500">
                            Master of Fire
                        </span>

                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            불을 다스리는<br />
                            <span className="italic opacity-80">장인의 시간</span>
                        </h2>

                        <div className="font-manrope text-base md:text-lg text-gray-300 space-y-6 leading-relaxed">
                            <p>
                                참숯의 은은한 열기가 오리의 깊은 풍미를 깨웁니다.<br />
                                단순히 굽는 행위를 넘어, 불과 고기가 대화하는<br />
                                그 찰나의 순간을 포착합니다.
                            </p>
                            <p>
                                26년간 불앞을 지켜온 고집.<br />
                                겉은 바삭하고 속은 촉촉한, 완벽한 균형의 미학을<br />
                                오직 세마오리농원에서만 경험하실 수 있습니다.
                            </p>
                        </div>

                        {/* Button / CTA */}
                        <div className="mt-10 self-center md:self-start">
                            <button className="border border-[#f7f5f1] px-8 py-3 rounded-full hover:bg-[#f7f5f1] hover:text-[#1A1A1A] transition-colors duration-300 font-manrope uppercase text-sm tracking-widest">
                                Discover Our Craft
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MasterSection;

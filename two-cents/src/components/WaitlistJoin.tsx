import { useEffect, useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";


interface WaitListJoinProps {
    imageSrc?: string;
}

const WaitListJoin = ({ imageSrc }: WaitListJoinProps) => {
    const [, setIsSmallPhone] = useState(false);

    useEffect(() => {
        setIsSmallPhone(window.innerWidth < 376);
    }, []);

    return (
        <div className="flex justify-center px-4 mb-8">
            <div className="relative bg-white max-w-lg h-auto w-75 flex
             flex-col items-center justify-center mx-auto tracking-wide
             rounded-2xl border-2 border-[#52AEEF] shadow-[10px_10px_0px_#ABD8F6]
              md:shadow-[15px_15px_0px_#ABD8F6] px-6 md:px-8 md:w-100 py-8 md:py-10 lg:w-1/2">

                {imageSrc && (
                    <img
                        src={imageSrc}
                        className="absolute -bottom-7 -right-21 scale-x-[-1] h-32 z-50 md:w-100 md:h-auto md:-right-73 md:-bottom-8 lg:top-3"
                    />
                )}

                <p className="text-center! font-semibold! text-2xl! md:text-4xl! tracking-normal! leading-snug! pb-6! m-0!">
                    Start spending and <br />
                    saving with{" "}
                    <span className="text-[#52AEEF] font-normal" style={{ fontFamily: '"gooddog-new", sans-serif' }}>
                        confidence.
                    </span>
                </p>
                <PrimaryButton
                    buttonColor="#F5A243"
                    borderColor="#F5A243"
                    textColor="#ffffff"
                    buttonWidth="150px"
                    buttonHeight="40px"
                    fontSize="20px"
                />
            </div>
        </div>
    );
};

export default WaitListJoin;
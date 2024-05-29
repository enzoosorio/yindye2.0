import { twMerge } from "tailwind-merge"

export default function Subtitle({ classnameprovided, children }) {
    return (
        <h2 className={twMerge("mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-2xl lg:text-3xl",
            classnameprovided ? classnameprovided : ''
        )}>
            {children}
        </h2>
    )
}
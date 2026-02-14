import HeroBanner from "./Herobanner";
import Problem from "./Problemsection";
import Features from "./Features";
import NavbarO from "./navbar-o";
import Governmentscheme from "./Governmentschemes";
export default function Home() {
    return (
        <div className="w-[100%] pb-[40px]">
            <NavbarO />
            <HeroBanner />
            <Problem />
            <Features />
            <Governmentscheme />
        </div>
    )
}

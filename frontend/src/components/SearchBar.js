import searchicon from "../assests/search-icon.png";
// import SearchBox from "./Searchbox";
export default function SearchBar() {
    return (
        
        <div className="hidden relative min-[1400px]:flex">
            <input
                className="outline-none border-b-1 border-grey-400 focus:border-indigo-500 w-[30vw] text-white p-[2px] relative"
                type="text"
                placeholder="Search..."
            />
            <img className="w-[16px] absolute right-[0px]" src={searchicon} alt="search" />
        </div>
    );
}
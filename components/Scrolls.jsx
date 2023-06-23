import ScrollItem from "../components/ScrollItem";

export default function Scrolls() {
    return (
        <div className="flex flex-row items-start w-4/5 min-h-[450px] max-h-auto gap-2.5 left-72 top-[220px] absolute rounded-lg overflow-x-scroll">
            <ScrollItem title="Saved" count='4' />
            <ScrollItem title="Applied" count='1' />
            <ScrollItem title="Interviewing" count='1' />
            <ScrollItem title="Offer" count='1' />
            
        </div>
    );
}
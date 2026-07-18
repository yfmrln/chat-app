import type { Topic } from "../types/topic";

interface Props{
    topics:Topic[];
    onSelect:(topic:Topic)=>void;
}

export default function TopicList({
    topics,
    onSelect
}:Props){

    return (
        <div className="space-y-1">
            {
                topics.map(topic=>(
                <button
                    key={topic.id}
                    onClick={()=>onSelect(topic)}
                    className="
                        w-full
                        text-left
                        px-3
                        py-2
                        rounded
                        text-gray-300
                        hover:bg-gray-700
                        transition
                        "
                    >
                    <span className="
                        mr-2
                    ">
                    #
                    </span>
                    {topic.title}
                </button>
                ))
            }
        </div>
    )
}
import { HeartIcon, UserIcon, ClockIcon } from "@heroicons/react/outline";
import GetTimeDiffText from "../utils/getTimeDiffText";
import GetURLText from "../utils/getURLText";

export default function NewsCard({
  objectID,
  title,
  points,
  author,
  created_at,
  url,
}) {
  return (
    <article className="p-4 flex items-center bg-dark" key={objectID}>
      <div className="flex flex-col">
        <a
          href={`https://news.ycombinator.com/item?id=${objectID}`}
          className="font-light"
        >
          {title}
        </a>
        <div className="flex flex-wrap text-gray-400 mt-1">
          <a href={`https://news.ycombinator.com/item?id=${objectID}`}>
            <div className="flex space-x-1 hover:underline">
              <HeartIcon className="w-4 h-4" />
              <span className="text-xs">{points} points</span>
            </div>
          </a>

          <span className="mx-2" />

          <a href={`https://news.ycombinator.com/user?id=${author}`}>
            <div className="flex space-x-1 hover:underline">
              <UserIcon className="w-4 h-4" />
              <span className="text-xs">{author}</span>
            </div>
          </a>

          <span className="mx-2" />

          <a href={`https://news.ycombinator.com/item?id=${objectID}`}>
            <div className="flex space-x-1 hover:underline">
              <ClockIcon className="w-4 h-4" />
              <span className="text-xs">{GetTimeDiffText(created_at)}</span>
            </div>
          </a>

          <span className="mx-2" />

          {GetURLText(url) && (
            <a href={url} target="_blank">
              <div className="flex space-x-1 hover:underline">
                <span className="text-xs text-blue-400">
                  ({GetURLText(url)})
                </span>
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="ml-auto flex-shrink-0"></div>
    </article>
  );
}

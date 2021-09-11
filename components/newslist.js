import NewsCard from "./newscard";

export default function NewsList({ news }) {
  return (
    <div className="flex flex-col rounded overflow-hidden divide-y divide-darkest">
      {news.map((currentNew) => (
        <NewsCard key={currentNew.objectID} {...currentNew} />
      ))}
    </div>
  );
}

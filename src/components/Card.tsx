import { MouseEvent, useRef } from 'react';
import { BlogPreview } from '../definitions';
import './Card.css';
import Tag from './Tag';

function Card({ item }: { item: BlogPreview }) {
  const link = useRef<HTMLAnchorElement>(null);
  const card = useRef<HTMLElement>(null);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(new Date(item.datePublished));

  const onMouseOver = (e: MouseEvent) => {
    if (e.target === link.current) {
      card.current?.classList.add('hover');
    } else {
      card.current?.classList.remove('hover');
    }
  };

  return (
    <article className="card" onMouseOver={onMouseOver} ref={card}>
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="content">
        <ul role="list" className="cluster">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
        <p className="pubdate">
          Published <time dateTime={item.datePublished}>{formattedDate}</time>
        </p>
        <h2 className="title">
          <a href="#" ref={link}>
            {item.title}
          </a>
        </h2>
        <p className="description">{item.description}</p>
        <p className="byline">
          <img src={item.author.image} alt="" width="32" height="32" />
          <span>{item.author.name}</span>
        </p>
      </div>
    </article>
  );
}

export default Card;

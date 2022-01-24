import React from 'react';
import MoviesData from '../model/MoviesInterface';
import { TrashFill, SortDown, SortUp, PencilSquare } from 'react-bootstrap-icons';
import Button from "./../components/Button";
import './Movies.scss';

interface MoviesProps {
  movies: MoviesData[];
}

const Movies: React.FC<MoviesProps> = ({ movies }: MoviesProps) => {
  const [list, setList] = React.useState(movies);
  const [name, setName] = React.useState("");
  const [isToggled, setIsToggled] = React.useState(false);
  const [current, setCurrent] = React.useState(-1);
  const [direction, setDirection] = React.useState(true);
  const [sortType, setSortType] = React.useState("");
  const [isFirst, setIsFirst] = React.useState(true);

  function handleRemove(id: number) {
    if (id !== current) {
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
    }
  }

  function handleToggleComplete(id: number) {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          title: name
        };
        return updatedItem;
      }
      return item;
    });

    setList(newList);
    setIsToggled(false);
    setCurrent(-1);
  }

  function handleBool(id: number, title: string) {
    setName(title);
    setCurrent(id);
    setIsToggled(true);
  }

  function sortArray(type: string) {
    if (type === "rating" && direction === true) {
      const sorted = list.sort((a, b) => b["rating"] - a["rating"]);
      setList(sorted);
    }
    else if (type === "title" && direction === true) {
      const sorted = list.sort((a, b) => a["title"].localeCompare(b["title"]));
      setList(sorted);
    }
    else if (type === "year" && direction === true) {
      const sorted = list.sort((a, b) => b["year"] - a["year"]);
      setList(sorted);
    }
    else if (type === "rating" && direction === false) {
      const sorted = list.sort((a, b) => a["rating"] - b["rating"]);
      setList(sorted);
    }
    else if (type === "title" && direction === false) {
      const sorted = list.sort((a, b) => b["title"].localeCompare(a["title"]));
      setList(sorted);
    }
    else if (type === "year" && direction === false) {
      const sorted = list.sort((a, b) => a["year"] - b["year"]);
      setList(sorted);
    }

    setSortType(type);
  }

  function changeDirection() {
    setDirection(!direction);
    sortArray(sortType);
  }

  function ListDisplay() {
    sortArray(sortType);
    return (
      <ul className='list-group'>
        {list.map((item) => (
          <li key={item.id} className={item.id === current ? 'list-group-item list-group-item-primary' : 'list-group-item'}>
            <img src={item.thumbnail} alt={item.title} className='picture' />
            <span className='title'>{item.title}</span>
            <span className='rating'> {item.rating} </span>
            <span className='year'>{item.year}</span>
            <span className='button'>
              <Button click={() => handleRemove(item.id)}> <TrashFill /> </Button>
            </span>
            <span className='button'>
              <Button click={() => handleBool(item.id, item.title)}> <PencilSquare /> </Button>
            </span>
          </li>))}
      </ul>);
  }

  return (
    <div>
      <div className='leaderboard'>
        <div>
          {isFirst === true && sortArray("rating")}
          {isFirst === true && setIsFirst(!isFirst)}
          {isToggled === true &&
            <form className='form'>
              <label><b>Enter title:</b> <input className='form-input'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              </label> <Button className={name === "" ? 'btn btn-primary disabled' : 'btn btn-primary'} click={() => handleToggleComplete(current)}>Save</Button>
            </form>
          }
            <div className='select'>
              <select className='select-select' onChange={(e) => sortArray(e.target.value)}>
                <option value="rating">Rating</option>
                <option value="title">Alphabetical</option>
                <option value="year">Year</option>
              </select >
              <Button className='btn btn-outline-secondary' click={() => changeDirection()}>{direction !== true ? <SortUp /> : <SortDown />}</Button>
            </div>
          </div>
        <ListDisplay></ListDisplay>
      </div>
    </div>
  );
}

export default Movies;
import Card from 'src/components/Card';
import landscape from 'src/assets/images/licensed-image.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

const Categories = () => {
  const recipeAuthor = 'Jhon,';
  const recipeItem = {
    title: 'Randonnée nocturne à Wanaka',
    date: '9 janvier 2021',
    image: landscape,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores vel illo porro necessitatibus tenetur, facilis nam...',
  };

  const like = 193;
  const isLiked = true;


  const categories = useSelector((state) => (state.categories));

  return (
    <main>
      <div className="slider">
        <div className="cards">
          <div className="event">
            <a href="#">
              <h1 className="event-tittle">
                {categories[0].option}
              </h1>
            </a>
          </div>
          <div className="card-header">
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
          </div>
          <div className="event">
            <a href="#">
              <h1 className="event-tittle">
                {categories[1].option}
              </h1>
            </a>
          </div>
          <div className="card-header">
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
          </div>
          <div className="event">
            <a href="#">
              <h1 className="event-tittle">
                {categories[2].option}
              </h1>
            </a>
          </div>
          <div className="card-header">
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
          </div>
          <div className="event">
            <a href="#">
              <h1 className="event-tittle">
                {categories[3].option}
              </h1>
            </a>
          </div>
          <div className="card-header">
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;

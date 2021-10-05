import Card from 'src/components/Card';
import { useSelector } from 'react-redux';
import './style.scss';

const Categories = () => {
  const recipeAuthor = 'Jhon,';
  const like = 193;
  const isLiked = true;

  const categories = useSelector((state) => (state.searchBar.categoriesList));
  const listEvents = useSelector((state) => state.events.list);


  return (
    <main>
      <div className="cards">
        {categories.slice(0, 3).map((currentCategory) => (

          <div className="category">
            <div className="event">
              <a href="#">
                <h1 className="event-tittle">
                  {currentCategory.name}
                </h1>
              </a>
            </div>
            <div className="card-header">
              {listEvents.slice(0, 3).map((currentEvent) => (
                <Card
                  key={currentEvent.id}
                  title={currentEvent.title}
                  resume={currentEvent.resume}
                  date={currentEvent.startAt}
                  image={currentEvent.categories[0].image}
                  liked={isLiked}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Categories;

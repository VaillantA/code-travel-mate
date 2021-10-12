/* import PropTypes from 'prop-types'; */
import { useSelector } from 'react-redux';
import Card from 'src/components/Card';
/* import './style.scss'; */

const FavorisCards = () => {
  /* const categories = useSelector((state) => (state.searchBar.categoriesList)); */
  const createdEventList = useSelector((state) => state.profil.createdEventList);
  return (
    <section className="cards">
     <div className="cards">
        {/* {categories.slice(0, 3).map((currentCategory) => ( */}

          <div className="category">
            <div className="">
              <a href="#">
                {/* <h1 className="event-tittle">
                  {currentCategory.name}
                </h1> */}
              </a>
            </div> 
            <div className="card-header">
              {createdEventList.slice(0, 3).map((currentEvent) => (
                <Card
                  key={currentEvent.id}
                  title={currentEvent.title}
                  resume={currentEvent.resume}
                  date={currentEvent.startAt}
                  image={currentEvent.categories[0].image} 
                  /* liked={isLiked} */
                />
              ))}
            </div>
          </div>
        {/* ))} */}
      </div>
    </section>
  )
}
  


/* FavorisCards.propTypes = {

}; */

export default FavorisCards;

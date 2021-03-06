/* import PropTypes from 'prop-types'; */
import { useSelector } from 'react-redux';
import Card from 'src/components/Card';
/* import './style.scss'; */

const ProfilCards = () => {
  /* const categories = useSelector((state) => (state.searchBar.categoriesList)); */
  const listEvents = useSelector((state) => state.profil.eventsList);
  return (
    <section className="cards">
     <div className="cards">
        {/* {categories.slice(0, 3).map((currentCategory) => ( */}

          <div className="category">
            
            <div className="card-header">
              {listEvents.slice(0, 3).map((currentEvent) => (
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
  


/* ProfilCards.propTypes = {

}; */

export default ProfilCards;

import React, {Component} from 'react'
import {TopReview} from './TopReview'
import {connect} from 'react-redux'
import {getReviews, clearReviews} from '../actions/reviewActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';


export class TopReviewsList extends Component {

    // state = {
    //   topReviews: []
    // }
  
    // _fetchTopReviews = () => {
    //   fetch(`http://localhost:8000/api/publicaciones/`)
    //   .then(res => res.json())
    //   .then(topReviews => {
    //     this.setState({ topReviews })
    //   }) 
    // }

    static propTypes = {
      reviews: PropTypes.array.isRequired,
      getReviews: PropTypes.func.isRequired,
      clearReviews: PropTypes.func.isRequired,
      isLoading: PropTypes.bool
    }

    componentDidMount() {
      this.props.getReviews()
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearReviews()
    }
  
    _renderTopReviews = () => {
      return this.props.reviews.map( topReview => {
        return (
          <TopReview 
            key={topReview.id} 
            text={topReview.text}
            rating={topReview.rating}
            difficulty={topReview.difficulty}
            date={topReview.date}
            user={topReview.user}
            entity={topReview.entity}
            recomendations_count={topReview.recomendations_count}
            user_name={topReview.user_name}
            entity_name={topReview.entity_name}
            entity_type={topReview.entity_type}
            />
          );
      } )
    }
  
    render () {

      const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Top reseñas</h5>
          </div>
          <div className="columns is-multiline m-2">
          {
            this.props.isLoading ?
              <React.Fragment>
                {
                  skeletons.map( ske => {
                    return (
                      <div key={ske} className="column is-one-quarter">
                        <div className="columns is-multiline">
                          <div className="column is-full pb-1">
                            <Skeleton variant="rect" width={255} height={100} />
                          </div>
                          <div className="column is-full pt-0 pb-1">
                            <Skeleton variant="rect" width={130} height={20} />
                          </div>
                          <div className="column pt-0">
                            <Skeleton variant="rect" width={70} height={20} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </React.Fragment>
              :
              this._renderTopReviews()
          }
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  reviews : state.reviews.reviews,
  isLoading: state.reviews.isLoading
});

export default connect(mapStateToProps, {getReviews, clearReviews})(TopReviewsList);
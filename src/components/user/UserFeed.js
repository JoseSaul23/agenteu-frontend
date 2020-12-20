import React, {Component} from 'react'
import UserListReviews from '../user/UserListReviews'
import {BiNews} from 'react-icons/bi'
import {RightPanel} from '../common/RightPanel'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUniversityOptions, getSchoolOptions, setSchool, setUniversity, clearOptions} from '../actions/userFeedActions'
import {updateUser} from '../actions/authActions'
import PropTypes from 'prop-types'

export class UserFeed extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        getUniversityOptions: PropTypes.func.isRequired,
        getSchoolOptions: PropTypes.func.isRequired,
        setUniversity: PropTypes.func.isRequired,
        setSchool: PropTypes.func.isRequired,
        clearOptions: PropTypes.func.isRequired,
        userFeed: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
        user: PropTypes.object
    }

    componentDidMount() {
        // cargar lista y poner universidad y escuela de usuario si existe
        this.props.getUniversityOptions()
        if(this.props.user){
            if(this.props.user.university){
                this.props.setUniversity(this.props.user.university)
                this.props.getSchoolOptions(this.props.user.university)
                this.props.setSchool(this.props.user.school)
            }
        }
    }
    
    componentDidUpdate(prevProps) {
        if( prevProps.user !== this.props.user){
            if(this.props.user.university){
                this.props.setUniversity(this.props.user.university)
                this.props.getSchoolOptions(this.props.user.university)
                this.props.setSchool(this.props.user.school)
            }
        }
    }

    componentWillUnmount() {
        this.props.clearOptions()
    }

    _handleUniversity = (e) => {
        this.props.setUniversity(e.target.value)
        if(e.target.value !== ""){
            this.props.getSchoolOptions(e.target.value)
        }
    }

    _handleSchool = (e) => {
        const {user, userFeed} = this.props
        this.props.setSchool(e.target.value)
        this.props.updateUser({ ...user, university: userFeed.university, school: e.target.value })
    }

    render () {

        const {
            universityOptions,
            schoolOptions,
            university,
            school,
        } = this.props.userFeed
        
        const {user} = this.props

        if (!this.props.isAuthenticated){
            return (
                <div className="columns pt-6">
                    <div className="column is-half is-offset-one-quarter has-text-centered pt-6">
                        <div className="m-5">
                            <BiNews className="is-size-1" />
                        </div>
                        <div className="m-5">
                            <h4 className="title is-4">Mira las ultimas reseñas</h4>
                        </div>
                        <div className="m-5">
                            <p>
                                Inicia sesión para ver las ultimas reseñas de tu universidad, tu escuela y los profesores de tu escuela
                            </p>
                        </div>
                        <div className="m-5">
                            <Link to="/iniciar-sesion">
                                <button className="button is-link">Iniciar sesión</button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column m-5" >
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <div className="select is-small">
                                        <select 
                                            onChange={this._handleUniversity}
                                            value={university ? university : ""}
                                        >
                                            <option value="">Selecciona tu universidad</option>
                                            {
                                                universityOptions.map( university_option => {
                                                return (
                                                        <option 
                                                            key={university_option.id}
                                                            value={university_option.id}
                                                        >
                                                            {university_option.name}
                                                        </option>
                                                )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="select is-small">
                                        {
                                            <select 
                                                onChange={this._handleSchool}
                                                value={school ? school : ""}
                                            >
                                                <option value="">Selecciona tu escuela</option>
                                                {
                                                    schoolOptions.map( option => {
                                                    return (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        );
                                                    })
                                                }
                                            </select> 
                                        } 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-four-fifths mt-2">
                            {
                                user.university ?
                                <UserListReviews review_type="feed"/> :
                                <div className="has-text-centered">
                                    <p>
                                        Elige para ver las reseñas de
                                        tu universidad, tu escuela y los profesores de tu escuela
                                    </p>    
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userFeed: state.userFeed,
    user: state.auth.user,
});

export default connect(
    mapStateToProps, 
    {getUniversityOptions, getSchoolOptions, setSchool, setUniversity, clearOptions, updateUser}
)(UserFeed);
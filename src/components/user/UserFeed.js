import React, {Component} from 'react'
import UserListReviews from '../user/UserListReviews'
import {BiNews} from 'react-icons/bi'
import RightPanel from '../common/RightPanel'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUniversityOptions, getSchoolOptions, setSchool, setUniversity, clearOptions} from '../actions/userFeedActions'
import {updateUser} from '../actions/authActions'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { string } from 'prop-types'


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
        if(prevProps.user !== this.props.user){
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

    _handleUniversity = (e, newValue) => {
        if(newValue !== null){
            this.props.setUniversity(newValue.id)
            this.props.getSchoolOptions(newValue.id)
        }
    }

    _handleSchool = (e, newValue) => {
        const {user, userFeed} = this.props
        if(newValue !== null){
            // this.props.setSchool(newValue.id)
            this.props.updateUser({ 
                ...user,
                university: userFeed.university,
                school: newValue.id 
            })
        }
    }

    render () {

        const {
            universityOptions,
            schoolOptions,
            university,
            school,
            loadingUniversityOptions,
            loadingSchoolOptions,
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
                                Inicia sesión para ver las ultimas reseñas de tu universidad,
                                tu escuela y los profesores de tu escuela
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
                                {
                                    loadingUniversityOptions ?
                                    <p>Loading</p>
                                    :
                                    <Autocomplete
                                        id="combo-box-uni"
                                        options={universityOptions[0] ? universityOptions : []}
                                        getOptionLabel={(option) => option.name}
                                        style={{ width: 300 }}
                                        onChange={this._handleUniversity}
                                        value={university ? universityOptions.find(option => option.id===university) : null}
                                        renderInput={(params) => 
                                            <TextField {...params} label="Selecciona tu universidad" variant="outlined" 
                                        />}
                                    />
                                }
                                </div>
                                <div className="column">
                                    {
                                        loadingSchoolOptions ?
                                        <p>Loading</p>
                                        :
                                        <Autocomplete
                                            id="combo-box-school"
                                            options={schoolOptions[0] ? schoolOptions : []}
                                            getOptionLabel={(option) => option.name}
                                            style={{ width: 300 }}
                                            onChange={this._handleSchool}
                                            value={school ? schoolOptions.find( option => option.id === school ) : null}
                                            renderInput={(params) => 
                                                <TextField {...params} label="Selecciona tu escuela" variant="outlined" 
                                            />}
                                        />
                                    } 
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
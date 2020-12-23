import React, {Component} from 'react'
import SubscriptionProfessor from '../professor/SubscriptionProfessor'
import SubscriptionSchool from '../school/SubscriptionSchool'
import SubscriptionUniversity from '../university/SubscriptionUniversity'
import {connect} from 'react-redux'
import {getSubscriptions, clearSubscriptions} from '../actions/subscriptionsActions'
import PropTypes from 'prop-types'


export class SubscriptionsList extends Component {

    static propTypes = {
        getSubscriptions: PropTypes.func.isRequired,
        clearSubscriptions:PropTypes.func.isRequired,
        subscriptions: PropTypes.array.isRequired,
        areLoading: PropTypes.bool.isRequired,
    }

    componentDidMount() {
        this.props.getSubscriptions(this.props.entity)
    }

    componentDidUpdate(prevProps){
        if(prevProps.entity !== this.props.entity){
            this.props.getSubscriptions(this.props.entity)
        }
    }

    componentWillUnmount() {
        this.props.clearSubscriptions()
        // this.props.clearErrors
    }

    _renderSubscriptions = () => {
        if(this.props.entity === "professors"){
            if(this.props.subscriptions.length === 0){
                return <div>No tienes suscripciones a profesores</div>
            }
            return (
                this.props.subscriptions.map( professor => {
                    return(
                        <SubscriptionProfessor
                            key={professor.id}
                            id={professor.id} 
                            name={professor.name}
                            professor_university={professor.professor_university}
                            professor_school={professor.professor_school}
                            professor_university_name={professor.professor_university_name}
                            professor_school_name={professor.professor_school_name}
                            subscribers={professor.subscribers}  
                        />
                    );
                })
            );
        }
        if(this.props.entity === "schools"){
            if(this.props.subscriptions.length === 0){
                return <div>No tienes suscripciones a escuelas</div>
            }
            return (
                this.props.subscriptions.map( school => {
                    return(
                        <SubscriptionSchool
                            key={school.id}
                            id={school.id} 
                            name={school.name}
                            school_university={school.school_university}
                            school_university_name={school.school_university_name}
                            subscribers={school.subscribers} 
                        />
                    );
                })
            );
        }
        if(this.props.entity === "universities"){
            if(this.props.subscriptions.length === 0){
                return <div>No tienes suscripciones a universidades</div>
            }
            return (
                this.props.subscriptions.map( university => {
                    return(
                        <SubscriptionUniversity
                            key={university.id}
                            id={university.id} 
                            name={university.name}
                            subscribers={university.subscribers}
                        />
                    );
                })
            );
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.areLoading ?
                    <div className="columns">
                        <div className="column has-text-centered">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                    </div> :
                    this._renderSubscriptions()
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    subscriptions: state.subscriptions.subscriptions,
    areLoading: state.subscriptions.areLoading
})

export default connect(mapStateToProps, {getSubscriptions, clearSubscriptions})(SubscriptionsList)
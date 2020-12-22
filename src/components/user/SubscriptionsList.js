import React, {Component} from 'react'
import {SubscriptionProfessor} from '../professor/SubscriptionProfessor'
import {SubscriptionSchool} from '../school/SubscriptionSchool'
import {SubscriptionUniversity} from '../university/SubscriptionUniversity'
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
    }

    _renderSubscriptions = () => {
        if(this.props.entity === "professors"){
            return (
                this.props.subscriptions.map( professor => {
                    return(
                        <SubscriptionProfessor
                            key={professor.id}
                            id={professor.id} 
                            name={professor.name}
                            professor_university_name={professor.professor_university_name}
                            professor_school_name={professor.professor_school_name}  
                        />
                    );
                })
            );
        }
        if(this.props.entity === "schools"){
            return (
                this.props.subscriptions.map( school => {
                    return(
                        <SubscriptionSchool
                            key={school.id}
                            id={school.id} 
                            name={school.name}
                            school_university_name={school.school_university_name} 
                        />
                    );
                })
            );
        }
        if(this.props.entity === "universities"){
            return (
                this.props.subscriptions.map( university => {
                    return(
                        <SubscriptionUniversity
                            key={university.id}
                            id={university.id} 
                            name={university.name}
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
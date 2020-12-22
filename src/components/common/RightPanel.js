import React, {Component} from 'react'
import LikelyProfessorsList from '../professor/LikelyProfessorsList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class RightPanel extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render () {
        return (
            <div className="column right-side-panel is-hidden-mobile">
                {
                    this.props.isAuthenticated ? 
                        <LikelyProfessorsList /> :
                        ""
                }
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(RightPanel)
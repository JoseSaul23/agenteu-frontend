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
            <div className="column is-4-desktop is-3-fullhd right-side-panel is-hidden-touch">
                <div className="columns is-multiline" >
                    <div className="column is-full">
                        {/* <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p>
                        <p>Espacio publicitario</p> */}
                    </div>
                    <div className="column">
                    {
                        this.props.isAuthenticated
                        ?
                            <LikelyProfessorsList />
                        :
                            ""
                    }
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(RightPanel)
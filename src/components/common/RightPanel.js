import React, {Component} from 'react'
import {ProfessorsInSideList} from '../professor/ProfessorsInSideList'

export class RightPanel extends Component {
    render () {
        return (
            <div className="column right-side-panel is-hidden-mobile">
                {
                    (this.props.sideList === "universidades" || this.props.sideList === "escuelas")
                    ?   <ProfessorsInSideList subject={this.props.sideList} id={this.props.id}/>
                    :   <div>Side para perfil de profesores y Usuarios</div>
                    // <UserSideList />
                    // <ProfessorSideList />
                }
            </div>
        );
    }
} 
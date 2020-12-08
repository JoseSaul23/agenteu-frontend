import React, {Component} from 'react'

export class SideList extends Component { //prop, entity: univer, school, professor, user.
    render () {
        return (
            <div className="columns is-multiline side-list m-6">
                <div className="column list-border-bottom">
                    <p className="black-title has-text-weight-medium big-text">Top profesores</p>
                </div>
                <div className="column is-full list-border-bottom has-text-weight-medium pt-2 pb-2">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds closer-letters">
                            <p className="black-title">Amaranta Jose Galileo Gutierrez</p>
                            <p>30 reseñas</p>
                        </div>
                        <div className="column">
                            <button class="button small-label is-link is-outlined">Ver</button>
                        </div>
                    </div>
                </div>
                <div className="column is-full list-border-bottom has-text-weight-medium pt-2 pb-2">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds closer-letters">
                            <p className="black-title">Amaranta Jose Galileo Gutierrez</p>
                            <p>30 reseñas</p>
                        </div>
                        <div className="column">
                            <button class="button small-label is-link is-outlined">Ver</button>
                        </div>
                    </div>
                </div>
                <div className="column is-full list-border-bottom has-text-weight-medium pt-2 pb-2">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds closer-letters">
                            <p className="black-title">Amaranta Jose Galileo Gutierrez</p>
                            <p>30 reseñas</p>
                        </div>
                        <div className="column">
                            <button class="button small-label is-link is-outlined">Ver</button>
                        </div>
                    </div>
                </div>
                <div className="column is-full list-border-bottom has-text-weight-medium pt-2 pb-2">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds closer-letters">
                            <p className="black-title">Amaranta Jose Galileo Gutierrez</p>
                            <p>30 reseñas</p>
                        </div>
                        <div className="column">
                            <button class="button small-label is-link is-outlined">Ver</button>
                        </div>
                    </div>
                </div>
                <div className="column is-full has-text-centered has-text-link">
                    Ver más
                </div>
            </div>
        );
    }
}
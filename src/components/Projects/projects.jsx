import React from "react";

import {Card} from 'react-bootstrap'
import './projects.css'

const Projects = () => {
    return (
        <div className="my-projects">
            <div className="card-first">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde earum magni adipisci aliquid sunt consequuntur odio libero, ea cupiditate? Quidem earum impedit aut adipisci repellat itaque ipsam natus neque?
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">My small footer</small>
                    </Card.Footer>
                </Card>
            </div>
            <div className="card-second">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde earum magni adipisci aliquid sunt consequuntur odio libero, ea cupiditate? Quidem earum impedit aut adipisci repellat itaque ipsam natus neque?
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">My small footer</small>
                    </Card.Footer>
                </Card>
            </div>
            <div className="card-third">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde earum magni adipisci aliquid sunt consequuntur odio libero, ea cupiditate? Quidem earum impedit aut adipisci repellat itaque ipsam natus neque?
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">My small footer</small>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Projects
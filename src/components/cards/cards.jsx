import React from 'react'
import {Container, Row, Col, Card} from 'reactstrap'
import styles from './cards.module.css'

export const Cards = ( {data : { confirmed, recovered, deaths, lastUpdate }}) => {
    if (confirmed === undefined){
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Loading...</p>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <div>
            <Row>
                <Col sm="12" md="4">
                    <Card className={styles.singleCard} >
                        <h3>Infected</h3>
                        <h1>{confirmed.value}</h1>
                        <p>{new Date(lastUpdate).toDateString()}</p>
                        <div className={`${styles.alert} ${styles.yellowColor}`}></div>
                    </Card>
                </Col>
                <Col sm="12" md="4">
                    <Card className={styles.singleCard}>
                        <h3>Recovered</h3>
                        <h1>{recovered.value}</h1>
                        <p>{new Date(lastUpdate).toDateString()}</p>
                        <div className={`${styles.alert} ${styles.greenColor}`}></div>
                    </Card>
                </Col>
                <Col sm="12" md="4">
                    <Card className={styles.singleCard}>
                        <h3>Deaths</h3>
                        <h1>{deaths.value}</h1>
                        <p>{new Date(lastUpdate).toDateString()}</p>
                        <div className={`${styles.alert} ${styles.redColor}`}></div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

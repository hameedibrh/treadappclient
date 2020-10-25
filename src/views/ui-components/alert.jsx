import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Alerts = () => {

    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>

            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Meals Plan for Today
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            Breakfast: Raw Egg (2 PC)
              </Alert>
                        <Alert color="secondary">
                            Lunch: Curd Rice
              </Alert>
                        <Alert color="success">
                            Snacks: Biscuits
              </Alert>
                        <Alert color="danger">
                            Dinner: Idly 
              </Alert>
                        
                        
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Meals Plan for Tomorrow
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            Breakfast: Raw Egg (2 PC)
              </Alert>
                        <Alert color="secondary">
                            Lunch: Curd Rice
              </Alert>
                        <Alert color="success">
                            Snacks: Biscuits
              </Alert>
                        <Alert color="danger">
                            Dinner: Idly 
              </Alert>
                        
                        
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Meals Plan for Tuesday
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            Breakfast: Raw Egg (2 PC)
              </Alert>
                        <Alert color="secondary">
                            Lunch: Curd Rice
              </Alert>
                        <Alert color="success">
                            Snacks: Biscuits
              </Alert>
                        <Alert color="danger">
                            Dinner: Idly 
              </Alert>
                        
                        
                    </div>
                </CardBody>
            </Card>


        </div>
    );
}

export default Alerts;

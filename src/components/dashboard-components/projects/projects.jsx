import React from "react";



import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Food Consumption History</CardTitle>
                        <CardSubtitle>Overview of Latest Month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Food</th>
                            <th className="border-0">Time of Consumption</th>

                            <th className="border-0">Healty Food Status</th>
                            <th className="border-0">Calories</th>
                            <th className="border-0">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Dosaa</h5><span>Followed as per Instructor</span></div>
                                </div>
                            </td>
                            <td>Breakfast</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp1"></i>

                            </td>
                            <td>800</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">09/11/2020</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Biryani</h5><span>Personal Choice</span></div>
                                </div>
                            </td>
                            <td>Lunch</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp2"></i>

                            </td>
                            <td>1200</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">09/11/2020</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Chapathi</h5><span>Followed as per Instructor</span></div>
                                </div>
                            </td>
                            <td>Dinner</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>350</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">08/11/2020</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Egg</h5><span>Followed as per Instructor</span></div>
                                </div>
                            </td>
                            <td>Breakfast</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp4"></i>

                            </td>
                            <td>400</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">08/11/2000</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;

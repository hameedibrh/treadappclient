import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Notifications</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div> Your meal plan has been changed by Trainer <span className="ml-auto font-12 text-muted">Just Now</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div> Yor subscription is about end. <span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="ti-shopping-cart"></i></div> New suppliments suggestions.<span className="ml-auto font-12 text-muted">31 Oct</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Your password has been password.<span className="ml-auto font-12 text-muted">30 Oct</span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;

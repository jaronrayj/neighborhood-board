import React, { Component } from "react";
// import API from "../../utils/Api";
import MarketItem from '../MarketItem';
import { Card } from 'semantic-ui-react';
import MarketplaceModal from '../MarketplaceModal';
import Axios from "axios";
import "./style.css";



// function Marketplace() {
// const events = useEvent();

// const items = [{
//     username: "username",
//     title: "title",
//     description: `Trust fund organic quinoa farm-to-table vaporware, meh 
//         brooklyn four dollar toast cold-pressed tofu. Hashtag lomo 
//         thundercats coloring book, pok pok pitchfork irony chillwave 
//         schlitz craft beer roof party +1 venmo chicharrones glossier. 
//         Kale chips sartorial whatever forage roof party squid food`,
//     price: "4.25",
//     contactPhone: "(801)555-5555",
//     contactEmail: "email@email.com",
//     img: "https://via.placeholder.com/50x50"
// },
// {
//     username: "username",
//     title: "title",
//     description: `Trust fund organic quinoa farm-to-table vaporware, meh 
//         brooklyn four dollar toast cold-pressed tofu. Hashtag lomo 
//         thundercats coloring book, pok pok pitchfork irony chillwave 
//         schlitz craft beer roof party +1 venmo chicharrones glossier. 
//         Kale chips sartorial whatever forage roof party squid food`,
//     price: "4.25",
//     contactPhone: "(801)555-5555",
//     contactEmail: "email@email.com",
//     img: "https://via.placeholder.com/50x50"
// }];

class Marketplace extends Component {

    state = {
        savedMarketItems: [],
        items: []
    };


    //when this component mounts, grab all market items that were saved to the database 
    componentDidMount() {
        this.loadData();
    }

    // loadData = () => {
    //     const currentComponent = this;


    // }

    loadData = () => {
        const currentComponent = this;

        Axios.get('/api/markets').then(function (res) {
            currentComponent.setState({ items: res.data },
                console.log("TCL: Marketplace -> loadData -> items", res.data)
                )
        }).catch(function (err) {
            console.log(err)
        });

    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header>Marketplace
                        <MarketplaceModal
                                loadData={this.loadData}
                            />
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {
                            // this.state.savedMarketItems
                            this.state.items.map(e =>
                                <MarketItem
                                    key={e._id}
                                    username={e.username}
                                    title={e.title}
                                    description={e.description}
                                    price={e.price}
                                    contactPhone={e.contactPhone}
                                    imageName={e.imageName}
                                    imageData={e.imageData}
                                // contactEmail={e.contactEmail}

                                />
                            )
                        }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
// }

export default Marketplace;


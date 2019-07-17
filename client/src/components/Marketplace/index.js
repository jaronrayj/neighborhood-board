import React, { Component } from "react";
// import API from "../../utils/Api";
import MarketItem from '../MarketItem';
import { Card } from 'semantic-ui-react';
import MarketplaceModal from '../MarketplaceModal';
import Axios from "axios";



// function Marketplace() {
// const events = useEvent();

// const items = [{
//     userId: "userId",
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
//     userId: "userId",
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

        const currentComponent = this;

        Axios.get('/api/markets').then(function (res) {
            currentComponent.setState({ items: res.data })
        }).catch(function (err) {
            console.log(err)
        });
    }

    render() {
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Marketplace
                        <MarketplaceModal />
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {
                            // this.state.savedMarketItems
                            this.state.items.map(e =>
                                <>
                                    <MarketItem
                                        userId={e.userId}
                                        title={e.title}
                                        description={e.description}
                                        price={e.price}
                                        contactPhone={e.contactPhone}
                                        contactEmail={e.contactEmail}

                                    />
                                </>
                            )
                        }
                    </Card.Content>
                </Card>
            </Card.Group>

        )
    }
}
// }

export default Marketplace;


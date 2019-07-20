import React, { Component } from "react";
// import API from "../../utils/Api";
import MarketItem from '../MarketItem';
import { Card } from 'semantic-ui-react';
import MarketplaceModal from '../MarketplaceModal';
import Axios from "axios";
import "./style.css";

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
            currentComponent.setState({ items: res.data })
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
                                    userId={e.userId}
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


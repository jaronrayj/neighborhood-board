import React from 'react';
// import useEvent from '../../hooks/useEvent';
import MarketItem from '../MarketItem'
import { Card } from 'semantic-ui-react'

function Marketplace() {
    // const events = useEvent();

    const items = [{
        userId: "userId",
        title: "title",
        description: `Trust fund organic quinoa farm-to-table vaporware, meh 
        brooklyn four dollar toast cold-pressed tofu. Hashtag lomo 
        thundercats coloring book, pok pok pitchfork irony chillwave 
        schlitz craft beer roof party +1 venmo chicharrones glossier. 
        Kale chips sartorial whatever forage roof party squid food`,
        price: "4.25",
        contactPhone: "(801)555-5555",
        contactEmail: "email@email.com",
        img: "https://via.placeholder.com/50x50"
    },
    {
        userId: "userId",
        title: "title",
        description: `Trust fund organic quinoa farm-to-table vaporware, meh 
        brooklyn four dollar toast cold-pressed tofu. Hashtag lomo 
        thundercats coloring book, pok pok pitchfork irony chillwave 
        schlitz craft beer roof party +1 venmo chicharrones glossier. 
        Kale chips sartorial whatever forage roof party squid food`,
        price: "4.25",
        contactPhone: "(801)555-5555",
        contactEmail: "email@email.com",
        img: "https://via.placeholder.com/50x50"
    }];

    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>Marketplace
                        
                    </Card.Header>
                </Card.Content>
                <Card.Content>

                    {
                        items.map(e =>
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

export default Marketplace;


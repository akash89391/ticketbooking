import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Input, Container } from 'semantic-ui-react';

const Unmount = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    return <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'white' }}>{date.toLocaleTimeString()}</span>;
};

export default function Nav() {
    const [activeItem, setActiveItem] = useState('Home');

    return (
        <Segment inverted>
            <Container>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name="Home"
                        as={Link} to="/Home"
                        active={activeItem === 'Home'}
                        onClick={() => setActiveItem('Home')}
                    />
                    <Menu.Item
                        name="About"
                        as={Link} to="/About"
                        active={activeItem === 'About'}
                        onClick={() => setActiveItem('About')}
                    />
                    <Menu.Item
                        name="Contact"
                        as={Link} to="/Contact"
                        active={activeItem === 'Contact'}
                        onClick={() => setActiveItem('Contact')}
                    />
                    <Menu.Item
                        name="Upcoming Movies"
                        as={Link} to="/Upcoming"
                        active={activeItem === 'Upcoming'}
                        onClick={() => setActiveItem('Upcoming')}
                    />
                    {/* Search Bar */}
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Input icon="search" placeholder="Search..." />
                        </Menu.Item>
                        {/* Clock */}
                        <Menu.Item>
                            <Unmount />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>
    );
}

import React from 'react';
import { Card, Grid, Image, Button } from 'semantic-ui-react';
import './style.css';

export default function Upcoming() {
  return (
    <div className="upcoming-container">
     
      <h2 className="upcoming-title">Upcoming Movies</h2>

      <Grid container columns={5} stackable className="movies-grid">
        {/* Movie Cards */}
        {[
          { src: './images/coolie.avif', title: 'Coolie' },
          { src: './images/thuglife.avif', title: 'Thug Life' },
          { src: './images/retro.avif', title: 'Retro' },
          { src: './images/jananayagan.avif', title: 'Jananayagan' },
          { src: './images/goodbadugly.avif', title: 'Good, Bad, Ugly' },
        ].map((movie, index) => (
          <Grid.Column key={index}>
            <Card className="movie-card">
              <Image src={movie.src} alt={movie.title} className="movie-image" />
              <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Description>
                  <Button primary className="book-button">Book Now</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

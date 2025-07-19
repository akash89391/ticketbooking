import React, { useState, useRef } from 'react';
import { Header, Image, Grid, Segment, Button, Dropdown } from 'semantic-ui-react';
import './style.css';

export default function Home() {
  const dialogRef = useRef(null);

  const initialMovies = [
    { key: 'amaran', name: 'Amaran', image: './images/amaran.avif', available: 100 },
    { key: 'gamechanger', name: 'Gamechanger', image: './images/gamechanger.avif', available: 80 },
    { key: 'kadhalikaneramilai', name: 'Kadhalikaneramilai', image: './images/kadhalikaneramilai.avif', available: 120 },
    { key: 'maharaja', name: 'Maharaja', image: './images/maharaja.avif', available: 50 },
    { key: 'manmadhan', name: 'Manmadhan', image: './images/manmadhan.avif', available: 70 },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovieKey, setSelectedMovieKey] = useState('');
  const [ticketCount, setTicketCount] = useState(null);

  const ticketOptions = [1, 2, 3, 4, 5].map(n => ({
    key: n,
    text: `${n} Ticket${n > 1 ? 's' : ''}`,
    value: n,
  }));

  const selectedMovie = movies.find(movie => movie.key === selectedMovieKey);

  const handleBookNow = () => {
    if (!selectedMovieKey || !ticketCount) {
      alert('Please select a movie and number of tickets');
      return;
    }

    if (ticketCount > selectedMovie.available) {
      alert(`Only ${selectedMovie.available} ticket(s) available for ${selectedMovie.name}`);
      return;
    }

    const updatedMovies = movies.map(movie =>
      movie.key === selectedMovieKey
        ? { ...movie, available: movie.available - ticketCount }
        : movie
    );
    setMovies(updatedMovies);

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <div className="home-container">
      <Header as="h1" textAlign="center" className="title">
        Movie Booking App
      </Header>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img 
    src="/images/cine.avif"
    alt="Movie Banner"
    style={{ width: '80%', maxWidth: '600px', borderRadius: '10px' }}
  />
</div>

      <Header as="h2" textAlign="center" className="subtitle">
        Book Your Movie Tickets
      </Header>

      <Segment>
        <Grid columns={2} stackable>
          <Grid.Column width={6} textAlign="center">
            {selectedMovie ? (
              <>
                <Image
                  src={selectedMovie.image}
                  alt={selectedMovie.name}
                  style={{
                    width: '200px',
                    borderRadius: '10px',
                    marginBottom: '10px',
                  }}
                  centered
                />
                <Header as="h4">{selectedMovie.name}</Header>
              </>
            ) : (
              <p>Select a movie to view poster</p>
            )}
          </Grid.Column>

          <Grid.Column width={10}>
            <div style={{ maxWidth: '300px', marginBottom: '1em' }}>
              <Dropdown
                placeholder="Select a Movie"
                selection
                options={movies.map(movie => ({
                  key: movie.key,
                  text: movie.name,
                  value: movie.key,
                }))}
                onChange={(e, { value }) => {
                  setSelectedMovieKey(value);
                  setTicketCount(null);
                }}
              />
            </div>

            {selectedMovie && (
              <p>
                <strong>Tickets Available:</strong> {selectedMovie.available}
              </p>
            )}

            <div style={{ maxWidth: '300px', margin: '1em 0' }}>
              <Dropdown
                placeholder="Select number of tickets"
                selection
                value={ticketCount}
                options={ticketOptions}
                onChange={(e, { value }) => setTicketCount(value)}
                disabled={!selectedMovie}
              />
            </div>

            <Button primary onClick={handleBookNow}>
              Book Now
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>

      {/* Confirmation Dialog */}
      <dialog ref={dialogRef}>
        <p>
          ✅ Your {ticketCount} ticket(s) for <strong>{selectedMovie?.name}</strong> have been booked successfully!
        </p>
        <button onClick={handleClose}>Close</button>
      </dialog>
    </div>
  );
}

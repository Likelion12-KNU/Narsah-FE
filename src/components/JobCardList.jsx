import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import "../style/JobCardList.css"

function JobCardList({license, affiliation, location}) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ license: '', affiliation: '', location: '' });


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/JobCard');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCards(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredCards = cards.filter(card =>
        card.name.includes(searchTerm) &&
        (license === '' || card.license === license) &&
        (affiliation === '' || card.affiliation === affiliation) &&
        (location === '' || card.location.includes(location))
    );


    if (loading)
        return <div>Loading...</div>;
    if (error)
        return <div>Error: {error.message}</div>;

    // default
    return (
        <div className='cardList'>
            {filteredCards.map((card) => (
                <JobCard
                    key={card.id}
                    id={card.id}
                    author={card.author}
                    name={card.name} 
                    license={card.license} 
                    affiliation={card.affiliation}
                    location={card.location}
                    
                />
            ))}
        </div>
    );
};

export default JobCardList;

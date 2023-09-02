// MainPage.js
import React, { useState, useEffect } from 'react';
import StylingComponent from './boxStyling';
import CharacterBox from './characterBox';
import OriginFetch from './originFetch';

const MainPage = () => {
    const [selectedType, setSelectedType] = useState('characters');
    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [characters, setCharacters] = useState([]);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiUrl = '/api/characters';
                if (selectedType === 'monsters') {
                    apiUrl = '/api/monsters';
                }

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedType]);

    const uniqueOrigins = [...new Set(characters.map((character) => character.origin))];

    const filteredCharacters = characters.filter((character) => {
        if (!selectedOrigin) {
            return true; // No filter selected, show all characters
        }
        return character.origin === selectedOrigin;
    });

    // Function to handle navigating to the next character
    const nextCharacter = () => {
        setCurrentCharacterIndex((prevIndex) =>
            prevIndex < filteredCharacters.length - 1 ? prevIndex + 1 : 0
        );
    };

    // Function to handle navigating to the previous character
    const prevCharacter = () => {
        setCurrentCharacterIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : filteredCharacters.length - 1
        );
    };

    // Function to select a random character
    const randomCharacter = () => {
        const randomIndex = Math.floor(Math.random() * filteredCharacters.length);
        setCurrentCharacterIndex(randomIndex);
    };

    return (
        <div className="main-page">
            <StylingComponent>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="characters"
                            checked={selectedType === 'characters'}
                            onChange={() => setSelectedType('characters')}
                        />
                        Characters
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="monsters"
                            checked={selectedType === 'monsters'}
                            onChange={() => setSelectedType('monsters')}
                        />
                        Monsters
                    </label>
                </div>
                <OriginFetch
                    origins={uniqueOrigins} // Pass the unique origins as a prop
                    selectedOrigin={selectedOrigin}
                    onSelectOrigin={(value) => setSelectedOrigin(value)}
                />
                <div>
                    <button onClick={prevCharacter}>Previous</button>
                    <button onClick={nextCharacter}>Next</button>
                    <button onClick={randomCharacter}>Random</button>
                </div>
            </StylingComponent>
            {filteredCharacters.length > 0 ? (
                <CharacterBox character={filteredCharacters[currentCharacterIndex]} />
            ) : (
                <p>No characters match the selected criteria.</p>
            )}
        </div>
    );
};

export default MainPage;

import React, { useState, useEffect } from 'react';
import StylingComponent from './boxStyling';
import CharacterBox from './characterBox';
import OriginFetch from './originFetch';

const MainPage = () => {
    const [selectedType, setSelectedType] = useState('characters');
    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [characters, setCharacters] = useState([]);
    const [monsters, setMonsters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
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

                if (selectedType === 'characters') {
                    setCharacters(data);
                } else if (selectedType === 'monsters') {
                    setMonsters(data);
                }

                if (data.length > 0) {
                    setSelectedCharacter(data[0]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedType]);

    const uniqueOrigins = [...new Set(characters.map((character) => character.origin))];

    const selectRandomCharacter = () => {
        const data = selectedType === 'characters' ? characters : monsters;
        if (data.length === 0) {
            return;
        }
        const randomIndex = Math.floor(Math.random() * data.length);
        setSelectedCharacter(data[randomIndex]);
        setCurrentCharacterIndex(randomIndex);
    };

    const selectNextCharacter = () => {
        const data = selectedType === 'characters' ? characters : monsters;
        if (data.length === 0) {
            return;
        }
        const newIndex = (currentCharacterIndex + 1) % data.length;
        setSelectedCharacter(data[newIndex]);
        setCurrentCharacterIndex(newIndex);
    };

    const selectPreviousCharacter = () => {
        const data = selectedType === 'characters' ? characters : monsters;
        if (data.length === 0) {
            return;
        }
        const newIndex =
            currentCharacterIndex === 0
                ? data.length - 1
                : currentCharacterIndex - 1;
        setSelectedCharacter(data[newIndex]);
        setCurrentCharacterIndex(newIndex);
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
                    origins={uniqueOrigins}
                    selectedOrigin={selectedOrigin}
                    onSelectOrigin={(value) => setSelectedOrigin(value)}
                    characters={selectedType === 'characters' ? characters : monsters}
                    onSelectCharacter={(character) => setSelectedCharacter(character)}
                />
                <div>
                    <button onClick={selectPreviousCharacter}>Previous</button>
                    <button onClick={selectNextCharacter}>Next</button>
                    <button onClick={selectRandomCharacter}>Random</button>
                </div>
            </StylingComponent>
            {selectedCharacter ? (
                <CharacterBox character={selectedCharacter} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MainPage;

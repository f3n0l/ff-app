import React, { useState, useEffect } from 'react';

const OriginFetch = ({ origins, selectedOrigin, onSelectOrigin, characters, onSelectCharacter }) => {
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [selectedCharacterName, setSelectedCharacterName] = useState('');

    useEffect(() => {
        if (selectedOrigin) {
            const filtered = characters.filter(
                (character) => character.origin === selectedOrigin
            );
            setFilteredCharacters(filtered);
            setSelectedCharacterName('');
        } else {
            setFilteredCharacters(characters);
            setSelectedCharacterName('');
        }
    }, [selectedOrigin, characters]);

    return (
        <div>
            <label>Select Origin:</label>
            <select
                value={selectedOrigin}
                onChange={(e) => {
                    onSelectOrigin(e.target.value);
                    setSelectedCharacterName('');
                }}
            >
                <option value="">All</option>
                {origins.map((origin) => (
                    <option key={origin} value={origin}>
                        {origin}
                    </option>
                ))}
            </select>
            {filteredCharacters.length > 0 ? (
                <>
                    <label>Select Character:</label>
                    <select
                        value={selectedCharacterName}
                        onChange={(e) => {
                            setSelectedCharacterName(e.target.value);
                            const selectedCharacter = filteredCharacters.find(
                                (character) => character.name === e.target.value
                            );
                            onSelectCharacter(selectedCharacter);
                        }}
                    >
                        <option value="">All</option>
                        {filteredCharacters.map((character) => (
                            <option key={character.id} value={character.name}>
                                {character.name}
                            </option>
                        ))}
                    </select>
                </>
            ) : null}
        </div>
    );
};

export default OriginFetch;


//doublecheck
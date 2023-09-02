// characterBox.js
import React from 'react';
import StylingComponent from './boxStyling'; // Import your styling component

const CharacterBox = ({ character }) => {
    return (
        <StylingComponent>
            <div className="character-box">
                <h2 className="character-name">{character.name}</h2>
                <img src={character.pictures[0].url} alt={character.name} className="character-image" />
                <ul className="character-info">
                    <li>Age: {character.age}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Race: {character.race}</li>
                    <li>Job: {character.job}</li>
                    <li>Height: {character.height}</li>
                    <li>Weight: {character.weight}</li>
                    <li>Origin: {character.origin}</li>
                    <li>Description: {character.description}</li>
                </ul>
            </div>
        </StylingComponent>
    );
};

export default CharacterBox;

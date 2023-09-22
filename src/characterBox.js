import React from 'react';
import StylingComponent from './boxStyling';

const CharacterBox = ({ character }) => {
    return (
        <StylingComponent>
            <div className="character-box">
                <div className="character-name">{character.name}</div>
                {character.pictures && character.pictures.length > 0 ? (
                    <img
                        className="character-image"
                        src={character.pictures[0].url}
                        alt={character.name}
                    />
                ) : null}
                <ul className="character-info">
                    <li>
                        <strong>Age:</strong> {character.age}
                    </li>
                    <li>
                        <strong>Gender:</strong> {character.gender}
                    </li>
                    <li>
                        <strong>Race:</strong> {character.race}
                    </li>
                    <li>
                        <strong>Job:</strong> {character.job}
                    </li>
                    <li>
                        <strong>Height:</strong> {character.height}
                    </li>
                    <li>
                        <strong>Weight:</strong> {character.weight}
                    </li>
                    <li>
                        <strong>Origin:</strong> {character.origin}
                    </li>
                    <li>
                        <strong>Description:</strong> {character.description}
                    </li>
                </ul>
            </div>
        </StylingComponent>
    );
};

export default CharacterBox;

//map??
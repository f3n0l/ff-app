import React from 'react';
import StylingComponent from './boxStyling';

const MonsterBox = ({ monster }) => {
    return (
        <StylingComponent>
            <div className="monster-box">
                <div className="monster-name">{monster.name}</div>
                {monster.picture && (
                    <img
                        className="monster-image"
                        src={monster.picture}
                        alt={monster.name}
                    />
                )}
                <ul className="monster-info">
                    <li>
                        <strong>Japanese Name:</strong> {monster.japaneseName}
                    </li>
                    <li>
                        <strong>Elemental Affinity:</strong> {monster.elementalAffinity || 'N/A'}
                    </li>
                    <li>
                        <strong>Elemental Weakness:</strong> {monster.elementalWeakness || 'N/A'}
                    </li>
                    <li>
                        <strong>Hit Points:</strong> {monster.hitPoints}
                    </li>
                    <li>
                        <strong>Mana Points:</strong> {monster.manaPoints}
                    </li>
                    <li>
                        <strong>Attack:</strong> {monster.attack}
                    </li>
                    <li>
                        <strong>Defense:</strong> {monster.defense}
                    </li>
                    <li>
                        <strong>Description:</strong> {monster.description}
                    </li>
                    <li>
                        <strong>Game:</strong> {monster.game}
                    </li>
                </ul>
            </div>
        </StylingComponent>
    );
};

export default MonsterBox;

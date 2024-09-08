import React, { useState, useEffect } from 'react';
import './counter.css';

//déclaration du composant Counter en tant que fonction fonctionnelle avec TypeScript
const Counter: React.FC = () => {
    //déclaration de l'état local 'count' avec la valeur initiale de 0
    const [count, setCount] = useState<number>(0);

    //utilisation de useEffect pour mettre à jour le titre du document chaque fois que 'count' change
    useEffect(() => {
        //mise à jour du titre du document avec la valeur actuelle de 'count'
        document.title = `Count: ${count}`;
    }, [count]); //dépendance sur 'count', donc l'effet se déclenche à chaque fois que 'count' change

    //fonction pour incrémenter le compteur
    const increment = () => {
        //mise à jour de l'état 'count' en augmentant sa valeur de 1
        setCount(count + 1);
    };

    //rendu du composant
    return (
        <div className="counter-container">
            {/*affichage de la valeur actuelle du compteur */}
            <p>Count: {count}</p>
            {/*bouton pour incrémenter le compteur, déclenche la fonction 'increment' au clic */}
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
};

//exportation du composant Counter pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Counter;

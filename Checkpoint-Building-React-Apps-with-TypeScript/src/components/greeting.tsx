import React from 'react';
import './greeting.css';

//déclaration de l'interface pour les propriétés du composant Greeting
interface GreetingProps {
    name: string; //propriété 'name' doit être une chaîne de caractères
}

//déclaration du composant Greeting en tant que fonction fonctionnelle avec TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    // Rendu du composant
    return (
        //conteneur principal du composant avec les styles définis dans 'greeting.css'
        <div className="greeting-container">
            {/*affichage d'un message de bienvenue avec le nom passé en tant que prop */}
            <h1>Hello, {name}!</h1>
        </div>
    );
};

//exportation du composant Greeting pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Greeting;

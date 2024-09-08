import React, { useEffect, useRef } from 'react';
import './NameModal.css';

//déclaration de l'interface pour les propriétés du composant NameModal
interface NameModalProps {
    isOpen: boolean; //indique si la modal est ouverte ou non
    onClose: () => void; //fonction appelée pour fermer la modal
    onSubmit: (name: string) => void; //fonction appelée pour soumettre le nom
}

//déclaration du composant NameModal en tant que fonction fonctionnelle avec TypeScript
const NameModal: React.FC<NameModalProps> = ({ isOpen, onClose, onSubmit }) => {
    //création d'une référence pour accéder à l'élément input
    const inputRef = useRef<HTMLInputElement>(null);

    //utilisation de useEffect pour mettre le focus sur l'input lorsque la modal s'ouvre
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus(); //met le focus sur l'input lorsqu'il est disponible
        }
    }, [isOpen]); //dépendance sur 'isOpen', donc l'effet se déclenche lorsque 'isOpen' change

    //fonction pour gérer la soumission du nom
    const handleSubmit = () => {
        if (inputRef.current) {
            onSubmit(inputRef.current.value); //passe la valeur de l'input à la fonction onSubmit
        }
    };

    //si la modal n'est pas ouverte, ne rien rendre
    if (!isOpen) return null;

    //rendu de la modal
    return (
        <div className="modal">
            <div className="modal-content">
                {/*champ de saisie pour le nom, avec une référence pour le focus automatique */}
                <input
                    ref={inputRef}
                    type="text"
                    className="modal-input"
                    placeholder="Enter your name"
                />
                <div className="modal-buttons">
                    {/*bouton pour soumettre le nom */}
                    <button className="modal-button modal-button-submit" onClick={handleSubmit}>
                        Submit
                    </button>
                    {/*bouton pour fermer la modal */}
                    <button className="modal-button modal-button-close" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

//exportation du composant NameModal pour qu'il puisse être utilisé dans d'autres parties de l'application
export default NameModal;

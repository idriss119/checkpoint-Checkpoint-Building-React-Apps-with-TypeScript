import React, { useReducer, useEffect, useRef } from 'react';
import Greeting from './components/greeting';
import Counter from './components/counter';
import NameModal from './components/NameModal';
import './App.css';

//définir les actions pour le reducer
type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'TOGGLE_MODAL'; payload: boolean };

//définir l'état du reducer
interface State {
    name: string;
    isModalOpen: boolean;
}

//fonction reducer pour gérer les actions
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload, isModalOpen: false };
        case 'TOGGLE_MODAL':
            return { ...state, isModalOpen: action.payload };
        default:
            return state;
    }
};

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', isModalOpen: false });

    //référence au bouton pour des interactions éventuelles
    const setNameButtonRef = useRef<HTMLButtonElement>(null);

    //fonction appelée lors de la soumission du nom dans le modal
    const handleNameSubmit = (newName: string) => {
        dispatch({ type: 'SET_NAME', payload: newName });
    };

    //effet pour gérer les opérations après le premier rendu
    useEffect(() => {
        console.log('Composant App rendu');
    }, []);

    return (
        <div className="app-container">
            <div className="greeting-section">
                <Greeting name={state.name} />
            </div>
            <Counter />
            <button
                className="button"
                onClick={() => dispatch({ type: 'TOGGLE_MODAL', payload: true })}
                ref={setNameButtonRef}
            >
                Set Name
            </button>
            <NameModal
                isOpen={state.isModalOpen}
                onClose={() => dispatch({ type: 'TOGGLE_MODAL', payload: false })}
                onSubmit={handleNameSubmit}
            />
        </div>
    );
}

export default App;

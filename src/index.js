import React from 'react';
import ReactDOM from 'react-dom/client';

const prutas = ["banana", "saging", "yellow na talong"]

const list = prutas.map((pruta) => <p>{pruta}</p>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(list);
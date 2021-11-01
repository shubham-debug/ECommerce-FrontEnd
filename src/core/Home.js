import React from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';

export default function Home(){
    return (
        <Base title="HOME PAGE" description="Welcome to the Store">
            <h1 className="text-white">Home Page</h1>
        </Base>
    );
}
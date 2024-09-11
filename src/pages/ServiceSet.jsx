import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import background from "../assets/Bg-from-Jakub.jpg"
import image from '../assets/Logo.svg'
import { Container } from 'react-bootstrap';
import BigColorfulBox from '../components/BigColorfulBox';

import { Outlet } from "react-router-dom"


export default function ServiceSet(){
  return (
    <>
      <h1>Hello world</h1>
      <Outlet />
      <h3>Eu sou um service Set</h3>
    </>
  );
}
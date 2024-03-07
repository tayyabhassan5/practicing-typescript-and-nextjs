import Image from "next/image";
import {NavBarFirst} from './navBarFirst'
import {HomePage} from './HomePage'
import {ContactFolder} from './ContactFolder'
import {FormComponent} from './FormComponent'

export default function Home() {
  return (
    <div>
    <NavBarFirst />
    <HomePage />
    <ContactFolder />   
    {/* <FormComponent /> */}
    </div>
    
  );
}

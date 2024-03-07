import FImage from './assets/christmas_collection.png';
import Image from 'next/image';
import { FormComponent } from './FormComponent';

export const ContactFolder = () => {
    return (

        <div className="bg-[url('/images/christmas_collection.png')] bg-no-repeat bg-cover bg-center h-screen">
            <div className="flex flex-1 justify-around">
                <div className="border border-pink-600 flex-wrap w-9">
                    <div className="mr overflow-hidden">Hello jnwe frejnd</div>
                </div>
                <div className="border border-pink-600"><FormComponent /></div>
            </div>

        </div>



    );
};

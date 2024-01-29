import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../stores/barButton';


export default function BarMenu() {
    // escribe en el store importado usando `.set`
    const $isMenuOpen = useStore(isMenuOpen);
    console.log($isMenuOpen)


    return(
        <>  
        {
        $isMenuOpen && 
        <div className="fixed top-0 right-0 h-screen w-screen bg-zinc-800 p-20 animated-div z-40 overflow-y-auto" aria-labelledby="dropdownDefaultButton">
            <div className='flex justify-center items-center bg-zinc-800 w-full text-white p-5'>
                <div className='flex justify-center items-center flex-col gap-10'>
                    <div class='w-48'>
                        <img src="/isolet.png" alt="" />
                    </div>
                    <h1 className='text-4xl font-light'>Isolet Salon</h1>
                    <div class="items-center gap-10 font-light uppercase text-sm tracking-wide flex flex-col z-50">
                        <a href="#servicios" class=" transition hover:bg-white/30  p-3  rounded" onClick={() => isMenuOpen.set(!$isMenuOpen)}>Servicios</a>
                        <a href="#about" class=" transition p-3 hover:bg-white/30   rounded" onClick={() => isMenuOpen.set(!$isMenuOpen)}>Conocenos</a>
                        <a href="#galeria" class=" transition p-3 hover:bg-white/30  rounded" onClick={() => isMenuOpen.set(!$isMenuOpen)}>Galeria</a>
                        <a href="#contacto" class="transition p-3 hover:bg-white/30   rounded" onClick={() => isMenuOpen.set(!$isMenuOpen)}>Contacto</a>
                    </div>
                </div>   
            </div>
        </div>
        }      
        </>
    )
}
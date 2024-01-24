import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../stores/barButton';


export default function BarMenu() {
    // escribe en el store importado usando `.set`
    const $isMenuOpen = useStore(isMenuOpen);
    console.log($isMenuOpen)

    return $isMenuOpen ? 
    <aside className='absolute top-0 bg-zinc-900'>...</aside> 
    : 
    null;
}
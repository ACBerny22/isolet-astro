import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../stores/barButton';
import { HiOutlineMenu } from "react-icons/hi";

export default function BarButton() {
    // escribe en el store importado usando `.set`

    const $isMenuOpen = useStore(isMenuOpen);

    console.log($isMenuOpen)

    return (
        <>
            <button className='hover:bg-white/10 flex items-center rounded transition p-3 z-50'>
                <button onClick={() => isMenuOpen.set(!$isMenuOpen)}><HiOutlineMenu /></button>
            </button>
        </>
    )
  }
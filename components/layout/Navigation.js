import {menu} from '../../content/site';
import Link from 'next/link';
import SVG from 'react-inlinesvg';

export default function Navigation({ background, sticky }) {
    return (
        <div id="header" style={{ zIndex: '9999'}}
             className={ `${background} ${sticky ? 'isTop' : null } absolute sticky w-full top-0 transition-all ease-in-out duration-150` }>
            <div className="container">
                <div className="row items-center justify-between py-5">
                    <div className="col-6 lg:col-4">
                        <Link href="/">
                           <SVG src="../svg/luckymedia.svg" className="fill-current text-black h-10 cursor-pointer" />
                        </Link>
                    </div>

                    <nav className="hidden col-6 lg:flex flex-row justify-end">
                        <ul className="flex flex-row">
                            {menu.map(item => {
                                return (
                                <li key={item.name} className="mr-4 xl:mr-6 last:mr-0 py-2 transition-all ease-in duration-100 menu-item">
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className="menu-wrap lg:hidden">
                        <input id="burger" type="checkbox"/>
                        <label htmlFor="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <nav>
                            <ul className="mt-12 px-12 lg:mt-0">
                                {menu.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <Link href={item.link}>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

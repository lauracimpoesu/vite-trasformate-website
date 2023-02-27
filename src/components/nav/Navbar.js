import {Fragment} from "react"
import {Disclosure, Menu, Transition} from "@headlessui/react"
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {Facebook} from "react-feather"
import {Instagram} from "react-feather"
import {Youtube} from "react-feather"
import myLogo from "../../media/img/logo/VTTlogo.png"


const navigation = [{name: "HOME", href: "#", current: false}, {
    name: "CHI SIAMO",
    href: "#chi-siamo",
    current: false
}, {name: "LA NOSTRA MISSIONE", href: "#la-nostra-missione", current: false}, {
    name: "COMPARTI",
    href: "#comparti",
    current: false
}, {name: "CONTATTI", href: "#contatti", current: false},]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Example() {
    return (<Disclosure as="nav" className="bg-white fixed w-full z-10">
        {({open}) => (<>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-8 w-auto lg:hidden my_logo"
                                src={myLogo}
                                alt="Your Company"
                            />
                            <img
                                className="hidden h-8 w-auto lg:block my_logo"
                                src={myLogo}
                                alt="Your Company"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex m-20">
                                {navigation.map((item) => (<a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(item.current ? "text-black" : "text-black text_size", "px-3 py-3 rounded-full font-medium")}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </a>))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="https://www.facebook.com/vitetrasformateItalia">
                            <Facebook className="w-14 h-9 text-black mr-3 social_media"/>{" "}
                        </a>
                        <a href="https://www.instagram.com/vite_trasformate_italia/">
                            <Instagram className="w-14 h-9 text-black  mr-3 social_media"/>
                        </a>
                        <a href="https://www.youtube.com/@vitetrasformateitalia3565">
                            <Youtube className="w-14 h-10 text-black mr-3 social_media"/>
                        </a>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div></div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="#"
                                            className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                                        >
                                            Your Profile
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="#"
                                            className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-red")}
                                        >
                                            Settings
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="#"
                                            className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                                        >
                                            Sign out
                                        </a>)}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-5 px-2 pt-2 pb-3">
                    {navigation.map((item) => (<Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-red hover:text-red", "block px-3 py-2 rounded-md text-base font-medium")}
                        aria-current={item.current ? "page" : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>))}
                </div>
            </Disclosure.Panel>
        </>)}
    </Disclosure>)
}

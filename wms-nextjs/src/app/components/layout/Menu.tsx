import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
                <li>
                    <Link href="/dashboard">
                        <a className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/inventory">
                        <a className="block py-2 px-4 rounded hover:bg-gray-700">Inventory</a>
                    </Link>
                </li>
                <li>
                    <Link href="/orders">
                        <a className="block py-2 px-4 rounded hover:bg-gray-700">Orders</a>
                    </Link>
                </li>
                <li>
                    <Link href="/settings">
                        <a className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;

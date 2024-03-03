import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
    return (
        <div className='flex items-center gap-2'>
            <img
                src={photoURL}
                alt={displayName}
                className='w-8 h-8 rounded-full'
            />
            <span className='hidden md:block'>{displayName}</span>
        </div>
    );

}
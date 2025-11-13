import React from 'react';

import StarIcon from '../icon/StarIcon';

export default function CarasoulePage() {
    return (
        <div className='flex gap-5'>


            <div style={{ display: 'flex', gap: '10px' }}>
                <StarIcon />
                <button style={{ fontSize: '36px', fontWeight: 'normal', letterSpacing: '2%' }}>
                    Connecting Systems
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <StarIcon />
                <button style={{ fontSize: '36px', fontWeight: 'normal', letterSpacing: '2%' }}>
                    AI Agents
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <StarIcon />
                <button style={{ fontSize: '36px', fontWeight: 'normal', letterSpacing: '2%' }}>
                    Building API
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <StarIcon />
                <button style={{ fontSize: '36px', fontWeight: 'normal', letterSpacing: '2%' }}>
                    Custom Software
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <StarIcon />
                <button style={{ fontSize: '36px', fontWeight: 'normal', letterSpacing: '2%' }}>
                    CRMs
                </button>
            </div>

        </div>
    );
}

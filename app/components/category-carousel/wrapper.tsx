'use client';

export default function Wrapper({ children, imgUrl }: { children: React.ReactNode, imgUrl: string }) {
    return (
        <div className={`border-r border-secondary bg-peach text-center h-[350px] bg-cover content-center`} style={{ backgroundImage: `url(${imgUrl})` }}>
            {children}
        </div>
    );
}
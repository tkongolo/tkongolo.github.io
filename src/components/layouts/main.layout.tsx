export default function MainLayout({children}: { children: React.ReactNode }){
    return (
        <main className="bg-surface text-on-surface">
            {children}
        </main>
    )
}

import '@/styles/globals.css'
import TheFooter from '@/components/TheFooter'

export const metadata = {
    title: 'Your App Name',
    description: 'Your app description'
}

export default function RootLayout({ children })
{
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&display=swap" rel="stylesheet" />
            </head>
            <body>
                <main>
                    {children}
                    <TheFooter />
                </main>
            </body>
        </html>
    )
}
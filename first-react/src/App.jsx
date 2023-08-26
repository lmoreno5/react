import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users = [
        {
            userName: 'Grooty',
            initialIsFollowing: false,
            fileName: 'favicon.ico'
        },
        {
            userName: 'Grootsero',
            initialIsFollowing: true,
            fileName: 'groot1.jpeg'
        }
    ]

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, initialIsFollowing, fileName } = user
                    return (
                        <TwitterFollowCard key={userName} userName={userName} fileName={fileName} initialIsFollowing={initialIsFollowing}>
                            {userName}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
import { useState } from "react"

export function TwitterFollowCard({ fileName, userName, children, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-button is-following' : 'tw-follow-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-follow-avatar' alt="avatar" src={(fileName)} />
                <div className='tw-follow-info'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>                      
                    <span className="tw-follow-default">{text}</span>
                    <span className="tw-follow-stopFollow">Dejar de seguir</span>         
                </button>
            </aside>
        </article>
    )
}
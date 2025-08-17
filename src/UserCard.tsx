import React from "react";
import './UserCard.css';

interface UserProfile{
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}

interface UserCardProps{
    user: UserProfile;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    return(
        <div className="user-card">
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="user-avatar" />
            <div className="user-info">
                <h2>{user.name}</h2>
                <p className="user-login">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        @{user.login}
                    </a>
                </p>
                <p className="user-bio">{user.bio}</p>
                <div className="user-stats">
                    <span><strong>{user.public_repos}</strong> Repos</span>
                    <span><strong>{user.followers}</strong> Followers</span>
                    <span><strong>{user.following}</strong> Following</span>
                </div>
            </div>
        </div>
    );

};

export default UserCard;
function UserCard({ user, role }) {
    return (
        <div>
            <h2>{user}</h2>
            <p>Role: {role}</p>
        </div>
    )
}
export default UserCard;
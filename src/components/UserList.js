import User from "./User";
import Table from 'react-bootstrap/Table';


const UserList = ({ users }) => {
    console.log('user:', users);
    return (
        <div className='userContainer'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody ></tbody>
                {users.map((user, index) => {
                    return (
                        <User
                            key={index}
                            id={user.id}
                            name={user.name}
                            phone={user.phone}
                            username={user.username}
                            email={user.email}
                        />
                    )
                })}
            </table>
        </div>
    )
}

export default UserList;
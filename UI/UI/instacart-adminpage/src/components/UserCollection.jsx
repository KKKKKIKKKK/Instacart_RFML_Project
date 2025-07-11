import styled from 'styled-components';
import UserCard from './UserCard';
import PropTypes from 'prop-types';

const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 한 행에 하나의 칼럼 */
  gap: 0;
  width: 100%;
`;

const UserCollection = ({ users, onSend }) => (
  <UsersContainer>
    {users.map(user => (
      <UserCard key={user.id} user={user} onSend={onSend} />
    ))}
  </UsersContainer>
);

UserCollection.propTypes = {
  users: PropTypes.array.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default UserCollection;

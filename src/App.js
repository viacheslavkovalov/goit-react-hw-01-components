import user from './components/SocialProfile/Profile';
import Container from './components/Container/Container';
import Profile from './components/SocialProfile/Profile';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
}

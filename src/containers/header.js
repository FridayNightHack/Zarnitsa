import { Header, MobileNavMenu } from '../components';
import 'styled-components/macro';
import useMatchMedia from '../hooks/useMatchMedia';
import { Link } from 'react-router-dom';

export function HeaderContainer(props) {
  const { showMobileNav, setShowMobileNav, children } = props;
  const { isMatched } = useMatchMedia('(max-width:48rem)');
  return (
    <Header>
      <Header.LogoWrapper>
        <Header.Logo>Зарница</Header.Logo>
      </Header.LogoWrapper>
      <Header.Wrapper>
        <Header.Nav>
          <Header.Menu>
            <Header.MenuItem>
              <Header.Link href="/routemap">Карта маршрутов</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link href="/camping">Кемпинг & Глемпинг</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>Парусный туризм</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>Ориентирование</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>Школа выживания</Header.Link>
            </Header.MenuItem>
          </Header.Menu>
        </Header.Nav>
        <Header.Box></Header.Box>
        <MobileNavMenu.Button onClick={() => setShowMobileNav(!showMobileNav)} aria-label="Close">
          <MobileNavMenu.Icon clicked={showMobileNav} />
        </MobileNavMenu.Button>
      </Header.Wrapper>
      {children}
    </Header>
  );
}

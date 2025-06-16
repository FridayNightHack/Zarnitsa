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
              <Header.Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Карта маршрутов
                </Link>
              </Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>
                <Link to="/camping" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Кемпинг & Глемпинг
                </Link>
              </Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Парусный туризм
                </Link>
              </Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Ориентирование
                </Link>
              </Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Школа выживания
                </Link>
              </Header.Link>
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

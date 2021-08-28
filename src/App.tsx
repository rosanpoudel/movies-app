import styled from 'styled-components';
import MoviesList from './Container/MoviesList';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 97vh;
`;

export const App = () => {
  return (
    <StyledContentWrapper>
      <MoviesList />
    </StyledContentWrapper>
  )
}

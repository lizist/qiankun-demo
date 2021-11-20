import React from 'react';
import styled, { css } from 'styled-components';

import ErrorCard from '@/components/error_card';
import CircularLoader from '@/components/circular_loader';

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.darkTheme
      ? 'rgb(32, 33, 35)'
      : 'rgb(245, 245, 245)'};
  `};
`;

const RouteLoader = ({ error }: { error?: Error }) => (
  <Style>
    {error ? (
      <ErrorCard
        errorMessage={error.message}
        retry={() => window.location.reload()}
      />
    ) : (
      <CircularLoader />
    )}
  </Style>
);

export default RouteLoader;

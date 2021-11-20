/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect, Suspense, useMemo, useState } from "react";
import styled, { ThemeProvider, StyleSheetManager } from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";

import { appPropsType } from "@/type/app_type";
import GlobalStyle from "./global_style";
import ROUTE from "./route";
import ErrorBoundary from "./components/error_boundary";
import { setPx2rem } from "@/utils/styled_px_to_rem";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
`;

function App({ pageData }: { pageData: appPropsType }) {
  const history = useHistory();
  const [isRemLoading, setRemLoading] = useState(true);
  useEffect(() => {
    if (pageData.appPath && pageData.appPath !== history.location.pathname) {
      history.push(pageData.appPath);
    }
  }, [history, pageData.appPath]);
  let containerWidth =
    pageData.container.getBoundingClientRect().width || window.innerWidth;
  if (pageData.container) {
    if (containerWidth > 750) {
      containerWidth = 750; // 限制pc页面最大宽度
    }
  }

  const theme = useMemo(
    () => ({
      px2rem: (px: any) =>
        Number(px)
          ? `${
              Math.round(
                /**
                 * 750为匹配750设计稿的尺寸
                 * 40为固定的html font-size 定义为40是为了容易除尽
                 * containerWidth为容器宽度
                 */
                ((Number(px) * containerWidth) / 750 / 40) * 100000
              ) / 100000
            }rem`
          : 0,
    }),
    [containerWidth]
  );
  useEffect(() => {
    setPx2rem(theme.px2rem);
    setRemLoading(false);
  }, [theme]);
  if (isRemLoading) return null;
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyleSheetManager disableCSSOMInjection>
          <Container>
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Switch>
                  {Object.entries(ROUTE).map((oneRoute) => {
                    const [name, value] = oneRoute;
                    return <Route key={name} path={name} component={value} />;
                  })}
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </Container>
        </StyleSheetManager>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

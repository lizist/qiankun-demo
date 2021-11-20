import React, { useRef, useEffect } from "react";
import { loadMicroApp, MicroApp } from "qiankun";

const SubParasiteApp = ({
  appName,
  appUrl,
  appPath,
}: {
  appName: string;
  appUrl?: string;
  appPath: string; // 由于子应用路由模式需要使用MemoryRouter 所以路由的参数需要props传值
}) => {
  const environmentAppUrl = "http://localhost:3080/";
  const appRef = useRef<HTMLDivElement>(null);
  const microAppRef = useRef<MicroApp | null>(null);
  useEffect(() => {
    if (!microAppRef.current) {
      microAppRef.current = loadMicroApp({
        name: appName,
        entry: appUrl || environmentAppUrl,
        container: appRef.current!,
        props: {
          container: appRef.current!,
          userInfo: { user_id: 100 },
          appPath,
        },
      });
      // 微应用加载完毕 回调
      microAppRef.current.mountPromise
        .then((res) => {
          console.log("🚀 ~ file: index.tsx ~ line 68 ~ .then ~ res", res);
        })
        .catch((err) => {
          console.log("🚀 ~ file: index.tsx ~ line 68 ~ .then ~ res", err);
        });
    }
    return () => {
      microAppRef.current?.unmount();
    };
  }, [appName, appPath, appUrl, environmentAppUrl]);
  useEffect(() => {
    if (microAppRef.current && microAppRef.current.update) {
      microAppRef.current.update({
        container: appRef.current,
        userInfo: {user_id:100},
        appPath,
      });
    }
  }, [appPath]);
  return (
    <>
      <div ref={appRef} />
    </>
  );
};

export default SubParasiteApp;

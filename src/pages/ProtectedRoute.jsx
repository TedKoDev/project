import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;

  //로그인한 사용자가 있는지 확인
  // 그 사용자가 어디민 권한이 있는지 확인
  //requireAdmin이 true이면 로그인도 되어있어야하고, 어디민 권한도 있어야함
  // 조건에 맞지 않으면 상위 페이지로 리다이렉트
  // 조건에 맞으면 children을 렌더링

  //로그인 한 상태를 알기위해서 Context를 사용해야한다.
}

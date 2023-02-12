import React from "react";
import { Box } from "./Box";

export function Layout() {
  const [collapsed, setCollapsed] = React.useState(true);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCollapsed(!collapsed);
  }

  return (
    <div className="layout">
      <div className="order-1">
        <div>
          <Box variant="medium-alt">
            <button onClick={onClick}>{collapsed ? 'Expand' : 'Collapse'}</button>
          </Box>
          {!collapsed &&
            <Box variant="large" />
          }
        </div>
      </div>
      <div className="order-2">
        <Box variant="medium" />
      </div>
      <div className="order-3 mobile-order-4">
        <Box variant="small-alt" />
      </div>
      <div className="footer">
        <Box variant="small" />
      </div>
    </div>
  );
}

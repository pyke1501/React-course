import TabsMenu from "./TabsMenu";
import { Outlet } from "react-router";

export default function ElectronicStore() {
   return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <TabsMenu />

      <Outlet />
    </div>
  );
}
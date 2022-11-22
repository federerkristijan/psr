import { createContext, useState } from "react";

export const TabsContext = createContext();

export const TabsContextProvider = (props) => {
  const [showTab, setShowTab] = useState(false);
  return (
    <TabsContextProvider value={{ showTab, setShowTab }}>
      {props.children}
    </TabsContextProvider>
  )
}

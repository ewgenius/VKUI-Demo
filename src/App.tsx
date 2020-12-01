import React, { useState } from "react";
import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  CellButton,
  ConfigProvider,
  VKCOM,
  WebviewType,
  AdaptivityProvider,
  SplitCol,
} from "@vkontakte/vkui";

export function App() {
  const [panel, setPanel] = useState("1");
  return (
    <ConfigProvider
      platform={VKCOM}
      webviewType={WebviewType.INTERNAL}
      isWebView
    >
      <AdaptivityProvider>
        <SplitCol width="100%" animate>
          <View activePanel={panel}>
            <Panel id="1">
              <PanelHeader left={<PanelHeaderBack />}>Test app</PanelHeader>
              <Group>
                <CellButton onClick={() => setPanel("2")}>Panel 2</CellButton>
              </Group>
            </Panel>
            <Panel id="2">
              <PanelHeader left={<PanelHeaderBack />}>Test app</PanelHeader>
              <Group>
                <CellButton onClick={() => setPanel("1")}>Panel 1</CellButton>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

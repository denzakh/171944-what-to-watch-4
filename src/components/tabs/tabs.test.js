import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const children = <div className="children-component" />;
const tabList = [`1`,`2`,`3`];
const activeTab = tabList[0];

it(`Tab is rendered correctly`, () => {
  const tree = renderer.create(
      <Tabs
        tabList={tabList}
        activeTab={activeTab}
        onClick={() => {}}
      >
        {children}
      </Tabs>
      , {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});

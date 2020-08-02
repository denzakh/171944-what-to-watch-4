import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "../tabs/tabs.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all tabs be pressed`, () => {
  const onClick = jest.fn();

  const event = {
    preventDefault() {}
  };

  const tabList = [`1`, `2`, `3`];
  const activeTab = tabList[0];

  const tabsComponent = shallow(
      <Tabs
        tabList={tabList}
        activeItem={activeTab}
        setActiveItem={onClick}
      >
        <div className="children-component" />;
      </Tabs>
  );

  const tabs = tabsComponent.find(`.movie-nav__link`);

  tabs.forEach((tab) => tab.simulate(`click`, event));

  expect(onClick).toHaveBeenCalledTimes(tabs.length);
});

import React, { useState } from "react";
import ReactDom from "react-dom";
import Modal from "./components/modal/modal";
import Upload from "./components/upload/upload";
import Tab from "./components/tab/tab";
import * as GOJI from "goji_ui";
import DropDown from "./components/dropDown";
import Button from "./components/button/button";
import "./_test.less";

function App() {
  const [visible, setVisible] = useState(false);
  const [ev, setEv] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      {/* <GOJI.Tab
			extSelector={'.tab'}
			extension={<div>这是扩展的内容</div>}
			items={[
				{
					title: "tab1",
					key: "tab1",
					children: <div>test</div>
				},
				{
					title: "tab2",
					key: "tab2",
					children: <div>tab2</div>
				}
			]}
		/> */}

      <h1>test</h1>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        show modal
      </button>
      <Tab
        onTabChange={() => {
          setEv(true);
        }}
        hiddenStyle={{
          height: "0px",
          overflow: "hidden",
        }}
        tabContentVisible={ev}
        extSelector={'[aria-label="tab"]'}
        extension={
          <div
            onClick={() => {
              setEv(!ev);
            }}
            className="ext"
          >
            这是扩展的内容
          </div>
        }
        items={[
          {
            title: "tab1",
            key: "tab1",
            children: <div>tab1</div>,
          },
          {
            title: "tab2",
            key: "tab2",
            children: <div>tab2</div>,
          },
        ]}
      />

      <Modal
        // dontDestroyOnClose={true}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
      >
        <div>
          how to set default value for typescript interface field
          <input type="text" />
        </div>
      </Modal>

      <Upload
        uploadUrl="/api/video-service/upload"
        beforeUpload={(f) => {
          for (var i = 0; i < f.length; i++) {
            console.log(f[i].name);
          }
          return new Promise((r, j) => {
            setTimeout(() => {
              r(f);
            }, 1000);
          });
        }}
        valueFilter={({ response }) => {
          return (response as Record<string, Object>).url;
        }}
        onComplete={(res: any[]) => {
          console.log(res);
        }}
      >
        请选择文件
      </Upload>

      {/* <DropDown
        trigger={"click"}
        visible={modalVisible}
        setVisible={setModalVisible}
        onChangeVisible={() => {
          setModalVisible(!modalVisible);
        }}
        position="topRight"
        width={150}
        modelContent={[
          {
            id: "1",
            label: "first Item",
          },
          {
            id: "2",
            label: "second Item",
          },
        ]}
        // className={"modless"}
      >
        SHOW MODEL
      </DropDown> */}

      <DropDown
        trigger={"hover"}
        visible={modalVisible}
        setVisible={setModalVisible}
        onChangeVisible={() => {
          setModalVisible(!modalVisible);
        }}
        position="bottom"
        width={150}
        modelContent={[
          {
            id: "1",
            label: "first Item",
          },
          {
            id: "2",
            label: "second Item",
          },
        ]}
        icons={[
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 9l6 6l6 -6"></path>
          </svg>,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 15l6 -6l6 6"></path>
          </svg>,
        ]}
        // className={"modless"}
      >
        SHOW MODEL
      </DropDown>

      <Button
        type="primary"
        onBtnClick={() => {
          console.log("primary");
        }}
      >
        primary
      </Button>
      <Button />
      <Button
        type="dashed"
        onBtnClick={() => {
          alert("Dashed Button");
        }}
      >
        dashed
      </Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
      <Button shape="round">Circle</Button>
      <Button shape="circle" type="primary">
        A
      </Button>
      <Button icon="" iconPos="left">
        会计师
      </Button>
      <Button disable={true}> disable</Button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));

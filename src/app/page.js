// import Sidebar from "../components/Sidebar.jsx";
import "./globals.css";
import Button from "@/components/Button.jsx";
import Card from "../components/Card.jsx";
import { Test } from "@/components/Test.jsx";
import Select from "@/components/Select.jsx";
import TextField from "@/components/TextField.jsx";

import Checkbox from "@/components/Checkbox.jsx";

import Subtask from "@/components/Subtask.jsx";
import DropdownMenu from "@/components/DropdownMenu.jsx";

export default function Home() {
  return (
    <>
      <Checkbox />
      <Card />
      {/* <Sidebar /> */}
      <Button content={"+ Create New Board"} variant={"btn-board"} />
      <Button
        content={"+ Create New Board (Modal Version)"}
        variant="default"
      />
      <Button content={"Delete"} variant="danger" />
      <Button content={"Cancel"} variant="secondary" />
      <Test />
      <Select />
      <TextField variant={"default"} />;
      <Subtask />
      <div style={{ marginLeft: "100px" }}>
        <DropdownMenu />
      </div>
    </>
  );
}

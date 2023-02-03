import styled from "styled-components";
import Tooltip from "./components/tooltip";
import "./styles.css";

const TooltipTarget = styled.span``;

export default function App() {
  return (
    <div className="App">
      <Tooltip text="tooltip" position="left" background="00adb5">
        <TooltipTarget>PRESS HERE</TooltipTarget>
      </Tooltip>
      <Tooltip text="tooltip" position="top" background="222831">
        <TooltipTarget>PRESS HERE</TooltipTarget>
      </Tooltip>
      <Tooltip text="tooltip" position="bottom" background="393e46">
        <TooltipTarget>PRESS HERE</TooltipTarget>
      </Tooltip>
      <Tooltip text="tooltip" position="right" background="eeeeee">
        <TooltipTarget>PRESS HERE</TooltipTarget>
      </Tooltip>
    </div>
  );
}
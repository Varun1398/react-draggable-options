import { DragIconWrapper } from "../styles";
import { ReactComponent as DragHandleIcon } from "../draggable-dots.svg";
import React from "react";

export function DragHandle(props) {
   return (
    <DragIconWrapper {...props}>
      <DragHandleIcon />
    </DragIconWrapper>
  );
}
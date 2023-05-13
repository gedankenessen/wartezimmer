import React, { PropsWithChildren } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export const Providers: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <DragDropContext onDragEnd={() => { }}>
    {children}
  </DragDropContext>
)

import React from 'react';

import { WindowControls } from './window-controls';
import { MenuBar, MenuT } from './menu';

export interface TitleBarProps {
  icon?: string;
  menu?: MenuT[];
  disableMinimize?: boolean;
  disableMaximize?: boolean;
  className?: string;
  browserWindowId?: number;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  children,
  icon,
  menu,
  disableMinimize,
  disableMaximize,
  className,
  browserWindowId,
}) => (
  <div
    id="electron-app-title-bar"
    className={`electron-app-title-bar ${className || ''}`}
  >
    <div className="resize-handle resize-handle-top" />
    <div className="resize-handle resize-handle-left" />
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    {!!icon && (
      <img
        className="icon"
        src={icon}
        style={{
          height: '60px',
          width: '100px',
        }}
      />
    )}
    {!!menu && <MenuBar menu={menu} />}
    {children}
    <WindowControls
      disableMinimize={disableMinimize}
      disableMaximize={disableMaximize}
      browserWindowId={browserWindowId}
    />
  </div>
);

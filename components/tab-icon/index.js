import React from "react";

import classnames from "classnames";

const spritePath = `/icons/tabler-sprite.svg`;

const TabIcon = React.forwardRef((props, ref) => {
  const { className, icon, onClick, size = 20, ...restProps } = props;
  const iconName = `tabler-${icon}`;
  const iconClass = classnames("tabicon", iconName, className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClass}
      height={size}
      width={size}
      onClick={onClick}
      ref={ref}
      {...restProps}
    >
      <use xlinkHref={`${spritePath}#${iconName}`} />
    </svg>
  );
});

export default TabIcon;

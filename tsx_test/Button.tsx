// React component - Button

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function formatButtonLabel(label: string): string {
  return label.toUpperCase();
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  const formattedLabel = formatButtonLabel(label);

  return (
    <button onClick={onClick} disabled={disabled}>
      {formattedLabel}
    </button>
  );
};

export class ButtonGroup extends React.Component<{
  children: React.ReactNode;
}> {
  render() {
    return <div className="button-group">{this.props.children}</div>;
  }
}

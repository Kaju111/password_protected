export interface CenterPartProps {
  onEnterLab: () => void;
  isLoggedIn: boolean;
  timeLeft: number;
  isTimeExhausted: boolean;
}

export interface RightDoorProps {
  isEntered: boolean;
}

export interface InsideLabProps {
  timeLeft: number;
  onExitLab: () => void;
  isTimeExhausted: boolean;
}

export interface LeftDoorProps {
  isEntered: boolean;
}

export type BoxProps = {
  width: string;
  height: string;
  isPrimary?: boolean;
  borderOnly?: boolean;
  animated?: boolean;
  fillPercentage?: number;
  isBgColor?: boolean;
};

export interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  total?: string;
  description: string;
}

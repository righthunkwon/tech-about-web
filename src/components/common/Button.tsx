import React from 'react';

interface props {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<props> = ({
  children,
  variant = 'default',
  onClick,
  className = '',
  disabled = false,
}) => {
  /**
   * 버튼 디자인을 가져오는 함수
   * @returns string
   */
  const getButtonStyle = () => {
    if (disabled) {
      return `ta-button-disabled ${className}`;
    }

    switch (variant) {
      case 'outline':
        return `ta-button-outline ${className}`;
      default:
        return `ta-button-primary ${className}`;
    }
  };
  const buttonStyle = getButtonStyle();

  /**
   * Button
   * - disabled의 경우 속성 명시 필수
   * - 명시하지 않을 시 개발자도구에서 스타일 제거하면 버튼 클릭 가능
   */
  return (
    <>
      <button className={buttonStyle} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;

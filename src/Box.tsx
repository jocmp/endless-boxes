import classNames from "classnames"

interface Props {
  variant: 'small' | 'small-alt' | 'medium' | 'medium-alt' | 'large';
  children?: JSX.Element | null;
}

export function Box({
  variant,
  children = null
}: Props) {
  const classes = classNames('box', {
    'box--small': variant === 'small',
    'box--small-alt': variant === 'small-alt',
    'box--medium': variant === 'medium',
    'box--medium-alt': variant === 'medium-alt',
    'box--large': variant === 'large',
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

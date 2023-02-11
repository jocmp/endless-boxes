import classNames from "classnames"

interface Props {
  variant: 'small' | 'medium' | 'large';
}

export function Box(props: Props) {
  const classes = classNames('box', {
    'box--small': props.variant === 'small',
    'box--medium': props.variant === 'medium',
    'box--large': props.variant === 'large',
  });

  return <div className={classes} />
}

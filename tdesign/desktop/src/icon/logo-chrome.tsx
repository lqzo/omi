import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-logo-chrome')
export default class LogoChrome extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.001 1.00049C18.0761 1.00049 23.001 5.92536 23.001 12.0005C23.001 18.0756 18.0761 23.0005 12.001 23.0005C5.92584 23.0005 1.00098 18.0756 1.00098 12.0005C1.00098 5.92536 5.92584 1.00049 12.001 1.00049ZM5.16145 6.15037L7.38415 10.0002L7.59639 9.63258C7.79622 9.26163 8.04153 8.91882 8.32486 8.61161C8.5776 8.33675 8.85729 8.09479 9.15736 7.88747C9.82127 7.42755 10.6019 7.12423 11.4459 7.03097C11.6672 7.00598 11.8906 6.99568 12.1145 7.00047H19.4854C17.8709 4.58851 15.1214 3.00049 12.001 3.00049C9.26386 3.00049 6.81212 4.22234 5.16145 6.15037ZM3.92898 8.01566C3.33486 9.21684 3.00098 10.5697 3.00098 12.0005C3.00098 16.4096 6.17158 20.0782 10.3572 20.8507L12.5801 17.0005H12.0836C11.9509 17.0025 11.8185 16.9992 11.6866 16.9907C9.912 16.8805 8.38814 15.8447 7.59202 14.3602L3.92898 8.01566ZM12.5911 20.9814C17.2866 20.6775 21.001 16.7728 21.001 12.0005C21.001 10.9486 20.8205 9.93882 20.4889 9.00047H16.0446L16.2844 9.41581C16.3893 9.59005 16.4833 9.77011 16.5659 9.95482C16.8625 10.6143 17.0044 11.3111 17.0038 12.0002C17.0044 12.6897 16.8623 13.3869 16.5654 14.0467C16.4829 14.231 16.3891 14.4106 16.2844 14.5845L12.5911 20.9814ZM9.40489 13.5002C9.93724 14.4223 10.8852 14.9548 11.8755 14.9979C11.9172 14.9996 11.9591 15.0005 12.0012 15.0005H12.0439C12.5405 14.9941 13.0423 14.8642 13.503 14.5983C13.9581 14.3355 14.3183 13.9715 14.5716 13.5512L14.601 13.5002C14.6531 13.4099 14.7 13.3181 14.7418 13.2251C14.9134 12.8404 15.0032 12.4221 15.0035 11.999C15.0029 11.5774 14.9134 11.1606 14.7426 10.7772C14.7006 10.6835 14.6535 10.5911 14.601 10.5002L14.5715 10.449C14.3182 10.0287 13.958 9.66481 13.503 9.40209C13.0521 9.14176 12.5617 9.01178 12.0754 9.00047H12.0012C11.8829 9.00047 11.7661 9.00733 11.6513 9.02067C10.7439 9.12848 9.89691 9.64796 9.40489 10.5002L9.35053 10.5943C9.12757 11.0137 9.00125 11.4924 9.00125 12.0005C9.00125 12.5058 9.12621 12.982 9.34691 13.3998L9.40489 13.5002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}

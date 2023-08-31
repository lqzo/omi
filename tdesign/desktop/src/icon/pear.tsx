import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-pear')
export default class Pear extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#162;&amp;#168;_pear">
          <path
            id="Union"
            d="M21.3231 2.53408L20.8758 3.4285C20.5175 4.14524 20.1201 4.80387 19.6513 5.45131C20.5289 6.55209 21.009 7.80482 20.9642 9.14574C20.9107 10.7502 20.1117 12.3024 18.7071 13.707L18.6521 13.7621L18.5932 13.805L18.5883 13.8087C18.581 13.8143 18.5672 13.8251 18.5478 13.8411C18.5088 13.873 18.4477 13.9251 18.3718 13.9965C18.2191 14.1401 18.0117 14.3569 17.8043 14.6397C17.388 15.2074 16.9978 16.0036 17 16.9977C17.0038 18.6839 16.7101 20.1133 15.5025 21.3209C13.1038 23.7196 9.19547 23.6886 6.82782 21.3209C6.80528 21.2984 6.78273 21.2758 6.76018 21.2533C6.09028 20.5843 5.4205 19.9153 5.12332 18.8766C4.08458 18.5794 3.41564 17.9096 2.74658 17.2397C2.72405 17.2172 2.70153 17.1946 2.67899 17.1721C0.311338 14.8044 0.280321 10.8961 2.67899 8.49742C3.88658 7.28983 5.31609 6.99612 7.00227 6.9999C7.99629 7.00213 8.79252 6.61196 9.36026 6.19562C9.64304 5.98826 9.85983 5.78079 10.0034 5.62812C10.0748 5.55221 10.1269 5.49112 10.1588 5.45214C10.1748 5.4327 10.1856 5.41889 10.1912 5.41164L10.1949 5.40676L10.2379 5.34784L10.2929 5.29279C11.6784 3.90735 13.1823 3.06416 14.751 2.96422C15.9922 2.88515 17.1531 3.27853 18.1961 4.0454C18.5344 3.55524 18.8233 3.06141 19.087 2.53408L19.5342 1.63965L21.3231 2.53408ZM16.9433 5.60682C16.2378 5.10691 15.5464 4.91761 14.8782 4.96018C13.9732 5.01783 12.9158 5.51275 11.7519 6.66252C11.7387 6.67927 11.7232 6.69851 11.7056 6.72C11.6477 6.79069 11.5657 6.88625 11.4603 6.99828C11.2504 7.2215 10.943 7.5151 10.543 7.80845C9.74511 8.39353 8.54134 9.00336 6.99778 8.9999C5.55866 8.99667 4.76223 9.2426 4.09321 9.91163C2.48184 11.523 2.50033 14.165 4.09321 15.7579C4.9832 16.6479 5.33527 16.9594 6.06798 17.0247C6.55006 17.0677 6.93215 17.4498 6.97516 17.9319C7.04053 18.6646 7.35204 19.0167 8.24203 19.9067C9.83491 21.4996 12.4769 21.5181 14.0883 19.9067C14.7573 19.2377 15.0033 18.4412 15 17.0021C14.9966 15.4586 15.6064 14.2548 16.1915 13.457C16.4848 13.0569 16.7784 12.7495 17.0016 12.5396C17.1137 12.4342 17.2092 12.3522 17.2799 12.2943C17.3014 12.2767 17.3205 12.2613 17.3373 12.2481C18.4675 11.1023 18.9339 10.0206 18.9653 9.07903C18.9876 8.41119 18.794 7.72503 18.3402 7.04295C18.1015 7.30255 17.8478 7.56635 17.5769 7.83721L16.8698 8.54431L15.4556 7.1301L16.1627 6.42299C16.4446 6.14106 16.7038 5.87034 16.9433 5.60682ZM18.5941 13.8043C18.5941 13.8043 18.5941 13.8043 18.5941 13.8043V13.8043Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}

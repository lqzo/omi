import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-logo-github')
export default class LogoGithub extends WeElement<IconProps> {
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
          d="M5.30673 3.04717C4.9785 4.32904 5.30243 5.22186 5.37585 5.40539L5.60851 5.98701L5.18671 6.45014C4.44743 7.26186 3.99984 8.27763 3.99984 9.57219C3.99984 12.063 4.74716 13.4051 5.68581 14.1924C6.67342 15.0208 8.04081 15.3812 9.55484 15.5514L11.8308 15.8071L10.0961 17.3025C9.85359 17.5116 9.48993 18.053 9.48993 19.1577C9.48993 19.2732 9.49 19.3874 9.49013 19.5H9.49984V21.5H9.49793C9.49964 21.7715 9.50139 22.0169 9.50292 22.2315L9.50294 22.2336C9.50341 22.2999 9.50387 22.3622 9.5043 22.4206C9.50621 22.6815 9.50756 22.8661 9.50756 23V24H7.50756V23C7.50756 22.8741 7.50628 22.6992 7.50438 22.4388C7.50394 22.3792 7.50347 22.3151 7.50298 22.246L7.50296 22.2439C7.50141 22.0265 7.49963 21.7767 7.49789 21.5H6.94172C5.72658 21.5 4.57733 20.9476 3.81824 19.9988L3.2678 19.3107C2.99662 18.9718 2.6551 18.6957 2.26683 18.5015L1.1582 17.9472L2.05263 16.1584L3.16126 16.7127C3.80838 17.0362 4.37757 17.4964 4.82954 18.0613L5.37998 18.7494C5.75952 19.2238 6.33415 19.5 6.94172 19.5H7.49012C7.49 19.3874 7.48993 19.2733 7.48993 19.1577C7.48993 18.4501 7.59907 17.8244 7.79257 17.2894C6.60726 17.0267 5.40612 16.5682 4.40053 15.7247C2.90307 14.4687 1.99984 12.5008 1.99984 9.57219C1.99984 7.98641 2.49516 6.64651 3.32997 5.55567C3.13001 4.75491 2.98176 3.35892 3.66013 1.66295L3.83339 1.2298L4.27661 1.08425L4.27856 1.08361L4.28053 1.08297L4.28456 1.08167L4.29299 1.07902L4.31128 1.07351C4.32411 1.06976 4.33821 1.06586 4.35357 1.06191C4.38432 1.05401 4.42007 1.0459 4.46089 1.03827C4.54263 1.02298 4.64396 1.00972 4.76522 1.0036C5.0084 0.99133 5.3264 1.00804 5.72223 1.09079C6.43996 1.24084 7.40607 1.60619 8.65018 2.40141C9.73441 2.13641 10.8687 2.00049 11.9994 2C13.1301 2.00049 14.2653 2.13641 15.3495 2.40141C16.5936 1.60619 17.5597 1.24084 18.2775 1.09079C18.6733 1.00804 18.9913 0.99133 19.2345 1.0036C19.3557 1.00972 19.4571 1.02298 19.5388 1.03827C19.5796 1.0459 19.6154 1.05401 19.6461 1.06191C19.6615 1.06586 19.6756 1.06976 19.6884 1.07351L19.7067 1.07902L19.7151 1.08167L19.7192 1.08297L19.7211 1.08361L19.7231 1.08425L20.1663 1.2298L20.3396 1.66295C21.0179 3.35892 20.8697 4.75491 20.6697 5.55567C21.5045 6.64651 21.9998 7.98641 21.9998 9.57219C21.9998 12.5008 21.0966 14.4687 19.5992 15.7247C18.5936 16.5682 17.3924 17.0267 16.2071 17.2894C16.4006 17.8244 16.5098 18.4501 16.5098 19.1577C16.5098 20.4185 16.5019 21.5146 16.4967 22.2455C16.4962 22.3146 16.4957 22.3793 16.4953 22.439C16.4934 22.6993 16.4921 22.8741 16.4921 23V24H14.4921V23C14.4921 22.866 14.4935 22.6813 14.4954 22.4201C14.4958 22.3613 14.4963 22.2986 14.4968 22.2317C14.502 21.5011 14.5098 20.411 14.5098 19.1577C14.5098 18.053 14.1461 17.5116 13.9036 17.3025L12.1689 15.8071L14.4448 15.5514C15.9589 15.3812 17.3263 15.0208 18.3139 14.1924C19.2525 13.4051 19.9998 12.063 19.9998 9.57219C19.9998 8.27763 19.5523 7.26186 18.813 6.45014L18.3912 5.98701L18.6238 5.40539C18.6973 5.22186 19.0212 4.32904 18.693 3.04717C18.6909 3.0476 18.6888 3.04803 18.6867 3.04847C18.2101 3.14811 17.3592 3.4459 16.0896 4.30893L15.7047 4.57056L15.2567 4.44456C14.2189 4.15269 13.1087 4.00052 11.9998 4C10.8909 4.00052 9.78083 4.15269 8.743 4.44456L8.29498 4.57056L7.91009 4.30893C6.64049 3.4459 5.78957 3.14811 5.31296 3.04847C5.31087 3.04803 5.3088 3.0476 5.30673 3.04717Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}

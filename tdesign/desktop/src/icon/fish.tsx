import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-fish')
export default class Fish extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#177;&amp;#188;_fish">
          <path
            id="Union"
            d="M13.4968 4.56424C15.146 3.65794 17.3556 3.42743 20.1659 3.87039C20.2849 4.55513 20.3875 5.58145 20.3129 6.7297C20.2108 8.30174 19.7831 10.0075 18.711 11.3861L18.5462 11.5979L18.51 11.8611L18.5098 11.8627L18.5096 11.8638L18.5076 11.8771C18.5052 11.892 18.5011 11.917 18.4949 11.9514C18.4825 12.02 18.462 12.1255 18.4308 12.2607C18.3683 12.5317 18.264 12.9185 18.0994 13.3664C17.8958 13.9205 17.6061 14.5514 17.201 15.1681L16.3606 13.4798L15.4003 14.2C13.6497 15.5129 10.9041 16 9.0003 16H8.0003L8.0003 17C8.0003 17.7703 7.99685 18.2933 7.89472 18.8039C7.8604 18.9755 7.81373 19.1501 7.74806 19.3335L3.73687 15.3223C4.05726 15.2316 4.39116 15.1632 4.71486 15.1134C5.08423 15.0565 5.41219 15.028 5.64674 15.0138C5.76355 15.0067 5.85597 15.0033 5.91734 15.0016C5.94799 15.0007 5.9708 15.0003 5.98493 15.0002L6.0003 15L6.00164 15L7.0003 15V14C7.0003 11.3028 7.86415 10.007 8.83 8.55823L9.20215 7.99999L7.42792 5.33865C7.46381 5.32577 7.50116 5.31281 7.53999 5.29981C8.00576 5.14384 8.58212 5.0149 9.19291 4.92739C9.80186 4.84013 10.4207 4.79753 10.9663 4.8046C11.1679 4.80721 11.3509 4.81653 11.5141 4.83106C11.6042 5.59931 11.8873 6.47413 12.3752 7.30596C13.1003 8.54211 14.3135 9.74797 16.1491 10.4363L17.0854 10.7874L17.7877 8.91479L16.8513 8.56367C15.4869 8.05202 14.6168 7.17455 14.1003 6.29403C13.7163 5.63938 13.5445 5.01399 13.4968 4.56424ZM20.4438 12.4095C21.7293 10.65 22.1957 8.59882 22.3087 6.85937C22.4261 5.05294 22.169 3.48803 21.9654 2.73802L21.8011 2.13295L21.1849 2.01719C17.7599 1.37376 14.7138 1.52473 12.3302 2.92691C11.9131 2.84563 11.4507 2.81071 10.9923 2.80477C10.3318 2.79621 9.60889 2.84736 8.90924 2.9476C8.21144 3.04759 7.51241 3.1999 6.90495 3.40331C6.32977 3.59591 5.71185 3.87424 5.2932 4.29289L4.71351 4.87258L6.80029 8.00275C5.98691 9.25912 5.20065 10.7141 5.03302 13.0575C4.84375 13.0766 4.63389 13.1023 4.41075 13.1366C3.55384 13.2685 2.37934 13.5455 1.4456 14.1679L0.430664 14.8446L8.15573 22.5696L8.83235 21.5547C9.39533 20.7102 9.70212 19.9649 9.85588 19.1961C9.93856 18.7827 9.97393 18.3732 9.98905 17.9649C11.6933 17.8476 13.8257 17.42 15.6011 16.4421L16.7209 18.6918L17.7038 17.7088C18.8923 16.5203 19.5832 15.1272 19.9767 14.0562C20.1749 13.5168 20.3017 13.048 20.3796 12.7102C20.4064 12.5941 20.4275 12.4931 20.4438 12.4095ZM17.5002 4.58026L18.9174 5.99726L17.5002 7.41415L16.0834 5.99726L17.5002 4.58026Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}

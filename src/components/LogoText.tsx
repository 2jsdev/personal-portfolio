import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface LogoProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

const LogoText = ({ size = 110, ...props }: LogoProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      width={size}
      height={size}
      version="1.0"
      {...props}
    >
      <defs>
        <g />
        <clipPath id="id1">
          <path
            d="M 97 166 L 140 166 L 140 209 L 97 209 Z M 97 166 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id2">
          <path
            d="M 123.242188 216.859375 L 88.832031 192.777344 L 112.917969 158.367188 L 147.324219 182.453125 Z M 123.242188 216.859375 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id3">
          <path
            d="M 88 158 L 130 158 L 130 205 L 88 205 Z M 88 158 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id4">
          <path
            d="M 112.695312 158.128906 L 129.902344 170.167969 L 105.816406 204.578125 L 88.613281 192.535156 Z M 112.695312 158.128906 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id5">
          <path
            d="M 72 201 L 115 201 L 115 244 L 72 244 Z M 72 201 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id6">
          <path
            d="M 99.113281 251.335938 L 64.703125 227.253906 L 88.785156 192.84375 L 123.195312 216.925781 Z M 99.113281 251.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id7">
          <path
            d="M 64 192 L 106 192 L 106 240 L 64 240 Z M 64 192 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id8">
          <path
            d="M 88.566406 192.601562 L 105.769531 204.644531 L 81.6875 239.054688 L 64.484375 227.011719 Z M 88.566406 192.601562 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id9">
          <path
            d="M 38 176 L 81 176 L 81 219 L 38 219 Z M 38 176 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id10">
          <path
            d="M 64.230469 226.921875 L 29.824219 202.839844 L 53.90625 168.429688 L 88.316406 192.511719 Z M 64.230469 226.921875 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id11">
          <path
            d="M 47 180 L 89 180 L 89 227 L 47 227 Z M 47 180 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id12">
          <path
            d="M 71.328125 180.535156 L 88.535156 192.578125 L 64.449219 226.988281 L 47.246094 214.945312 Z M 71.328125 180.535156 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id13">
          <path
            d="M 112 131 L 164 131 L 164 174 L 112 174 Z M 112 131 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id14">
          <path
            d="M 171.292969 147.777344 L 147.160156 182.253906 L 112.683594 158.125 L 136.816406 123.644531 Z M 171.292969 147.777344 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#id1)">
        <g clipPath="url(#id2)">
          <path
            fill="#0fbefe"
            d="M 106.039062 204.820312 C 115.539062 211.46875 128.632812 209.160156 135.285156 199.65625 C 141.933594 190.15625 139.621094 177.0625 130.121094 170.410156 C 120.621094 163.761719 107.523438 166.070312 100.875 175.574219 C 94.222656 185.074219 96.535156 198.167969 106.039062 204.820312 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id3)">
        <g clipPath="url(#id4)">
          <path
            fill="#0fbefe"
            d="M 112.695312 158.128906 L 129.902344 170.167969 L 105.816406 204.578125 L 88.613281 192.535156 L 112.695312 158.128906 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id5)">
        <g clipPath="url(#id6)">
          <path
            fill="#f21818"
            d="M 81.90625 239.292969 C 91.410156 245.945312 104.503906 243.632812 111.152344 234.132812 C 117.804688 224.628906 115.492188 211.535156 105.992188 204.886719 C 96.488281 198.234375 83.394531 200.546875 76.746094 210.046875 C 70.09375 219.550781 72.40625 232.644531 81.90625 239.292969 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id7)">
        <g clipPath="url(#id8)">
          <path
            fill="#f21818"
            d="M 88.566406 192.601562 L 105.769531 204.644531 L 81.6875 239.054688 L 64.484375 227.011719 L 88.566406 192.601562 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id9)">
        <g clipPath="url(#id10)">
          <path
            fill="#ff7362"
            d="M 47.027344 214.878906 C 56.527344 221.53125 69.621094 219.21875 76.273438 209.71875 C 82.921875 200.214844 80.613281 187.121094 71.109375 180.472656 C 61.609375 173.820312 48.515625 176.132812 41.863281 185.632812 C 35.214844 195.136719 37.523438 208.230469 47.027344 214.878906 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id11)">
        <g clipPath="url(#id12)">
          <path
            fill="#ff7362"
            d="M 71.328125 180.535156 L 88.535156 192.578125 L 64.449219 226.988281 L 47.246094 214.945312 L 71.328125 180.535156 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g clipPath="url(#id13)">
        <g clipPath="url(#id14)">
          <path
            fill="#00d083"
            d="M 159.226562 165.015625 C 165.890625 155.496094 163.574219 142.375 154.054688 135.714844 C 144.535156 129.050781 131.417969 131.367188 124.753906 140.886719 L 112.6875 158.121094 L 129.925781 170.1875 C 139.445312 176.855469 152.5625 174.535156 159.226562 165.015625 Z M 159.226562 165.015625 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <g
        fill={
          theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "rgb(0,0,0, 0.87)"
        }
        fillOpacity="1"
      >
        <g transform="translate(163.013006, 217.483344)">
          <g>
            <path d="M 25.3125 -47.296875 L 31.578125 -47.296875 L 31.578125 -13.8125 C 31.578125 -9.28125 30.21875 -5.734375 27.5 -3.171875 C 24.78125 -0.617188 21.160156 0.65625 16.640625 0.65625 C 11.929688 0.65625 8.265625 -0.546875 5.640625 -2.953125 C 3.023438 -5.359375 1.71875 -8.726562 1.71875 -13.0625 L 7.953125 -13.0625 C 7.953125 -10.351562 8.691406 -8.238281 10.171875 -6.71875 C 11.660156 -5.207031 13.816406 -4.453125 16.640625 -4.453125 C 19.210938 -4.453125 21.296875 -5.265625 22.890625 -6.890625 C 24.484375 -8.515625 25.289062 -10.785156 25.3125 -13.703125 Z M 25.3125 -47.296875 " />
          </g>
        </g>
      </g>
      <g
        fill={
          theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "rgb(0,0,0, 0.87)"
        }
        fillOpacity="1"
      >
        <g transform="translate(199.719986, 217.483344)">
          <g>
            <path d="M 2.953125 -17.90625 C 2.953125 -21.34375 3.628906 -24.4375 4.984375 -27.1875 C 6.335938 -29.9375 8.222656 -32.054688 10.640625 -33.546875 C 13.054688 -35.046875 15.8125 -35.796875 18.90625 -35.796875 C 23.695312 -35.796875 27.566406 -34.140625 30.515625 -30.828125 C 33.472656 -27.515625 34.953125 -23.109375 34.953125 -17.609375 L 34.953125 -17.1875 C 34.953125 -13.757812 34.296875 -10.6875 32.984375 -7.96875 C 31.679688 -5.25 29.8125 -3.128906 27.375 -1.609375 C 24.9375 -0.0976562 22.132812 0.65625 18.96875 0.65625 C 14.207031 0.65625 10.347656 -1 7.390625 -4.3125 C 4.429688 -7.632812 2.953125 -12.023438 2.953125 -17.484375 Z M 9 -17.1875 C 9 -13.289062 9.898438 -10.160156 11.703125 -7.796875 C 13.515625 -5.429688 15.9375 -4.25 18.96875 -4.25 C 22.019531 -4.25 24.441406 -5.445312 26.234375 -7.84375 C 28.035156 -10.238281 28.9375 -13.59375 28.9375 -17.90625 C 28.9375 -21.757812 28.019531 -24.878906 26.1875 -27.265625 C 24.363281 -29.660156 21.9375 -30.859375 18.90625 -30.859375 C 15.9375 -30.859375 13.539062 -29.675781 11.71875 -27.3125 C 9.90625 -24.957031 9 -21.582031 9 -17.1875 Z M 9 -17.1875 " />
          </g>
        </g>
      </g>
      <g
        fill={theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "#242424"}
        fillOpacity="1"
      >
        <g transform="translate(237.661359, 217.483344)">
          <g>
            <path d="M 21.53125 -29.75 C 20.625 -29.90625 19.640625 -29.984375 18.578125 -29.984375 C 14.640625 -29.984375 11.96875 -28.304688 10.5625 -24.953125 L 10.5625 0 L 4.546875 0 L 4.546875 -35.15625 L 10.390625 -35.15625 L 10.5 -31.09375 C 12.46875 -34.226562 15.257812 -35.796875 18.875 -35.796875 C 20.039062 -35.796875 20.925781 -35.644531 21.53125 -35.34375 Z M 21.53125 -29.75 " />
          </g>
        </g>
      </g>
      <g
        fill={theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "#242424"}
        fillOpacity="1"
      >
        <g transform="translate(260.172813, 217.483344)">
          <g>
            <path d="M 3.09375 -17.875 C 3.09375 -23.257812 4.367188 -27.59375 6.921875 -30.875 C 9.472656 -34.15625 12.816406 -35.796875 16.953125 -35.796875 C 21.066406 -35.796875 24.328125 -34.390625 26.734375 -31.578125 L 26.734375 -49.90625 L 32.75 -49.90625 L 32.75 0 L 27.21875 0 L 26.9375 -3.765625 C 24.53125 -0.816406 21.179688 0.65625 16.890625 0.65625 C 12.816406 0.65625 9.5 -1.007812 6.9375 -4.34375 C 4.375 -7.6875 3.09375 -12.039062 3.09375 -17.40625 Z M 9.09375 -17.1875 C 9.09375 -13.195312 9.914062 -10.078125 11.5625 -7.828125 C 13.207031 -5.578125 15.484375 -4.453125 18.390625 -4.453125 C 22.203125 -4.453125 24.984375 -6.160156 26.734375 -9.578125 L 26.734375 -25.734375 C 24.941406 -29.046875 22.179688 -30.703125 18.453125 -30.703125 C 15.503906 -30.703125 13.207031 -29.5625 11.5625 -27.28125 C 9.914062 -25.007812 9.09375 -21.644531 9.09375 -17.1875 Z M 9.09375 -17.1875 " />
          </g>
        </g>
      </g>
      <g
        fill={theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "#242424"}
        fillOpacity="1"
      >
        <g transform="translate(297.691899, 217.483344)">
          <g>
            <path d="M 16.046875 -8.796875 L 24.234375 -35.15625 L 30.671875 -35.15625 L 16.53125 5.421875 C 14.34375 11.273438 10.867188 14.203125 6.109375 14.203125 L 4.96875 14.09375 L 2.734375 13.671875 L 2.734375 8.796875 L 4.359375 8.9375 C 6.390625 8.9375 7.972656 8.523438 9.109375 7.703125 C 10.242188 6.878906 11.179688 5.375 11.921875 3.1875 L 13.25 -0.390625 L 0.71875 -35.15625 L 7.28125 -35.15625 Z M 16.046875 -8.796875 " />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoText;
